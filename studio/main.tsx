import React from 'react'
import { createRoot } from 'react-dom/client'
import { Studio } from 'sanity'
import config from './sanity.config'

const container = document.getElementById('sanity')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <Studio config={config} />
    </React.StrictMode>
  )
}