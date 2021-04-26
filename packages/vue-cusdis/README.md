# Vue Cusdis SDK

```
$ npm i vue-cusdis
```

## Usage

```tsx
import { defineComponent } from 'vue'
import { VueCusdis } from 'vue-cusdis'

export default defineComponent({
  name: 'App',
  components: { VueCusdis },
  data() {
    return {
      attrs: {
        host: 'https://cusdis.com',
        appId: 'APP_ID',
        pageId: 'PAGE_ID',
        pageTitle: 'PAGE_TITLE',
        pageUrl: 'PAGE_URL'
      }
    }
  }
  template: `<vue-cusdis :attrs="attrs">`
})

```

### props

#### attrs

Cusdis SDK attributs: https://cusdis.com/doc#/advanced/sdk

# License

MIT

# Contributor

[@frostming](https://github.com/frostming)
