"use client";
import iGallery from "@/types/iGallery";
import trimString from "@/utils/trim-string";
import NextImage from "next/image";
import React, { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import ImageDetails from "./ImageDetails";

type Props = { image: iGallery };

export default function Image(props: Props) {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleImageDetailsVisibility = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="group relative flex flex-col gap-3">
        <div className="relative w-full h-[450px]">
          <NextImage
            src={image.source}
            fill
            loading="lazy"
            alt="Art"
            className="object-center object-cover rounded-2xl bg-neutral-800"
          />
          <div className="transition-all hidden group-hover:flex center absolute inset-0 bg-black/60">
            <button
              onClick={toggleImageDetailsVisibility}
              className="text-3xl p-10 bg-foreground rounded-full"
            >
              <BiExpandAlt />
            </button>
          </div>
        </div>
        <span className="text-base font-bold text-neutral-300">
          {image.name}
        </span>
        <p className="text-xs text-neutral-400">
          {trimString(image.description)}
        </p>
      </div>
      {isOpen ? (
        <ImageDetails
          image={image}
          toggleImageDetailsVisibility={toggleImageDetailsVisibility}
        />
      ) : null}
    </>
  );
}
