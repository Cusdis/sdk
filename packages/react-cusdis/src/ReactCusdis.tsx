import * as React from 'react'
// @ts-expect-error
import cusdis from 'cusdis'

export function ReactCusdis (props: {
  attrs: {
    host: string,
    appId: string,
    pageId: string,
    pageTitle?: string,
    pageUrl?: string,
  }
}) {

  const divRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const el = divRef.current
    if (el) {
      // prevent duplicated render
      el.innerHTML = ''
      new cusdis({
        target: el,
        props: {
          attrs: props.attrs
        }
      })
    }
  }, [
    props.attrs
  ])

  return (
    <div ref={divRef}>
      
    </div>
  )
}
