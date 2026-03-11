import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // 网站基础信息
  title: 'My Site', // 网站标题
  tagline: 'Dinosaurs are cool', // 网站标语
  favicon: 'img/favicon.ico', // 网站图标

  // Future flags，提前兼容 Docusaurus v4
  future: {
    v4: true,
  },

  // GitHub Pages 部署核心配置（替换成你的实际信息）
  url: 'https://playoo.github.io', // 你的 GitHub Pages 域名
  baseUrl: '/xnav/', // 仓库名，若仓库是 playoo.github.io 则填 '/'
  organizationName: 'playoo', // GitHub 用户名/组织名
  projectName: 'xnav', // GitHub 仓库名
  deploymentBranch: 'gh-pages', // 部署到 gh-pages 分支

  // 遇到无效链接时的处理方式（开发时用 warn，生产时建议用 throw）
  onBrokenLinks: 'warn',

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-Hans', // 默认语言：简体中文
    locales: ['zh-Hans'], // 支持的语言列表
  },

  // 预设配置
  presets: [
    [
      'classic', // 使用经典预设
      {
        docs: {
          sidebarPath: './sidebars.ts', // 侧边栏配置文件路径
          editUrl: 'https://github.com/playoo/xnav/blob/main/', // 文档编辑链接
        },
        blog: {
          showReadingTime: true, // 显示阅读时长
          blogSidebarCount: 10, // 博客侧边栏显示的文章数量
          blogSidebarTitle: '最新文章', // 博客侧边栏标题
          postsPerPage: 5, // 每页显示的博客文章数
          editUrl: 'https://github.com/playoo/xnav/blob/main/', // 博客编辑链接
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

  // 主题配置
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
          label: '🗂️文档类',
        },
        {
          type: 'docSidebar',
          sidebarId: 'urlCategorySidebar',
          position: 'left',
          label: '💟网址类',
        },
        { to: '/blog', label: '📝博客', position: 'left' },
        { to: '/thoughts', label: '💬碎碎念', position: 'left' },
        { to: '/about', label: '📃关于', position: 'right' },
        {
          href: 'https://github.com/playoo/xnav',
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
