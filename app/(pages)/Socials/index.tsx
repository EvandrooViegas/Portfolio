import { getMeData } from "@/actions/me";
import Social from "@/components/Social";
import Title from "@/components/Title";
import React from "react";

export default async function Socials() {
  const me = await getMeData();
  const socials = me.social_medias;
  return (
    <section className="flex flex-col gap-3" id="socials">
      <Title title=" Socials" />
      <div className="flex  gap-3">
        {socials.map((social) => (
          <Social key={social._key} social={social} />
        ))}
      </div>
    </section>
  );
}
