import { useEffect } from 'react'

const ensureMetaDescription = () => {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }
  return meta
}

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title
    const meta = ensureMetaDescription()
    meta.content = description
  }, [title, description])
}
