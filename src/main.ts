/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-10 17:57:07
 * @LastEditTime: 2023-09-10 22:04:03
 * @FilePath: \homepage-\src\main.ts
 */
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

// import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'

import 'floating-vue/dist/style.css'

import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'
import '@shikijs/twoslash/style-rich.css'
import 'shiki-magic-move/style.css'
import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
