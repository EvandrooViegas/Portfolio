import Home from "./Home";
import Testimonials from "./Testimonials";
import Socials from "./Socials";
import Videos from "./Videos";
import { getMeData } from "@/actions/me";

export const revalidate = 15

export default async function Page() {
  const me = await getMeData()
  const bestVideos = me?.best_videos
  const behindScenesVideos = me?.behind_scenes
  const testimonials = me?.testimonials
  const socials = me?.social_medias

  return (
    <main className="flex flex-col gap-12">
        <Home me={me} />
        <Videos  videos={bestVideos} />
        <Videos title="Behind The Scenes" videos={behindScenesVideos} />
        <Testimonials testimonials={testimonials} />
      <Socials socials={socials} />
    </main>
  );
}
