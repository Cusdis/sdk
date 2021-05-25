import * as React from 'react'

export function ReactCusdis(props: {
  attrs: {
    host: string,
    appId: string,
    pageId: string,
    pageTitle?: string,
    pageUrl?: string,
    theme?: 'light'|'dark'|'auto',
  },
  lang?: string,
  style?: React.CSSProperties
}) {

  const divRef = React.useRef<HTMLDivElement>(null)

  const host = props.attrs.host || 'https://cusdis.com'

  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = `${host}/js/cusdis.es.js`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    let langScript: HTMLScriptElement | undefined

    if (props.lang) {
      langScript = document.createElement('script')
      langScript.src = `${host}/js/widget/lang/${props.lang}.js`
      langScript.async = true
      langScript.defer = true
      document.body.appendChild(langScript)
    }

    return () => {
      document.body.removeChild(script)
      if (langScript) {
        document.body.removeChild(langScript)
      }
    }
  }, [])

  React.useLayoutEffect(() => {
    // @ts-expect-error
    const render = window.renderCusdis

    if (render) {
      render(divRef.current)
    }
  }, [
    props.attrs.appId,
    props.attrs.host,
    props.attrs.pageId,
    props.attrs.pageTitle,
    props.attrs.pageUrl,
    props.lang
  ])

  return (
    <>
      <div
        id="cusdis_thread" 
        data-host={host}
        data-page-id={props.attrs.pageId}
        data-app-id={props.attrs.appId}
        data-page-title={props.attrs.pageTitle}
        data-page-url={props.attrs.pageUrl}
        data-theme={props.attrs.theme}
        style={props.style}
        ref={divRef}
      >

      </div>
      <script defer async src={`${props.attrs.host}/js/cusdis.es.js`}></script>
    </>
  )
}
