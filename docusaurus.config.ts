import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site', // 网站标题
  tagline: 'Dinosaurs are cool', // 网站标语
  favicon: 'img/favicon.ico', // 网站图标

  // Future flags，提前兼容 Docusaurus v4
  future: {
    v4: true,
  },

  // 生产环境的网站 URL
  url: 'https://your-docusaurus-site.example.com',
  // 网站部署的基础路径（GitHub Pages 通常需要设为 /仓库名/）
  baseUrl: '/',

  // GitHub Pages 部署相关配置
  organizationName: 'facebook', // GitHub 组织/用户名
  projectName: 'docusaurus', // GitHub 仓库名

  // 遇到无效链接时的处理方式（throw 表示抛出错误）
  onBrokenLinks: 'warn',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans', // 默认语言
    locales: ['zh-Hans'], // 支持的语言列表
  },

  presets: [
    [
      'classic', // 使用经典预设
      {
        docs: {
          sidebarPath: './sidebars.ts', // 侧边栏配置文件路径
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // 编辑文档的链接
        },
        blog: {
          showReadingTime: true, // 显示阅读时长
          blogSidebarCount: 10, // 博客侧边栏显示的文章数量
          blogSidebarTitle: '最新文章', // 博客侧边栏标题
          postsPerPage: 5, // 每页显示的博客文章数
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // 编辑博客的链接
          onInlineTags: 'warn', // 内联标签警告
          onInlineAuthors: 'warn', // 内联作者警告
          onUntruncatedBlogPosts: 'warn', // 未截断博客文章警告
        },
        theme: {
          customCss: './src/css/custom.css', // 自定义 CSS 文件路径
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 社交卡片图片
    image: 'img/docusaurus-social-card.jpg',
    // 颜色模式配置（尊重系统偏好）
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // 导航栏配置
    navbar: {
      title: 'My Site', // 导航栏标题
      logo: {
        alt: 'My Site Logo', // logo 替代文本
        src: 'img/logo.svg', // logo 图片路径
      },
      // 导航栏菜单项
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsCategorySidebar',
          position: 'left',
          label: '文档类',
        },
        {
          type: 'docSidebar',
          sidebarId: 'urlCategorySidebar',
          position: 'left',
          label: '网址类',
        },
        { to: '/blog', label: '博客', position: 'left' },
        { to: '/thoughts', label: '碎碎念', position: 'left' },
        { to: '/about', label: '关于', position: 'left' },
        {
          href: 'https://github.com/yourusername/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // 页脚配置
    footer: {
      style: 'dark', // 深色风格
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      // 版权信息（动态获取当前年份）
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    // 代码高亮配置
    prism: {
      theme: prismThemes.github, // 浅色主题
      darkTheme: prismThemes.dracula, // 深色主题
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
