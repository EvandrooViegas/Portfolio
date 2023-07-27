import { Skeleton } from "@/components/ui/skeleton";

export default async function VideosSkeleton() {
  const fakeImages = Array(6).fill(1);
  return (
    <div className="flex flex-col gap-3" id="gallery">
      <Skeleton className="w-[200px] h-[60px] rounded-full" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {fakeImages.map((_) => (
          <Skeleton key={_} className="w-full h-[450px]" />
        ))}
      </div>
    </div>
  );
}
