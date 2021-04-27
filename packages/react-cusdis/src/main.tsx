import React from 'react'
import ReactDOM from 'react-dom'
import { ReactCusdis } from './ReactCusdis'

function App () {
  const [pageId, setPageId] = React.useState('test')

  return (
    <div>
      <div>
        <button onClick={_ => setPageId('test')}>page test</button>
        <button onClick={_ => setPageId('test2')}>page test2</button>
      </div>

      <ReactCusdis attrs={{
        appId: '9e8df409-5055-4751-aa5f-4e08a66ce014',
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
