"use server"

import { client } from "@/sanity/lib/client"
import iGallery from "@/types/iGallery"
import getSanityImage from "@/utils/get-sanity-image"

export async function getGallery()
:Promise<iGallery[]> {
    const data = await client.fetch<{ imgs: iGallery[] }>("*[_type == 'gallery'][0]")
    const gallery:iGallery[] = data.imgs.map(i => ({ ...i, source: getSanityImage(i.source) }))
    return gallery
}