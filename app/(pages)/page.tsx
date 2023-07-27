import { Suspense } from "react";
import Gallery from "./Gallery";
import Home from "./Home";
import HomeSkeleton from "./Home/HomeSkeleton";
import GallerySkeleton from "./Gallery/GallerySkeleton";
import Testimonials from "./Testimonials";
import TestimonialsSkeleton from "./Testimonials/TestimonialsSkeleton";
import Socials from "./Socials";

export default async function Page() {
  return (
    <main className="flex flex-col gap-12">
      <Suspense fallback={<HomeSkeleton />}>
        <Home />
      </Suspense>
      <Suspense fallback={<GallerySkeleton />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>
      <Socials />
    </main>
  );
}
