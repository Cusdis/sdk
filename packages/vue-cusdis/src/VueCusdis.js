import * as vue from 'vue'
import renderSix from './compat'

function createComponent(h) {

  return {
    name: 'VueCusdis',
    props: {
      attrs: {
        type: Object,
      },
      lang: {
        type: String
      }
    },
    computed: {
      host() {
        return this.attrs.host || 'https://cusdis.com'
      }
    },
    render: renderSix(function(h) {
      return h('div', {}, [h('div', {
        id: 'cusdis_thread',
        'data-host': this.attrs.host || 'https://cusdis.com',
        'data-page-id': this.attrs.pageId,
        'data-app-id': this.attrs.appId,
        'data-page-title': this.attrs.pageTitle,
        'data-page-url': this.attrs.pageUrl
      }), h('script', { async: true, defer: true, src: `${this.host}/js/cusdis.es.js`})])
    })(h)
  }
}

export default createComponent(vue.h || undefined)
