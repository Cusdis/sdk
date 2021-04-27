# Cusdis SDK

```
$ npm i react-cusdis
```

## Usage

```tsx
import { ReactCusdis } from 'react-cusdis'

function App() {
  return (
    <div>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: 'APP_ID',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
      />

    </div>
  )
}
```

### props

#### lang

For i18n. Available lang: https://cusdis.com/doc#/advanced/i18n

Example: 

```tsx
<ReactCusdis
  lang="zh-cn"
  attrs={{
    appId: '9e8df409-5055-4751-aa5f-4e08a66ce014',
    host: 'http://localhost:3000',
    pageId
  }} 
/>
```

#### attrs

Cusdis SDK attributs: https://cusdis.com/doc#/advanced/sdk

#### style

React.CSSProperties

## Build

```bash
$ yarn dev
```

# License

MIT
