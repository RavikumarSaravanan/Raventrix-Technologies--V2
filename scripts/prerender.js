import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const indexPath = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const html = await readFile(indexPath, 'utf8')
  const root = '<div id="root"></div>'

  if (!html.includes(root)) {
    throw new Error('Could not find the application root in dist/index.html')
  }

  const renderedApp = renderToString(React.createElement(App))
  await writeFile(indexPath, html.replace(root, `<div id="root">${renderedApp}</div>`))
} finally {
  await vite.close()
}
