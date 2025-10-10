import {visit} from 'unist-util-visit';

export default function remarkWowheadLink() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /!([^!]+)!/g;
      let match;
      let lastIndex = 0;
      const newNodes = [];

      while ((match = regex.exec(node.value)) !== null) {
        // Text before the match
        if (match.index > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, match.index),
          });
        }
        // The WowheadLink MDX inline element
        newNodes.push({
          type: 'mdxJsxTextElement',
          name: 'WowheadLink',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'spellShorthand',
              value: match[1],
            },
          ],
          children: [],
        });
        lastIndex = regex.lastIndex;
      }

      // Text after the last match
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      if (newNodes.length > 0 && parent && Array.isArray(parent.children)) {
        parent.children.splice(index, 1, ...newNodes);
        return [visit.SKIP, index + newNodes.length];
      }
    });
  };
}