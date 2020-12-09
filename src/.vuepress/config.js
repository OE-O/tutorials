const { description } = require('../../package')

module.exports = {
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#title
	 */
	title: 'OE-O Tutorials',
	/**
	 * Ref：https://v1.vuepress.vuejs.org/config/#description
	 */
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
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
				text: 'Config',
				link: '/config/'
			},
			{
				text: 'VuePress',
				link: 'https://v1.vuepress.vuejs.org'
			}
		],
		sidebar: {
			'/sinc/': [
				{
					title: 'Software Inc',
					collapsable: false,
					sidebarDepth: 1,
					children: [
						'',
						'getting-started'
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
					sidebarDepth: 1,
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

			// fallback
			// '/': [
			// 	'',
			// 	'contact',
			// 	'about'
			// ]
		}
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: {
		'@vuepress/back-to-top': false,
		'@vuepress/medium-zoom': false,
		'vuepress-plugin-clean-urls': {
			pageSuffix: ''
		}
	}
}
