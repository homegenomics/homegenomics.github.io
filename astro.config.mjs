// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	// Org-level GitHub Pages site → served at the domain root.
	site: 'https://homegenomics.github.io',

	integrations: [
		starlight({
			title: {
				ko: 'HomeGenomics',
				en: 'HomeGenomics',
			},
			// Korean is the default locale (served at the site root), English under /en/.
			defaultLocale: 'root',
			locales: {
				root: { label: '한국어', lang: 'ko' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/homegenomics' },
			],
			// Agent-first: auto-generate /llms.txt and /llms-full.txt for LLM/agent consumption.
			plugins: [
				starlightLlmsTxt({
					projectName: 'HomeGenomics',
					description:
						'A developer-first handbook for analyzing your own and your family genomic and biometric data — so you can understand it and protect the people you love.',
				}),
			],
			sidebar: [
				{
					label: '시작하기',
					translations: { en: 'Getting Started' },
					items: [
						{ label: '소개', translations: { en: 'Introduction' }, slug: 'start/intro' },
						{ label: '왜 직접 분석하나', translations: { en: 'Why Analyze It Yourself' }, slug: 'start/why' },
						{ label: '사례: Sid Sijbrandij', translations: { en: 'Case: Sid Sijbrandij' }, slug: 'start/case-sid' },
					],
				},
				{
					label: '수업 노트',
					translations: { en: 'Lessons' },
					items: [{ autogenerate: { directory: 'lessons' } }],
				},
				{
					label: '레퍼런스',
					translations: { en: 'Reference' },
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
