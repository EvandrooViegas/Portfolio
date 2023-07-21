import Image from "next/image";
import { getMeData } from "@/actions/me";
import CountUp from "@/components/CountUp";

export const revalidate = 15;
export default async function Home() {
  const me = await getMeData();
  return (
      <div className="grid grid-cols-2 gap-12">
        <div className="relative min-h-[600px]">
          <Image
            src={me.avatar}
            className="rounded-xl object-center object-cover"
            fill
            alt="Avatar"
          />
        </div>
        <div>
          <h4 className="font-extrabold text-7xl">{me.slogan}</h4>
          <div className="flex flex-col gap-3 mt-3">
            <span className="text-extrabold bg-foreground px-4 py-2 w-fit rounded-full text-sm">
              About me
            </span>
            <p className="text-zinc-400 text-bold border-l-4 border-foreground pl-3 rounded">
              {me.description}
            </p>
            <button className="px-6 py-2 rounded-full bg-primary text-extrabold">
              Fale Comigo! 👋
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 items-center mt-6">
            {me.infos.map((info, idx) => (
              <div
                key={idx}
                className="flex flex-col center gap-1 border border-dashed border-neutral-700 p-4 rounded"
              >
                <CountUp
                  delay={0.5 * idx}
                  end={info.value}
                  className="text-3xl font-bold"
                />
                <span>{info.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
