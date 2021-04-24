import React from 'react'
import ReactDOM from 'react-dom'
import { ReactCusdis } from './ReactCusdis'

ReactDOM.render(
  <React.StrictMode>
    <ReactCusdis attrs={{
      appId: 'ad9ce296-a85f-4e15-9130-379ffb47f6bd',
      host: 'https://cusdis.com',
      pageId: 'test'
    }} />
  </React.StrictMode>,
  document.getElementById('root')
)
