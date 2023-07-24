import { getGallery } from "@/actions/gallery";
import Image from "@/components/Image";
import Title from "@/components/Title";
import React from "react";
export default async function Gallery() {
  const gallery = await getGallery();
  return (
    <div className="flex flex-col gap-3" id="gallery">
      <Title title="🎨 My art" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {gallery.map((image) => (
          <Image key={image.name} image={image}  />
        ))}
      </div>
    </div>
  );
}
