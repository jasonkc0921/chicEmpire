import { useRef, useEffect, useCallback } from 'react'

function getScrollY() {
  return window.scrollY !== void 0
    ? window.scrollY
    : window.pageYOffset === void 0
    ? 0
    : window.pageYOffset
}

export default function useScrollCallback(callback) {
  const scrollFrame = useRef(0)

  const onScroll = useCallback(() => {
    window.cancelAnimationFrame(scrollFrame.current)
    scrollFrame.current = window.requestAnimationFrame(() => {
      callback(getScrollY())
    })
  }, [callback])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, {
      capture: false,
      passive: true,
    })
    return () => {
      window.cancelAnimationFrame(scrollFrame.current)
      window.removeEventListener('scroll', onScroll, {
        capture: false,
        passive: true,
      })
    }
  }, [onScroll])
}
