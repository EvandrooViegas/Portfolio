import { getMeData } from "@/actions/me";
import Testimonial from "@/components/Testimonial";
import Title from "@/components/Title";
import iTestimonial from "@/types/iTestimonial";
import React from "react";

type Props = {
  testimonials: iTestimonial[] | undefined
}
export default function Testimonials(props:Props) {
  const { testimonials } = props
  if(!testimonials) return <p>No Testimonials!</p>
  return (
    <section className="flex flex-col gap-3" id="testimonials">
      <Title title="Testimonials" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {testimonials?.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
