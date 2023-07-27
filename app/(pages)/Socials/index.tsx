import { getMeData } from "@/actions/me";
import Social from "@/components/Social";
import Title from "@/components/Title";
import iSocialMedia from "@/types/iSocialMedia";
import React from "react";

type Props = {
  socials: iSocialMedia[] | undefined
}
export default function Socials(props:Props) {
  const { socials } = props
  if(!socials) return <p>No Socials</p>
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
