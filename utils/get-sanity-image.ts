import { sanity } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(sanity)

export default function getSanityImage(source:SanityImageSource) {
  return builder.image(source)?.url()
}