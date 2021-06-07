/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mock Social Media Website Tool',
  tagline: 'An open-source tool for conducting experimental, ecologically-valid research on social media behaviour.',
  url: 'https://docs.studysocial.media',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arvinsroom', // Usually your GitHub org/user name.
  projectName: 'msmw-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mock Social Media Website Tool',
      logo: {
        alt: 'Mock Social Media Website Tool Logo',
        src: 'img/logo-mocksocial-heads-32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guides',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/research', label: 'Research', position: 'left'},
        {to: '/people', label: 'People', position: 'left'},
        {to: '/citation', label: 'Citation', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/arvinsroom/mocksocialmediawebsite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Deploying Locally',
              to: '/docs/deploying-locally',
            },
            {
              label: 'Deploying Online',
              to: '/docs/deploying-online/domain-name',
            },
          ],
        },
        {
          title: 'Stay Connected',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/rvinsroom',
            },
          ],
        },
        {
          title: 'Important Links',
          items: [
            {
              label: 'Source Code',
              to: 'https://github.com/arvinsroom/mocksocialmediawebsite',
            },
            {
              label: 'Open Science Framework Project',
              href: 'https://osf.io/m2xd8/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arvin Jagayat. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://docs.studysocial.media/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://docs.studysocial.media/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
