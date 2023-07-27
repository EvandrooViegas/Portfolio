import Image from "next/image";
import { getMeData } from "@/actions/me";
import CountUp from "@/components/CountUp";
import iMe from "@/types/iMe";

type Props = {
  me: iMe | undefined | null
}
export default function Home(props:Props) {
  const { me } = props
  if(!me) return <p>No Data!</p>
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-12">
      <div className="relative h-full min-h-[600px]">
        <Image
          src={me.avatar}
          className="rounded-xl object-center object-cover"
          fill
          alt="Avatar"
        />
      </div>
      <div className="self-center">
        <h4 className="font-extrabold md:text-6xl text-3xl">{me.slogan}</h4>
        <div className="flex flex-col gap-3 mt-3">
          <span className="text-extrabold bg-foreground px-4 py-2 w-fit rounded-full text-sm">
            About me
          </span>
          <p className="text-zinc-400 text-bold border-l-4 border-foreground pl-3 rounded">
            {me.description}
          </p>
          <button className="
          transition-all 
          px-6 py-4 text-xl rounded-full 
          text-extrabold
          bg-primary hover:bg-transparent  
          border border-transparent border-dashed  hover:border-primary
          ">
            <a href="#socials">Fale Comigo! 👋</a>
          </button>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-5 items-center mt-6">
          {me.infos.map((info, idx) => (
            <div
              key={idx}
              className="w-full h-full flex flex-col center gap-1 border border-dashed border-neutral-700 p-4 rounded"
            >
              <CountUp
                delay={0.5 * idx}
                end={info.value}
                className="text-3xl font-bold"
              />
              <span className="text-center">{info.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
