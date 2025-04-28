import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

// ประกาศ type สำหรับ Vite
declare global {
  interface ImportMetaEnv {
    VITE_APP_NAME?: string
  }
}

const appName = import.meta.env.VITE_APP_NAME || 'Laventory Trainning'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />)
  },
  progress: {
    color: '#4B5563',
  },
})