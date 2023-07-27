"use client";
import iGallery from "@/types/iGallery";
import trimString from "@/utils/trim-string";
import NextImage from "next/image";
import React, { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import ImageDetails from "./ImageDetails";
import { motion, AnimatePresence } from "framer-motion";

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
          <div className="transition-all opacity-0 group-hover:opacity-100 flex center absolute inset-0 bg-black/60">
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
      <AnimatePresence>
        {isOpen ? (
          <motion.div
          className="z-[10] w-0 h-0 absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: 0 }}
          >
            <ImageDetails
              image={image}
              toggleImageDetailsVisibility={toggleImageDetailsVisibility}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
