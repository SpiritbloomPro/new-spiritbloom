import fs from 'fs';
import path from 'path';

export default function generateContentImagesPlugin(context, options) {
  return {
    name: 'generate-content-images-plugin',
    loadContent() {
      const dungeonsDir = path.resolve(context.siteDir, 'static/img/content/dungeons');
      const raidsDir = path.resolve(context.siteDir, 'static/img/content/raids');

      const dungeonFiles = fs.existsSync(dungeonsDir)
        ? fs.readdirSync(dungeonsDir).filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))
        : [];
      
      const raidFiles = fs.existsSync(raidsDir)
        ? fs.readdirSync(raidsDir).filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))
        : [];

      // Helper to check for file existence and return link info
      const getLinkInfo = (type, filename) => {
        const baseName = filename.replace(/\.[^/.]+$/, "");
        const name = type === 'raids' ? baseName.replace(/^\d+-/, "") : baseName;
        const folders = type === 'dungeons' ? ['Dungeons', 'dungeons'] : ['Raids', 'raids'];
        
        const checkPaths = [];
        for (const folder of folders) {
          checkPaths.push({
            file: `general/${folder}/${name}.md`,
            url: `/general/${folder}/${name}`
          });
        }
        checkPaths.push({
          file: `general/${name}.md`,
          url: `/general/${name}`
        });

        for (const option of checkPaths) {
          const fullPath = path.resolve(context.siteDir, option.file);
          if (fs.existsSync(fullPath)) {
            return {
              link: option.url,
              exists: true
            };
          }
        }

        return {
          link: null,
          exists: false
        };
      };

      const dungeons = dungeonFiles.map(filename => {
        const info = getLinkInfo('dungeons', filename);
        return {
          filename,
          link: info.link,
          exists: info.exists
        };
      });

      const raids = raidFiles.map(filename => {
        const info = getLinkInfo('raids', filename);
        return {
          filename,
          link: info.link,
          exists: info.exists
        };
      });

      // Sort raids by the number in their filename. E.g. "1-averzian.png", "2-vorasius.png"
      raids.sort((a, b) => {
        const numA = parseInt(a.filename.match(/^\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.filename.match(/^\d+/)?.[0] || '0', 10);
        return numA - numB;
      });

      const data = { dungeons, raids };
      const targetPath = path.resolve(context.siteDir, 'src/components/contentImages.json');
      fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf-8');
    },
    getPathsToWatch() {
      const paths = [
        path.resolve(context.siteDir, 'static/img/content/dungeons'),
        path.resolve(context.siteDir, 'static/img/content/raids'),
        path.resolve(context.siteDir, 'general'),
        path.resolve(context.siteDir, 'general/Dungeons'),
        path.resolve(context.siteDir, 'general/Raids'),
        path.resolve(context.siteDir, 'general/dungeons'),
        path.resolve(context.siteDir, 'general/raids'),
      ];
      return paths.filter(p => fs.existsSync(p));
    }
  };
}
