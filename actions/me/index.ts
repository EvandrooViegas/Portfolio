"use server";

import { client } from "@/sanity/lib/client";
import iMe from "@/types/iMe";
import iTestimonial from "@/types/iTestimonial";
import getSanityImage from "@/utils/get-sanity-image";

export async function getMeData(): Promise<iMe> {
  const data = await client.fetch("*[_type == 'me'][0]");
  const me:iMe = {
    ...data,
    avatar: getSanityImage(data.avatar),
    testimonials: data.testimonials.map((t:iTestimonial) => ({
      ...t,
      avatar: getSanityImage(t.avatar),
    })),
  };
  return me
}
