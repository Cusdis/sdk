import * as React from 'react'
import { useScript } from './useScript'

export function ReactCusdis(props: {
  attrs: {
    host: string,
    appId: string,
    pageId: string,
    pageTitle?: string,
    pageUrl?: string,
    theme?: 'light' | 'dark' | 'auto',
  },
  lang?: string,
  style?: React.CSSProperties
}) {

  const divRef = React.useRef<HTMLDivElement>(null)

  const host = props.attrs.host || 'https://cusdis.com'

  useScript(`${host}/js/cusdis.es.js`)
  useScript(props.lang ? `${host}/js/widget/lang/${props.lang}.js` : '')

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
    </>
  )
}
