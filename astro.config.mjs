// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://studio.annarstica.com',
	integrations: [mdx(),
		sitemap({
		  exclude: [
			'/pages-draft/**',      // ทั้งโฟลเดอร์
		  ],
		}),
	  ],
});
