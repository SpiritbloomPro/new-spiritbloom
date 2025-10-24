import { visit } from 'unist-util-visit';

export default function remarkWowheadTalents() {
  return (tree) => {
    const re = /\(([^/()]+)\/([^/()]+)\/([A-Za-z0-9]+)\)/g;

    visit(tree, 'text', (node, index, parent) => {
      if (!node || typeof node.value !== 'string') return;
      const value = node.value;
      const newNodes = [];
      let lastIndex = 0;
      let match;

      while ((match = re.exec(value)) !== null) {
        const [full, spec, hero, string] = match;
        const start = match.index;

        // Text before match
        if (start > lastIndex) {
          newNodes.push({ type: 'text', value: value.slice(lastIndex, start) });
        }

        // Replace with JSX node (this works in MDX v3)
        newNodes.push({
          type: 'mdxJsxTextElement',
          name: 'WowheadTalents',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'spec', value: spec },
            { type: 'mdxJsxAttribute', name: 'hero', value: hero },
            { type: 'mdxJsxAttribute', name: 'string', value: string },
          ],
          children: [],
        });

        lastIndex = re.lastIndex;
      }

      if (newNodes.length > 0) {
        // Remaining text after last match
        if (lastIndex < value.length) {
          newNodes.push({ type: 'text', value: value.slice(lastIndex) });
        }

        // Replace node in parent
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}
