import iVideo from "@/types/iVideo";
import Image from "next/image";
import Link from "next/link";
import { IoPlay } from "react-icons/io5"
type Props = { video: iVideo };

export default function Video(props: Props) {
  const { video } = props;
  return (
    <a href={video.link} target="_blank" className="group relative flex flex-col gap-3">
      <div className="relative w-full h-[450px]">
        <Image src={video.banner} fill alt="Video Banner" className="rounded-xl" />
        <div className="transition-all inset-0 absolute flex center bg-black/30 group-hover:bg-black/70">
          <IoPlay size="90px" color="white" />
        </div>
      </div>
      <span className="text-base font-bold text-neutral-300">{video.name}</span>
    </a>
  );
}
