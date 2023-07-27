import Title from "@/components/Title";
import Video from "@/components/Video";
import iVideo from "@/types/iVideo";
import React from "react";

type Props = { videos: iVideo[] | undefined, title?: string }
export default function Videos(props:Props) {
  const { videos, title = "Best Videos" } = props
  if(!videos) return <p>No Videos!</p> 
  return (
    <section className="flex flex-col gap-3" id="arts">
      <Title title={title} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {videos.map((video) => (
          <Video key={video.name} video={video}  />
        ))}
      </div>
    </section>
  );
}
