const { description } = require('../../package')

module.exports = {
	title: 'OE-O Tutorials',
	description: description,

	head: [
		['link', { rel: 'icon', href: 'https://oe-o.dev/assets/Logo-icon.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],

	themeConfig: {
		nextLinks: true,
		prevLinks: true,
		repo: '',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			{
				text: 'Guide',
				link: '/guide/',
			},
			{
				text: 'Software Inc',
				link: '/sinc/'
			},
			{
				text: 'OE-O',
				link: 'https://oe-o.dev'
			}
		],
		sidebar: {
			'/sinc/': [
				{
					title: 'Software Inc',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'',
						'getting-started',
					]
				},
				{
					title: 'Data Mods',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'data-mods/',
					]
				},
				{
					title: 'Code Mods',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'code-mods/',
					]
				},
				{
					title: 'Furniture',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'furniture/',
					]
				},
				{
					title: 'Materials',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'materials/',
					]
				},
			],
			'/guide/': [
				{
					title: 'Welcome',
					collapsable: false,
					sidebarDepth: 1,
					children: [
						'',
						'games',
						'requesting-content'
					]
				},
				{
					title: 'Languages',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'languages/TyD',
						'languages/CSharp',
					]
				},
				{
					title: 'Tools',
					collapsable: false,
					sidebarDepth: 1,
					children: [
						'tools/VSCode',
					]
				},
			],
		}
	},

	plugins: {
		'@vuepress/back-to-top': false,
		'@vuepress/medium-zoom': false,
		'vuepress-plugin-clean-urls': {
			pageSuffix: ''
		},
		'@vuepress/pwa': {
			serviceWorker: true,
			updatePopup: true
		}
	}
}
