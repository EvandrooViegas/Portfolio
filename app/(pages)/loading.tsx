import HomeSkeleton from "./Home/HomeSkeleton";
import TestimonialsSkeleton from "./Testimonials/TestimonialsSkeleton";
import VideosSkeleton from "./Videos/GallerySkeleton";

export default function Loading() {
    return (
        <>
            <HomeSkeleton />
            <VideosSkeleton />
            <TestimonialsSkeleton />
        </>
    )
}