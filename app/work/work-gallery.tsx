"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { workProjects } from "./work-data";

export default function WorkGallery() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeProject = workProjects[activeProjectIndex];
  const activeImage = activeProject.images[activeImageIndex];

  function changeProject(index: number) {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
  }

  function changeImage(offset: number) {
    setActiveImageIndex((currentIndex) => {
      const imageCount = activeProject.images.length;
      return (currentIndex + offset + imageCount) % imageCount;
    });
  }

  return (
    <div>
      <nav aria-label="Choose a project" className="mb-5">
        <div className="grid grid-cols-1 border-l border-t border-[#211c17]/15 sm:grid-cols-3">
          {workProjects.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <button
                key={project.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => changeProject(index)}
                className={`flex min-h-16 items-center justify-between gap-4 border-b border-r border-[#211c17]/15 px-4 py-3 text-left transition focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#315140] ${
                  isActive
                    ? "bg-[#d8a15d] text-[#21170e]"
                    : "bg-[#fffaf2] text-[#4b4035] hover:bg-[#efe5d5]"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                  {project.title}
                </span>
                <span className="text-xs tabular-nums opacity-65">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <section className="grid overflow-hidden bg-[#203428] text-[#fffaf2] lg:grid-cols-[1.25fr_0.75fr]">
        <figure
          aria-live="polite"
          aria-atomic="true"
          className="relative aspect-4/3 touch-pan-y bg-[#211c17] lg:aspect-auto lg:min-h-140"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const startX = touchStartX.current;
            const endX = event.changedTouches[0]?.clientX;
            touchStartX.current = null;

            if (startX === null || endX === undefined) return;

            const distance = endX - startX;
            if (Math.abs(distance) > 48) changeImage(distance < 0 ? 1 : -1);
          }}
        >
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={activeProjectIndex === 0 && activeImageIndex === 0}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-contain motion-image-enter"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#211c17]/80 to-transparent p-4 sm:p-6">
            <figcaption className="max-w-[70%] text-sm leading-5 text-white sm:text-base">
              {activeImage.alt}
            </figcaption>
            <div className="flex shrink-0 items-center gap-2">
              <span className="mr-2 text-xs font-semibold tabular-nums text-white">
                {String(activeImageIndex + 1).padStart(2, "0")} / {String(activeProject.images.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => changeImage(-1)}
                className="grid size-11 place-items-center border border-white/55 bg-[#211c17]/60 text-xl text-white transition hover:bg-[#211c17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => changeImage(1)}
                className="grid size-11 place-items-center border border-white/55 bg-[#211c17]/60 text-xl text-white transition hover:bg-[#211c17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </figure>

          <div
            key={activeProject.slug}
            className="motion-content-enter flex flex-col justify-between gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8a15d]">
                {activeProject.type} / {activeProject.location}
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                {activeProject.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-white/78">
                {activeProject.summary}
              </p>
              <p className="mt-5 border-l border-[#d8a15d]/60 pl-4 text-sm leading-6 text-white/72">
                {activeProject.designIntent}
              </p>
            </div>
            <a
              href="https://studiocoka.com/services"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center justify-center bg-[#d8a15d] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#21170e] transition hover:bg-[#ebb978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a design project
            </a>
          </div>
      </section>

      <nav aria-label={`Images for ${activeProject.title}`} className="mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {activeProject.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`View image ${index + 1}: ${image.alt}`}
              aria-pressed={index === activeImageIndex}
              onClick={() => setActiveImageIndex(index)}
              className={`relative h-16 w-20 shrink-0 overflow-hidden bg-[#203428] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315140] sm:h-20 sm:w-28 ${
                index === activeImageIndex
                  ? "outline-2 outline-offset-2 outline-[#8d5a2b]"
                  : "opacity-70 transition hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="112px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
