import iTestimonial from "@/types/iTestimonial";
import Image from "next/image";

type Props = {
  testimonial: iTestimonial;
};
export default function Testimonial(props: Props) {
  const { testimonial } = props;
  return (
    <div className="flex flex-col center gap-2 border border-dashed border-neutral-700 rounded p-5">
      <div className="relative w-[150px] h-[150px]">
        <Image
          fill
          className="rounded-full object-center object-cover"
          src={testimonial.avatar}
          alt={`${testimonial.name}'s Avatar`}
        />
      </div>
      <span className="font-bold text-xl">{testimonial.name}</span>
      <blockquote className="italic text-center text-sm text-neutral-300">
      {'"'}{testimonial.message}{'"'}
      </blockquote>
    </div>
  );
}
