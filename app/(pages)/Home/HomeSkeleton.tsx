import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
      <div className="relative h-full min-h-[600px]">
        <Skeleton className="full" />
      </div>
      {/* Slogan */}
      <div className="self-center">
        <div className="space-y-2">
          <Skeleton className="w-full h-[30px] rounded-full" />
          <Skeleton className="w-full h-[30px] rounded-full" />
          <Skeleton className="w-full h-[30px] rounded-full" />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          {/* About Me Badge */}
            <Skeleton className="w-[100px] h-[40px] rounded-full" />
          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="w-full h-[20px] rounded-full" />
            <Skeleton className="w-full h-[20px] rounded-full" />
            <Skeleton className="w-full h-[20px] rounded-full" />
          </div>
          {/* Fale Comigo Button */}
          <Skeleton className="w-full h-[50px] rounded-full" />
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-5 items-center mt-6">
          {/* Infos Cards */}
          <Skeleton className="h-[100px] rounded" />
          <Skeleton className="h-[100px] rounded" />
          <Skeleton className="h-[100px] rounded" />
        </div>
      </div>
    </div>
  );
}
