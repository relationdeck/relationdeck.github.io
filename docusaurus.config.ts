import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 網站標題與標語不在翻譯檔的範圍內，依建置中的語系挑選。
// Docusaurus 建置每個語系時會設定 DOCUSAURUS_CURRENT_LOCALE。
const SITE_META: Record<string, { title: string; tagline: string }> = {
  "zh-TW": {
    title: "RelationDeck 關係盒子",
    tagline: "抽一張卡，開啟真實對話、建立深度連結",
  },
  en: {
    title: "RelationDeck",
    tagline: "Draw a card. Start a real conversation.",
  },
};
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? "zh-TW";
const siteMeta = SITE_META[currentLocale] ?? SITE_META["zh-TW"];

// App Store 依語系導到對應的商店區域：中文版連台灣區，英文版連美國區。
const APP_STORE_URL =
  currentLocale === "en"
    ? "https://apps.apple.com/us/app/relationdeck-%E9%97%9C%E4%BF%82%E7%9B%92%E5%AD%90/id6804240926"
    : "https://apps.apple.com/tw/app/relationdeck-%E9%97%9C%E4%BF%82%E7%9B%92%E5%AD%90/id6804240926";

const config: Config = {
  title: siteMeta.title,
  tagline: siteMeta.tagline,
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.relationdeck.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "relationdeck", // Usually your GitHub org/user name.
  projectName: "relationdeck.github.io", // repo

  onBrokenLinks: "throw",

  // 預設語系 zh-TW 走根路徑 /，英文在 /en/ 底下。
  // 翻譯檔在 i18n/<locale>/，新增字串後用 `npm run write-translations -- --locale en` 產生。
  i18n: {
    defaultLocale: "zh-TW",
    locales: ["zh-TW", "en"],
    localeConfigs: {
      "zh-TW": { label: "繁體中文", htmlLang: "zh-TW" },
      en: { label: "English", htmlLang: "en" },
    },
  },

  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600;700&display=swap",
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-PRV36GQC", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/explore",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/explore",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.relationdeck.com/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "RelationDeck",
      logo: {
        alt: "RelationDeck 關係盒子",
        src: "img/logo.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "resourceSidebar",
        //   position: "left",
        //   label: "卡牌資源",
        // },
        { to: "/blog", label: "最新文章", position: "left" },
        { to: "/about", label: "關於我們", position: "left" },
        {
          href: "https://facebook.com/groups/relationdeck",
          label: "加入社群",
          position: "left",
        },
        { type: "localeDropdown", position: "right" },
        {
          to: "/#download",
          label: "下載 App",
          position: "right",
          className: "navbar__download-cta",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "產品",
          items: [
            // {
            //   label: "卡牌資源",
            //   to: "/explore",
            // },
            {
              label: "最新文章",
              to: "/blog",
            },
            {
              label: "關於我們",
              to: "/about",
            },
            {
              label: "隱私權政策",
              to: "/privacy",
            },
            {
              label: "支援",
              to: "/support",
            },
          ],
        },
        {
          title: "社群",
          items: [
            {
              label: "Facebook 社群",
              href: "https://facebook.com/groups/relationdeck",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/relationdeck",
            },
            {
              label: "Facebook 粉絲專頁",
              href: "https://www.facebook.com/relationdeck",
            },
          ],
        },
        {
          title: "下載 App",
          items: [
            {
              label: "App Store",
              href: APP_STORE_URL,
            },
            {
              label: "Google Play（即將上架）",
              to: "/#download",
            },
          ],
        },
        {
          title: "聯絡",
          items: [
            {
              label: "聯絡信箱",
              href: "mailto:relationdeck@gmail.com",
            },
          ],
        },
        {
          // 畫成語言下拉選單，見 src/theme/Footer/LinkItem。
          // label 與 `to` 只是設定格式要求的佔位，不會顯示。
          title: "語言",
          items: [{ label: "語言", to: "/", localeDropdown: true }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${siteMeta.title}, Inc. Built with ❤️ by <a href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
