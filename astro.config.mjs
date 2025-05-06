import { defineConfig } from 'astro/config';
 
 import alpine from '@astrojs/alpinejs';
import fs from 'fs';
import path from 'path';
// https://astro.build/config
// https://astro.build/config

import netlify from '@astrojs/netlify';

export default defineConfig({
	 prefetch: false,
	 output: 'server',
 	 adapter: netlify({
		    edgeMiddleware: true
		  }),

	   
 /*
	   site: 'http://dev.com',
	    base: '/astro/produccion',
	   site: 'https://invitados.vip',
	 base: '/daf18', */ 
	    trailingSlash: "ignore",
	    root: './',
	    compressHTML: false,
	       
     integrations: [ alpine() ]
    
});