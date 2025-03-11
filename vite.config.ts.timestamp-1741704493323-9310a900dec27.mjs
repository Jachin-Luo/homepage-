// vite.config.ts
import path, { basename, dirname, resolve } from "node:path";
import { Buffer } from "node:buffer";
import { defineConfig } from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite@4.4.3_@types+node@18.16.19/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/Coding/homepage-/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.3_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-pages@0.31.0_vite@4.4.3/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-ssg-sitemap@0.5.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@4.4.3_vue-router@4.5.0_vue@3.3.4/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-vue-components@0.25.1_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.2.1_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-vue-markdown@0.23.5_rollup@2.79.1_vite@4.4.3/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import { VitePWA } from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-pwa@0.16.4_vite@4.4.3_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueI18n from "file:///D:/Coding/homepage-/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.12.2_rollup@2.79.1_vue-i18n@9.2.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import VueDevTools from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-vue-devtools@0.5.1_@types+node@18.16.19_nprogress@0.2.0_pug@3.0.2_rollup@2.79.1_vite@4.4.3_vue@3.3.4/node_modules/vite-plugin-vue-devtools/dist/index.mjs";
import LinkAttributes from "file:///D:/Coding/homepage-/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import VueMacros from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-vue-macros@2.3.6_@vueuse+core@10.2.1_rollup@2.79.1_vite@4.4.3_vue@3.3.4/node_modules/unplugin-vue-macros/dist/vite.mjs";
import WebfontDownload from "file:///D:/Coding/homepage-/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.6_vite@4.4.3/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-vue-router@0.11.2_rollup@2.79.1_vue-router@4.5.0_vue@3.3.4/node_modules/unplugin-vue-router/dist/vite.js";
import matter from "file:///D:/Coding/homepage-/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import fs from "file:///D:/Coding/homepage-/node_modules/.pnpm/fs-extra@11.3.0/node_modules/fs-extra/lib/index.js";
import TOC from "file:///D:/Coding/homepage-/node_modules/.pnpm/markdown-it-table-of-contents@0.9.0/node_modules/markdown-it-table-of-contents/index.js";
import sharp from "file:///D:/Coding/homepage-/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js";
import GitHubAlerts from "file:///D:/Coding/homepage-/node_modules/.pnpm/markdown-it-github-alerts@0.3.1_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import MarkdownItShiki from "file:///D:/Coding/homepage-/node_modules/.pnpm/@shikijs+markdown-it@3.1.0/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///D:/Coding/homepage-/node_modules/.pnpm/@shikijs+twoslash@3.1.0_typescript@5.1.6/node_modules/@shikijs/twoslash/dist/index.mjs";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight } from "file:///D:/Coding/homepage-/node_modules/.pnpm/@shikijs+transformers@3.1.0/node_modules/@shikijs/transformers/dist/index.mjs";
import anchor from "file:///D:/Coding/homepage-/node_modules/.pnpm/markdown-it-anchor@9.2.0_@types+markdown-it@14.1.2_markdown-it@14.1.0/node_modules/markdown-it-anchor/dist/markdownItAnchor.js";
import MarkdownItMagicLink from "file:///D:/Coding/homepage-/node_modules/.pnpm/markdown-it-magic-link@0.1.4/node_modules/markdown-it-magic-link/dist/index.mjs";
import Icons from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-icons@0.17.0/node_modules/unplugin-icons/dist/vite.mjs";
import { FileSystemIconLoader } from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-icons@0.17.0/node_modules/unplugin-icons/dist/loaders.mjs";
import IconsResolver from "file:///D:/Coding/homepage-/node_modules/.pnpm/unplugin-icons@0.17.0/node_modules/unplugin-icons/dist/resolver.mjs";
import UnoCSS from "file:///D:/Coding/homepage-/node_modules/.pnpm/unocss@0.53.5_postcss@8.5.3_rollup@2.79.1_vite@4.4.3/node_modules/unocss/dist/vite.mjs";
import presetUno from "file:///D:/Coding/homepage-/node_modules/.pnpm/@unocss+preset-uno@0.53.5/node_modules/@unocss/preset-uno/dist/index.mjs";
import presetAttributify from "file:///D:/Coding/homepage-/node_modules/.pnpm/@unocss+preset-attributify@0.53.5/node_modules/@unocss/preset-attributify/dist/index.mjs";

