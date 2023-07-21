"use client";

import iGallery from "@/types/iGallery";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

type Props = { image: iGallery; toggleImageDetailsVisibility: () => void };
export default function ImageDetails(props: Props) {
  const { image, toggleImageDetailsVisibility } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const clientX = e.clientX;
      const clientY = e.clientY;
      const containerRect = containerRef.current.getBoundingClientRect();

      if (
        clientX <= containerRect.left ||
        clientX >= containerRect.right ||
        clientY <= containerRect.top ||
        clientY >= containerRect.bottom
      ) {
        toggleImageDetailsVisibility();
      }
    };
    overlayRef.current?.addEventListener("click", onClick);
    return () => {
      overlayRef.current?.removeEventListener("click", onClick);
    };
  }, [toggleImageDetailsVisibility]);
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/60 backdrop-blur-2xl flex center"
    >
      <div
        className="duration-500 w-[70vw] h-[70vw] flex center scale-0"
        ref={containerRef}
      >
        <div className="flex flex-col gap-3 bg-foreground">
          <div className="relative w-full h-[450px]">
            <Image
              src={image.source}
              fill
              loading="lazy"
              alt="Art"
              className="object-center object-cover rounded-2xl bg-neutral-800"
            />
          </div>
          <span>{image.name}</span>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
}
