"use client";

import iGallery from "@/types/iGallery";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

type Props = { image: iGallery; toggleImageDetailsVisibility: () => void };
export default function ImageDetails(props: Props) {
  const { image, toggleImageDetailsVisibility } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [isImageZoomedIn, setIsImageZoomedIn] = useState(false);
  const onClick = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (
      clientX < containerRect.left ||
      clientX > containerRect.right ||
      clientY < containerRect.top ||
      clientY > containerRect.bottom
    ) {
      toggleImageDetailsVisibility();
    }
  };
  const onKeyPress = (e: KeyboardEvent) => {
    const key = e.key;
    if (key !== "Escape") return;
    toggleImageDetailsVisibility();
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    overlayRef.current?.addEventListener("click", onClick);
    window?.addEventListener("keyup", onKeyPress);
    return () => {
      document.body.classList.remove("overflow-hidden");
      overlayRef.current?.removeEventListener("click", onClick);
      window?.addEventListener("keyup", onKeyPress);
    };
  }, []);
  return (
    <div
      ref={overlayRef}
      className="fixed z-[10] inset-0 bg-black/80 backdrop-blur flex center"
    >
      <div className="flex flex-col center max-w-[70vw] " ref={containerRef}>
          <div className="relative w-full h-[450px] rounded-full">
            <Image
              src={image.source}
              fill
              onClick={() => setIsImageZoomedIn(!isImageZoomedIn)}
              loading="lazy"
              alt="Art"
              className={`
              transition-all 
              ${isImageZoomedIn ? "scale-150" : "scale-100"} 
              ${isImageZoomedIn ? "cursor-zoom-out" : "cursor-zoom-in"} 
              object-center object-contain 
              bg-gradient-to-b from-neutral-900 to-neutral-950
              `}
            />
          </div>
          <div className="space-y-2  bg-neutral-950 p-10 border-dashed border-t-2  border-neutral-700">
            <span className="text-3xl font-bold">{image.name}</span>
            <p className="text-sm border-dashed md:border-l-2 md:pl-4 border-neutral-700 text-neutral-200">
              {image.description}
            </p>
          </div>
      </div>
    </div>
  );
}
