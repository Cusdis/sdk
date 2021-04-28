import { createApp, h } from "vue"
import VueCusdis from './VueCusdis'

createApp({
  name: 'App',
  render() {
    return h(VueCusdis, {
      attrs: {
        appId: "ad9ce296-a85f-4e15-9130-379ffb47f6bd",
        host: "https://cusdis.com",
        pageId: "test",
      }
    })
  }
}).mount("#app")
