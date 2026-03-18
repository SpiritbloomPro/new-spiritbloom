import { visit } from 'unist-util-visit';

function isMarker(node, expectedValue) {
  if (node.type === 'paragraph' && node.children && node.children.length === 1 && node.children[0].type === 'text') {
    const text = node.children[0].value.trim();
    if (expectedValue) {
      return text === expectedValue;
    }
    const match = text.match(/^\[-(.*)-\]$/);
    if (match) {
      return match[1];
    }
  }
  return false;
}

export default function remarkEasierTabs() {
  return (tree) => {
    function processNodes(children) {
      let i = 0;
      while (i < children.length) {
        if (isMarker(children[i], '[-Tabs-]')) {
          // Find the matching [-EndTabs-]
          let depth = 1;
          let j = i + 1;
          while (j < children.length) {
            if (isMarker(children[j], '[-Tabs-]')) {
              depth++;
            } else if (isMarker(children[j], '[-EndTabs-]')) {
              depth--;
              if (depth === 0) {
                break;
              }
            }
            j++;
          }
          
          if (depth === 0 && j < children.length) {
            // We found the bounds of these tabs: from i+1 to j-1
            const tabsContent = children.slice(i + 1, j);
            
            // Collect TabItems, respecting nested tabs
            const tabItems = [];
            let currentTabValue = null;
            let currentTabContent = [];
            
            let k = 0;
            while (k < tabsContent.length) {
              const node = tabsContent[k];
              const markerValue = isMarker(node);
              
              if (markerValue === 'Tabs') {
                if (currentTabValue) {
                  currentTabContent.push(node);
                }
                let nestedDepth = 1;
                k++;
                while (k < tabsContent.length) {
                  const nestedNode = tabsContent[k];
                  const nestedMarker = isMarker(nestedNode);
                  if (currentTabValue) {
                    currentTabContent.push(nestedNode);
                  }
                  if (nestedMarker === 'Tabs') {
                    nestedDepth++;
                  } else if (nestedMarker === 'EndTabs') {
                    nestedDepth--;
                    if (nestedDepth === 0) {
                      break;
                    }
                  }
                  k++;
                }
              } else if (markerValue && markerValue !== 'EndTabs') {
                if (currentTabValue) {
                  tabItems.push({ value: currentTabValue, content: currentTabContent });
                }
                currentTabValue = markerValue;
                currentTabContent = [];
              } else {
                if (currentTabValue) {
                  currentTabContent.push(node);
                }
              }
              k++;
            }
            if (currentTabValue) {
              tabItems.push({ value: currentTabValue, content: currentTabContent });
            }
            
            // Process nested tabs inside each TabItem
            tabItems.forEach(tabItem => {
              processNodes(tabItem.content);
            });
            
            const tabsNode = {
              type: 'mdxJsxFlowElement',
              name: 'Tabs',
              children: tabItems.map((tab, index) => {
                const attributes = [
                  { type: 'mdxJsxAttribute', name: 'value', value: tab.value }
                ];
                if (index === 0) {
                  attributes.push({ type: 'mdxJsxAttribute', name: 'default', value: null }); // value: null means boolean true
                }
                return {
                  type: 'mdxJsxFlowElement',
                  name: 'TabItem',
                  attributes,
                  children: tab.content
                };
              })
            };
            
            // Replace the nodes from i to j (inclusive) with the new tabsNode
            children.splice(i, j - i + 1, tabsNode);
            // No need to increment i as the new node is at i
            continue;
          }
        } else if (children[i].children) {
           processNodes(children[i].children);
        }
        i++;
      }
    }
    
    if (tree && tree.children) {
      processNodes(tree.children);
    }
  };
}