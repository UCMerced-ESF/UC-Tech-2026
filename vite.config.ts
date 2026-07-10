import { defineConfig } from 'vite'

// ponytail: proxy TiTiler because esf.ucmerced.edu sends a doubled
// Access-Control-Allow-Origin header on tile responses (nginx echo + upstream *).
// Fix the server and this file can go away.
export default defineConfig({
  server: {
    proxy: {
      '/esf-titiler': {
        target: 'https://esf.ucmerced.edu/api/titiler',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/esf-titiler/, ''),
      },
    },
  },
})
