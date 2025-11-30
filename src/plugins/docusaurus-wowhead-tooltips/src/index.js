const path = require('path');
module.exports = function (context) {
   return {
    name: 'docusaurus-plugin-wowhead-tooltips',
    getClientModules() {
       return [
         path.resolve(__dirname, './tooltips')
       ];
     },
    injectHtmlTags() {
      return {
        headTags: [
          // https://www.wowhead.com/tooltips
          {
            tagName: 'script',
            innerHTML: `
              const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: false};

              document.addEventListener('readystatechange', event => {
                if (event.target.readyState === "complete") {
                  window.$WowheadPower.refreshLinks();
                }
               });
            `,
          },
          {
            tagName: 'script',
            attributes: {
              //defer: true,
              src: 'https://wow.zamimg.com/widgets/power.js',
            },
          },
        ],
      };
    },
  };
};