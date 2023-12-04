import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { getSrcPath } from '..';

export default function unplugin(viteEnv: MetaEnvCustom) {
  const { VITE_ICON_LOCAL_PREFIX, VITE_ICON_PREFIX } = viteEnv as MetaEnvCustom;
  const srcPath: string = getSrcPath();
  const localIconPath: string = `${srcPath}/assets/svg`;
    /** 本地svg图标集合名称 */
  const collectionName: string = VITE_ICON_LOCAL_PREFIX.replace(`${ VITE_ICON_PREFIX }-`, '');

  return [
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, svg =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        )
      },
      scale: 1,
      defaultClass: 'inline-block'
    }),

    AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      resolvers: [ElementPlusResolver(), ]
    }),

    Components({
      // dts: false, // 不自动生成component.d.ts
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX })
      ]
    }),

    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
      inject: 'body-last',
      customDomId: '__SVG_ICON_LOCAL__'
    })
  ]
}