// scripts/slugify.ts
import { remove } from "file:///D:/Coding/homepage-/node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js";
var rControl = /[\u0000-\u001F]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
function slugify(str) {
  return remove(str).replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
}

// vite.config.ts
var __vite_injected_original_dirname = "D:\\Coding\\homepage-";
var promises = [];
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueRouter({
      extensions: [".vue", ".md"],
      routesFolder: "pages",
      // logs: true,
      extendRoute(route) {
        const path2 = route.components.get("default");
        if (!path2)
          return;
        if (!path2.includes("projects.md") && path2.endsWith(".md")) {
          const { data } = matter(fs.readFileSync(path2, "utf-8"));
          route.addToMeta({
            frontmatter: data
          });
        }
      }
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS({
      presets: [presetUno(), presetAttributify()]
    }),
    // 图标
    Icons({
      compiler: "vue3",
      autoInstall: true,
      defaultClass: "inline",
      defaultStyle: "vertical-align: sub;",
      // 自定义svg图标
      customCollections: {
        // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
        custom: FileSystemIconLoader(
          "src/assets/svg/custom",
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"],
      extendRoute(route) {
        const path2 = resolve(__vite_injected_original_dirname, route.component.slice(1));
        if (!path2.includes("projects.md") && path2.endsWith(".md")) {
          const md = fs.readFileSync(path2, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }
        return route;
      }
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
      // 自定义图标解析器
      resolvers: [
        IconsResolver({
          prefix: "i",
          customCollections: ["custom"]
        })
      ]
    }),
    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperComponent: "Wrapper",
      wrapperClasses: "prose m-auto text-left ",
      headEnabled: true,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: `""''`
      },
      async markdownItSetup(md) {
        md.use(await MarkdownItShiki({
          themes: {
            dark: "vitesse-dark",
            light: "vitesse-light"
          },
          defaultColor: false,
          cssVariablePrefix: "--s-",
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
              renderer: rendererRich()
            }),
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight()
          ]
        }));
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: "#",
            renderAttrs: () => ({ "aria-hidden": "true" })
          })
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>'
        });
        md.use(MarkdownItMagicLink, {
          linksMap: {
            "NuxtLabs": "https://nuxtlabs.com",
            "Vitest": "https://github.com/vitest-dev/vitest",
            "Slidev": "https://github.com/slidevjs/slidev",
            "VueUse": "https://github.com/vueuse/vueuse",
            "UnoCSS": "https://github.com/unocss/unocss",
            "Elk": "https://github.com/elk-zone/elk",
            "Type Challenges": "https://github.com/type-challenges/type-challenges",
            "Vue": "https://github.com/vuejs/core",
            "Nuxt": "https://github.com/nuxt/nuxt",
            "Vite": "https://github.com/vitejs/vite",
            "Shiki": "https://github.com/shikijs/shiki",
            "Twoslash": "https://github.com/twoslashes/twoslash",
            "ESLint Stylistic": "https://github.com/eslint-stylistic/eslint-stylistic",
            "Unplugin": "https://github.com/unplugin",
            "Nuxt DevTools": "https://github.com/nuxt/devtools",
            "Vite PWA": "https://github.com/vite-pwa",
            "i18n Ally": "https://github.com/lokalise/i18n-ally",
            "ESLint": "https://github.com/eslint/eslint",
            "Astro": "https://github.com/withastro/astro",
            "TwoSlash": "https://github.com/twoslashes/twoslash",
            "Anthony Fu Collective": { link: "https://opencollective.com/antfu", imageUrl: "https://github.com/antfu-collective.png" },
            "Netlify": { link: "https://netlify.com", imageUrl: "https://github.com/netlify.png" },
            "Stackblitz": { link: "https://stackblitz.com", imageUrl: "https://github.com/stackblitz.png" },
            "Vercel": { link: "https://vercel.com", imageUrl: "https://github.com/vercel.png" }
          },
          imageOverrides: [
            ["https://github.com/vuejs/core", "https://vuejs.org/logo.svg"],
            ["https://github.com/nuxt/nuxt", "https://nuxt.com/assets/design-kit/icon-green.svg"],
            ["https://github.com/vitejs/vite", "https://vitejs.dev/logo.svg"],
            ["https://github.com/sponsors", "https://github.com/github.png"],
            ["https://github.com/sponsors/antfu", "https://github.com/github.png"],
            ["https://nuxtlabs.com", "https://github.com/nuxtlabs.png"],
            [/opencollective\.com\/vite/, "https://github.com/vitejs.png"],
            [/opencollective\.com\/elk/, "https://github.com/elk-zone.png"]
          ]
        });
        md.use(GitHubAlerts);
      },
      frontmatterPreprocess(frontmatter, options, id, defaults) {
        (() => {
          if (!id.endsWith(".md"))
            return;
          const route = basename(id, ".md");
          if (route === "index" || frontmatter.image || !frontmatter.title)
            return;
          const path2 = `og/${route}.png`;
          promises.push(
            fs.existsSync(`${id.slice(0, -3)}.png`) ? fs.copy(`${id.slice(0, -3)}.png`, `public/${path2}`) : generateOg(frontmatter.title.replace(/\s-\s.*$/, "").trim(), `public/${path2}`)
          );
          frontmatter.image = `https://antfu.me/${path2}`;
        })();
        const head = defaults(frontmatter, options);
        return { head, frontmatter };
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
var ogSVg = fs.readFileSync("./scripts/og-template.svg", "utf-8");
async function generateOg(title, output) {
  if (fs.existsSync(output))
    return;
  await fs.mkdir(dirname(output), { recursive: true });
  const lines = title.trim().split(/(.{0,30})(?:\s|$)/g).filter(Boolean);
  const data = {
    line1: lines[0],
    line2: lines[1],
    line3: lines[2]
  };
  const svg = ogSVg.replace(/\{\{([^}]+)\}\}/g, (_, name) => data[name] || "");
  console.log(`Generating ${output}`);
  try {
    await sharp(Buffer.from(svg)).resize(1200 * 1.1, 630 * 1.1).png().toFile(output);
  } catch (e) {
    console.error("Failed to generate og image", e);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9zbHVnaWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ29kaW5nXFxcXGhvbWVwYWdlLVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kaW5nXFxcXGhvbWVwYWdlLVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kaW5nL2hvbWVwYWdlLS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoLCB7IGJhc2VuYW1lLCBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xyXG5cclxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnbm9kZTpidWZmZXInXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi12dWUtbWFya2Rvd24nXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmltcG9ydCBWdWVJMThuIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXHJcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXHJcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXHJcbmltcG9ydCBWdWVNYWNyb3MgZnJvbSAndW5wbHVnaW4tdnVlLW1hY3Jvcy92aXRlJ1xyXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXHJcbmltcG9ydCBUT0MgZnJvbSAnbWFya2Rvd24taXQtdGFibGUtb2YtY29udGVudHMnXHJcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCdcclxuaW1wb3J0IEdpdEh1YkFsZXJ0cyBmcm9tICdtYXJrZG93bi1pdC1naXRodWItYWxlcnRzJ1xyXG5pbXBvcnQgTWFya2Rvd25JdFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xyXG5pbXBvcnQgeyByZW5kZXJlclJpY2gsIHRyYW5zZm9ybWVyVHdvc2xhc2ggfSBmcm9tICdAc2hpa2lqcy90d29zbGFzaCdcclxuaW1wb3J0IHsgdHJhbnNmb3JtZXJOb3RhdGlvbkRpZmYsIHRyYW5zZm9ybWVyTm90YXRpb25IaWdobGlnaHQsIHRyYW5zZm9ybWVyTm90YXRpb25Xb3JkSGlnaGxpZ2h0IH0gZnJvbSAnQHNoaWtpanMvdHJhbnNmb3JtZXJzJ1xyXG5pbXBvcnQgYW5jaG9yIGZyb20gJ21hcmtkb3duLWl0LWFuY2hvcidcclxuaW1wb3J0IE1hcmtkb3duSXRNYWdpY0xpbmsgZnJvbSAnbWFya2Rvd24taXQtbWFnaWMtbGluaydcclxuXHJcbi8qXHJcbiAgXHU1NkZFXHU2ODA3XHU1RTkzaWNvblxyXG4gIHN2Z1x1ODlFM1x1Njc5MFxyXG4gIFx1ODFFQVx1NUI5QVx1NEU0OVx1NTZGRVx1NjgwNy1zdmdcdTg5RTNcdTY3OTBcclxuICovXHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG5pbXBvcnQgeyBGaWxlU3lzdGVtSWNvbkxvYWRlciB9IGZyb20gJ3VucGx1Z2luLWljb25zL2xvYWRlcnMnXHJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xyXG5cclxuLy8gdW5vQ3NzXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCBwcmVzZXRVbm8gZnJvbSAnQHVub2Nzcy9wcmVzZXQtdW5vJ1xyXG5pbXBvcnQgcHJlc2V0QXR0cmlidXRpZnkgZnJvbSAnQHVub2Nzcy9wcmVzZXQtYXR0cmlidXRpZnknXHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcclxuXHJcbmNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgZXh0ZW5zaW9uczogWycudnVlJywgJy5tZCddLFxyXG4gICAgICByb3V0ZXNGb2xkZXI6ICdwYWdlcycsXHJcbiAgICAgIC8vIGxvZ3M6IHRydWUsXHJcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHJvdXRlLmNvbXBvbmVudHMuZ2V0KCdkZWZhdWx0JylcclxuICAgICAgICBpZiAoIXBhdGgpXHJcbiAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKCFwYXRoLmluY2x1ZGVzKCdwcm9qZWN0cy5tZCcpICYmIHBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JykpXHJcbiAgICAgICAgICByb3V0ZS5hZGRUb01ldGEoe1xyXG4gICAgICAgICAgICBmcm9udG1hdHRlcjogZGF0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXHJcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXHJcbiAgICBVbm9DU1Moe1xyXG4gICAgICBwcmVzZXRzOiBbcHJlc2V0VW5vKCksIHByZXNldEF0dHJpYnV0aWZ5KCldLFxyXG4gICAgfSksXHJcbiAgICAvLyBcdTU2RkVcdTY4MDdcclxuICAgIEljb25zKHtcclxuICAgICAgY29tcGlsZXI6ICd2dWUzJyxcclxuICAgICAgYXV0b0luc3RhbGw6IHRydWUsXHJcbiAgICAgIGRlZmF1bHRDbGFzczogJ2lubGluZScsXHJcbiAgICAgIGRlZmF1bHRTdHlsZTogJ3ZlcnRpY2FsLWFsaWduOiBzdWI7JyxcclxuICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5c3ZnXHU1NkZFXHU2ODA3XHJcbiAgICAgIGN1c3RvbUNvbGxlY3Rpb25zOiB7XHJcbiAgICAgICAgLy8gXHU3RUQ5c3ZnXHU2NTg3XHU0RUY2XHU4QkJFXHU3RjZFZmlsbD1cImN1cnJlbnRDb2xvclwiXHU1QzVFXHU2MDI3XHVGRjBDXHU0RjdGXHU1NkZFXHU2ODA3XHU3Njg0XHU5ODlDXHU4MjcyXHU1MTc3XHU2NzA5XHU5MDAyXHU1RTk0XHU2MDI3XHJcbiAgICAgICAgY3VzdG9tOiBGaWxlU3lzdGVtSWNvbkxvYWRlcignc3JjL2Fzc2V0cy9zdmcvY3VzdG9tJywgc3ZnID0+XHJcbiAgICAgICAgICBzdmcucmVwbGFjZSgvXjxzdmcgLywgJzxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiICcpLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBWdWVNYWNyb3Moe1xyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgdnVlOiBWdWUoe1xyXG4gICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXHJcbiAgICBQYWdlcyh7XHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCByb3V0ZS5jb21wb25lbnQuc2xpY2UoMSkpXHJcblxyXG4gICAgICAgIGlmICghcGF0aC5pbmNsdWRlcygncHJvamVjdHMubWQnKSAmJiBwYXRoLmVuZHNXaXRoKCcubWQnKSkge1xyXG4gICAgICAgICAgY29uc3QgbWQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKG1kKVxyXG4gICAgICAgICAgcm91dGUubWV0YSA9IE9iamVjdC5hc3NpZ24ocm91dGUubWV0YSB8fCB7fSwgeyBmcm9udG1hdHRlcjogZGF0YSB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xyXG4gICAgTGF5b3V0cygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgJ3Z1ZS1pMThuJyxcclxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgXSxcclxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgZGlyczogW1xyXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxyXG4gICAgICAgICdzcmMvc3RvcmVzJyxcclxuICAgICAgXSxcclxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cclxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcclxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXHJcbiAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NTZGRVx1NjgwN1x1ODlFM1x1Njc5MFx1NTY2OFxyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcclxuICAgICAgICAgIHByZWZpeDogJ2knLFxyXG4gICAgICAgICAgY3VzdG9tQ29sbGVjdGlvbnM6IFsnY3VzdG9tJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcblxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blxyXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXHJcbiAgICBNYXJrZG93bih7XHJcbiAgICAgIHdyYXBwZXJDb21wb25lbnQ6ICdXcmFwcGVyJyxcclxuICAgICAgd3JhcHBlckNsYXNzZXM6ICdwcm9zZSBtLWF1dG8gdGV4dC1sZWZ0ICcsXHJcbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxyXG4gICAgICBleHBvc2VGcm9udG1hdHRlcjogZmFsc2UsXHJcbiAgICAgIGV4cG9zZUV4Y2VycHQ6IGZhbHNlLFxyXG4gICAgICBtYXJrZG93bkl0T3B0aW9uczoge1xyXG4gICAgICAgIHF1b3RlczogJ1wiXCJcXCdcXCcnLFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBtYXJrZG93bkl0U2V0dXAobWQpIHtcclxuICAgICAgICBtZC51c2UoYXdhaXQgTWFya2Rvd25JdFNoaWtpKHtcclxuICAgICAgICAgIHRoZW1lczoge1xyXG4gICAgICAgICAgICBkYXJrOiAndml0ZXNzZS1kYXJrJyxcclxuICAgICAgICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgY3NzVmFyaWFibGVQcmVmaXg6ICctLXMtJyxcclxuICAgICAgICAgIHRyYW5zZm9ybWVyczogW1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKHtcclxuICAgICAgICAgICAgICBleHBsaWNpdFRyaWdnZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyUmljaCgpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtZXJOb3RhdGlvbkRpZmYoKSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtZXJOb3RhdGlvbkhpZ2hsaWdodCgpLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lck5vdGF0aW9uV29yZEhpZ2hsaWdodCgpLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgbWQudXNlKGFuY2hvciwge1xyXG4gICAgICAgICAgc2x1Z2lmeSxcclxuICAgICAgICAgIHBlcm1hbGluazogYW5jaG9yLnBlcm1hbGluay5saW5rSW5zaWRlSGVhZGVyKHtcclxuICAgICAgICAgICAgc3ltYm9sOiAnIycsXHJcbiAgICAgICAgICAgIHJlbmRlckF0dHJzOiAoKSA9PiAoeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtZC51c2UoTGlua0F0dHJpYnV0ZXMsIHtcclxuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcclxuICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWQudXNlKFRPQywge1xyXG4gICAgICAgICAgaW5jbHVkZUxldmVsOiBbMSwgMiwgMywgNF0sXHJcbiAgICAgICAgICBzbHVnaWZ5LFxyXG4gICAgICAgICAgY29udGFpbmVySGVhZGVySHRtbDogJzxkaXYgY2xhc3M9XCJ0YWJsZS1vZi1jb250ZW50cy1hbmNob3JcIj48ZGl2IGNsYXNzPVwiaS1yaS1tZW51LTItZmlsbFwiIC8+PC9kaXY+JyxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtZC51c2UoTWFya2Rvd25JdE1hZ2ljTGluaywge1xyXG4gICAgICAgICAgbGlua3NNYXA6IHtcclxuICAgICAgICAgICAgJ051eHRMYWJzJzogJ2h0dHBzOi8vbnV4dGxhYnMuY29tJyxcclxuICAgICAgICAgICAgJ1ZpdGVzdCc6ICdodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3QnLFxyXG4gICAgICAgICAgICAnU2xpZGV2JzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zbGlkZXZqcy9zbGlkZXYnLFxyXG4gICAgICAgICAgICAnVnVlVXNlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWV1c2UvdnVldXNlJyxcclxuICAgICAgICAgICAgJ1Vub0NTUyc6ICdodHRwczovL2dpdGh1Yi5jb20vdW5vY3NzL3Vub2NzcycsXHJcbiAgICAgICAgICAgICdFbGsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2Vsay16b25lL2VsaycsXHJcbiAgICAgICAgICAgICdUeXBlIENoYWxsZW5nZXMnOiAnaHR0cHM6Ly9naXRodWIuY29tL3R5cGUtY2hhbGxlbmdlcy90eXBlLWNoYWxsZW5nZXMnLFxyXG4gICAgICAgICAgICAnVnVlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb3JlJyxcclxuICAgICAgICAgICAgJ051eHQnOiAnaHR0cHM6Ly9naXRodWIuY29tL251eHQvbnV4dCcsXHJcbiAgICAgICAgICAgICdWaXRlJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZScsXHJcbiAgICAgICAgICAgICdTaGlraSc6ICdodHRwczovL2dpdGh1Yi5jb20vc2hpa2lqcy9zaGlraScsXHJcbiAgICAgICAgICAgICdUd29zbGFzaCc6ICdodHRwczovL2dpdGh1Yi5jb20vdHdvc2xhc2hlcy90d29zbGFzaCcsXHJcbiAgICAgICAgICAgICdFU0xpbnQgU3R5bGlzdGljJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQtc3R5bGlzdGljL2VzbGludC1zdHlsaXN0aWMnLFxyXG4gICAgICAgICAgICAnVW5wbHVnaW4nOiAnaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luJyxcclxuICAgICAgICAgICAgJ051eHQgRGV2VG9vbHMnOiAnaHR0cHM6Ly9naXRodWIuY29tL251eHQvZGV2dG9vbHMnLFxyXG4gICAgICAgICAgICAnVml0ZSBQV0EnOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpdGUtcHdhJyxcclxuICAgICAgICAgICAgJ2kxOG4gQWxseSc6ICdodHRwczovL2dpdGh1Yi5jb20vbG9rYWxpc2UvaTE4bi1hbGx5JyxcclxuICAgICAgICAgICAgJ0VTTGludCc6ICdodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludCcsXHJcbiAgICAgICAgICAgICdBc3Rybyc6ICdodHRwczovL2dpdGh1Yi5jb20vd2l0aGFzdHJvL2FzdHJvJyxcclxuICAgICAgICAgICAgJ1R3b1NsYXNoJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90d29zbGFzaGVzL3R3b3NsYXNoJyxcclxuICAgICAgICAgICAgJ0FudGhvbnkgRnUgQ29sbGVjdGl2ZSc6IHsgbGluazogJ2h0dHBzOi8vb3BlbmNvbGxlY3RpdmUuY29tL2FudGZ1JywgaW1hZ2VVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vYW50ZnUtY29sbGVjdGl2ZS5wbmcnIH0sXHJcbiAgICAgICAgICAgICdOZXRsaWZ5JzogeyBsaW5rOiAnaHR0cHM6Ly9uZXRsaWZ5LmNvbScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25ldGxpZnkucG5nJyB9LFxyXG4gICAgICAgICAgICAnU3RhY2tibGl0eic6IHsgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20nLCBpbWFnZVVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGFja2JsaXR6LnBuZycgfSxcclxuICAgICAgICAgICAgJ1ZlcmNlbCc6IHsgbGluazogJ2h0dHBzOi8vdmVyY2VsLmNvbScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC5wbmcnIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW1hZ2VPdmVycmlkZXM6IFtcclxuICAgICAgICAgICAgWydodHRwczovL2dpdGh1Yi5jb20vdnVlanMvY29yZScsICdodHRwczovL3Z1ZWpzLm9yZy9sb2dvLnN2ZyddLFxyXG4gICAgICAgICAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9udXh0L251eHQnLCAnaHR0cHM6Ly9udXh0LmNvbS9hc3NldHMvZGVzaWduLWtpdC9pY29uLWdyZWVuLnN2ZyddLFxyXG4gICAgICAgICAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZScsICdodHRwczovL3ZpdGVqcy5kZXYvbG9nby5zdmcnXSxcclxuICAgICAgICAgICAgWydodHRwczovL2dpdGh1Yi5jb20vc3BvbnNvcnMnLCAnaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi5wbmcnXSxcclxuICAgICAgICAgICAgWydodHRwczovL2dpdGh1Yi5jb20vc3BvbnNvcnMvYW50ZnUnLCAnaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi5wbmcnXSxcclxuICAgICAgICAgICAgWydodHRwczovL251eHRsYWJzLmNvbScsICdodHRwczovL2dpdGh1Yi5jb20vbnV4dGxhYnMucG5nJ10sXHJcbiAgICAgICAgICAgIFsvb3BlbmNvbGxlY3RpdmVcXC5jb21cXC92aXRlLywgJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMucG5nJ10sXHJcbiAgICAgICAgICAgIFsvb3BlbmNvbGxlY3RpdmVcXC5jb21cXC9lbGsvLCAnaHR0cHM6Ly9naXRodWIuY29tL2Vsay16b25lLnBuZyddLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtZC51c2UoR2l0SHViQWxlcnRzKVxyXG4gICAgICB9LFxyXG4gICAgICBmcm9udG1hdHRlclByZXByb2Nlc3MoZnJvbnRtYXR0ZXIsIG9wdGlvbnMsIGlkLCBkZWZhdWx0cykge1xyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWlkLmVuZHNXaXRoKCcubWQnKSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICBjb25zdCByb3V0ZSA9IGJhc2VuYW1lKGlkLCAnLm1kJylcclxuICAgICAgICAgIGlmIChyb3V0ZSA9PT0gJ2luZGV4JyB8fCBmcm9udG1hdHRlci5pbWFnZSB8fCAhZnJvbnRtYXR0ZXIudGl0bGUpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgY29uc3QgcGF0aCA9IGBvZy8ke3JvdXRlfS5wbmdgXHJcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICBmcy5leGlzdHNTeW5jKGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYClcclxuICAgICAgICAgICAgICA/IGZzLmNvcHkoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgLCBgcHVibGljLyR7cGF0aH1gKVxyXG4gICAgICAgICAgICAgIDogZ2VuZXJhdGVPZyhmcm9udG1hdHRlci50aXRsZSEucmVwbGFjZSgvXFxzLVxccy4qJC8sICcnKS50cmltKCksIGBwdWJsaWMvJHtwYXRofWApLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgZnJvbnRtYXR0ZXIuaW1hZ2UgPSBgaHR0cHM6Ly9hbnRmdS5tZS8ke3BhdGh9YFxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBjb25zdCBoZWFkID0gZGVmYXVsdHMoZnJvbnRtYXR0ZXIsIG9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIHsgaGVhZCwgZnJvbnRtYXR0ZXIgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6ICdWaXRlc3NlJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxyXG4gICAgVnVlSTE4bih7XHJcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxyXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXHJcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxyXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVhdC1hZ2VuY3kvdml0ZS1wbHVnaW4td2ViZm9udC1kbFxyXG4gICAgV2ViZm9udERvd25sb2FkKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYmZhbnNwbHovdml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXHJcbiAgICBWdWVEZXZUb29scygpLFxyXG4gIF0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlc3QtZGV2L3ZpdGVzdFxyXG4gIHRlc3Q6IHtcclxuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgZGVwczoge1xyXG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xyXG4gIHNzZ09wdGlvbnM6IHtcclxuICAgIHNjcmlwdDogJ2FzeW5jJyxcclxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxyXG4gICAgY3JpdHRlcnNPcHRpb25zOiB7XHJcbiAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25GaW5pc2hlZCgpIHtcclxuICAgICAgZ2VuZXJhdGVTaXRlbWFwKClcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3NyOiB7XHJcbiAgICAvLyBUT0RPOiB3b3JrYXJvdW5kIHVudGlsIHRoZXkgc3VwcG9ydCBuYXRpdmUgRVNNXHJcbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXHJcbiAgfSxcclxufSlcclxuY29uc3Qgb2dTVmcgPSBmcy5yZWFkRmlsZVN5bmMoJy4vc2NyaXB0cy9vZy10ZW1wbGF0ZS5zdmcnLCAndXRmLTgnKVxyXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU9nKHRpdGxlOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nKSB7XHJcbiAgaWYgKGZzLmV4aXN0c1N5bmMob3V0cHV0KSlcclxuICAgIHJldHVyblxyXG5cclxuICBhd2FpdCBmcy5ta2RpcihkaXJuYW1lKG91dHB1dCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXHJcbiAgLy8gYnJlYWtsaW5lIGV2ZXJ5IDMwIGNoYXJzXHJcbiAgY29uc3QgbGluZXMgPSB0aXRsZS50cmltKCkuc3BsaXQoLyguezAsMzB9KSg/Olxcc3wkKS9nKS5maWx0ZXIoQm9vbGVhbilcclxuXHJcbiAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIGxpbmUxOiBsaW5lc1swXSxcclxuICAgIGxpbmUyOiBsaW5lc1sxXSxcclxuICAgIGxpbmUzOiBsaW5lc1syXSxcclxuICB9XHJcbiAgY29uc3Qgc3ZnID0gb2dTVmcucmVwbGFjZSgvXFx7XFx7KFtefV0rKVxcfVxcfS9nLCAoXywgbmFtZSkgPT4gZGF0YVtuYW1lXSB8fCAnJylcclxuXHJcbiAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHtvdXRwdXR9YClcclxuICB0cnkge1xyXG4gICAgYXdhaXQgc2hhcnAoQnVmZmVyLmZyb20oc3ZnKSlcclxuICAgICAgLnJlc2l6ZSgxMjAwICogMS4xLCA2MzAgKiAxLjEpXHJcbiAgICAgIC5wbmcoKVxyXG4gICAgICAudG9GaWxlKG91dHB1dClcclxuICB9XHJcbiAgY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBvZyBpbWFnZScsIGUpXHJcbiAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQ29kaW5nXFxcXGhvbWVwYWdlLVxcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDb2RpbmdcXFxcaG9tZXBhZ2UtXFxcXHNjcmlwdHNcXFxcc2x1Z2lmeS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kaW5nL2hvbWVwYWdlLS9zY3JpcHRzL3NsdWdpZnkudHNcIjsvLyBzdHJpbmcuanMgc2x1Z2lmeSBkcm9wcyBub24gYXNjaWkgY2hhcnMgc28gd2UgaGF2ZSB0b1xuLy8gdXNlIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIGhlcmVcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2RpYWNyaXRpY3MnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCByQ29udHJvbCA9IC9bXFx1MDAwMC1cXHUwMDFGXS9nXG5jb25zdCByU3BlY2lhbCA9IC9bXFxzfmAhQCMkJV4mKigpXFwtXys9W1xcXXt9fFxcXFw7OlwiJzw+LC4/L10rL2dcblxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHJlbW92ZShzdHIpXG4gICAgICAvLyBSZW1vdmUgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZShyQ29udHJvbCwgJycpXG4gICAgICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoclNwZWNpYWwsICctJylcbiAgICAgIC8vIFJlbW92ZSBjb250aW51b3Mgc2VwYXJhdG9yc1xuICAgICAgLnJlcGxhY2UoLy17Mix9L2csICctJylcbiAgICAgIC8vIFJlbW92ZSBwcmVmaXhpbmcgYW5kIHRyYWlsaW5nIHNlcGFydG9yc1xuICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpXG4gICAgICAvLyBlbnN1cmUgaXQgZG9lc24ndCBzdGFydCB3aXRoIGEgbnVtYmVyICgjMTIxKVxuICAgICAgLnJlcGxhY2UoL14oXFxkKS8sICdfJDEnKVxuICAgICAgLy8gbG93ZXJjYXNlXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLE9BQU8sUUFBUSxVQUFVLFNBQVMsZUFBZTtBQUVs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
