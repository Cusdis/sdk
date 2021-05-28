import React from 'react'
import ReactDOM from 'react-dom'
import { ReactCusdis } from './ReactCusdis'

function App() {
  const [pageId, setPageId] = React.useState('test')

  return (
    <div>
      <div>
        <button onClick={_ => setPageId('test')}>page test</button>
        <button onClick={_ => setPageId('test2')}>page test2</button>
      </div>

      <ReactCusdis
        key={pageId}
        lang="zh-cn"
        attrs={{
          appId: '628096d1-0d4e-47c4-a14a-450bd2022215',
          host: 'http://localhost:3000',
          pageId
        }} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
