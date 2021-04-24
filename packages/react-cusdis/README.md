# Cusdis SDK

```
$ npm i react-cusdis
```

## Usage

```tsx
import { ReactCusdis } from 'react'

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

#### attrs

Cusdis SDK attributs: https://cusdis.com/doc#/advanced/sdk

#### style

React.CSSProperties

# License

MIT