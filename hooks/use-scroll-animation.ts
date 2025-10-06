"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export function useScrollAnimations(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [visibilities, setVisibilities] = useState<boolean[]>(Array(count).fill(false))

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibilities((prev) => {
              const newVisibilities = [...prev]
              newVisibilities[index] = true
              return newVisibilities
            })
            observer.disconnect()
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return { refs, visibilities }
}
