"use server";

import { sanity } from "@/sanity/lib/client";
import iMe from "@/types/iMe";
import iTestimonial from "@/types/iTestimonial";
import iVideo from "@/types/iVideo";
import getSanityImage from "@/utils/get-sanity-image";

export async function getMeData(): Promise<iMe | null> {
  const data = await sanity.fetch(`*[_type == 'me']{
    ...,
    best_videos[]->,
    behind_scenes[]->
  }[0]`);

  if(!data) return null 
  const me:iMe = {
    ...data,
    avatar: getSanityImage(data.avatar),
    testimonials: data.testimonials.map((t:iTestimonial) => ({
      ...t,
      avatar: getSanityImage(t.avatar),
    })),
    behind_scenes: data.behind_scenes?.map((v:iVideo) => ({
      ...v,
      banner: v?.banner ? getSanityImage(v.banner) : ""

    })),
    best_videos: data.best_videos?.map((v:iVideo) => ({
      ...v,
      banner: v?.banner ? getSanityImage(v.banner) : ""
    }))
  };
  return me
}
