import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function TestimonialsSkeleton() {
  const fakeImages = Array(3).fill(1);
  return (
    <section className="flex flex-col gap-3" id="testimonials">
              {/* TITLE */}
      <Skeleton className="w-[200px] h-[60px] rounded-full" />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {fakeImages.map((_) => (
          <div
            key={_}
            className="
            rounded p-5
            flex flex-col center gap-2 
            border border-dashed border-neutral-700 
            "
          >
            <div className="w-[150px] h-[150px]">
              {/* TESTIMONIAL IMAGE */}
              <Skeleton className="w-full h-full rounded-full" />
            </div>
              {/* TESTIMONIAL NAME */}
            <Skeleton className="w-[150px] h-[20px]" />
              {/* TESTIMONIAL MESSAGE */}
              <Skeleton className="w-[300px] h-[50px]" />

          </div>
        ))}
      </div>
    </section>
  );
}
