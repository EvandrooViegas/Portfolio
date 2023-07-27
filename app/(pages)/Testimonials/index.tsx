import { getMeData } from "@/actions/me";
import Testimonial from "@/components/Testimonial";
import Title from "@/components/Title";
import React from "react";

export default async function Testimonials() {
  const me = await getMeData();
  const testimonials = me.testimonials;
  return (
    <section className="flex flex-col gap-3" id="testimonials">
      <Title title="Testimonials" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
