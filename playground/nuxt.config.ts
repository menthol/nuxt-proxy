import { defineNuxtConfig } from 'nuxt'
import Module from '../src/module'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [Module],
  runtimeConfig: {
    proxy: {
      options: [
        {
          target: 'https://jsonplaceholder.typicode.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api/todos': '/todos',
            '^/api/users': '/users',
          },
          pathFilter: [
            '/api/todos',
            '/api/users',
          ],
        },
        {
          target: 'https://api.spacexdata.com/v5',
          changeOrigin: true,
          pathRewrite: {
            '^/api/launches': '/launches/latest',
          },
          pathFilter: [
            '/api/launches',
          ],
        },
      ],
    },
  }
})
