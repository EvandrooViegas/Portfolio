"use server"

import { client } from "@/sanity/lib/client"
import iMe from "@/types/iMe"
import getSanityImage from "@/utils/get-sanity-image"

export async function getMeData()
:Promise<iMe> {
    const data = await client.fetch("*[_type == 'me'][0]")
    return { ...data, avatar: getSanityImage(data.avatar) }
}