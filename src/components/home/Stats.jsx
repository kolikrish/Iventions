"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Btn from "../button/Btn";

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const imageRefs = useRef([]);
  const imageWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const contentRefs = useRef([]);

  const baseRotateX = 5;
  const baseRotateY = -5;

  const mids = [
    {
      no: '270',
      superScript: '+'
    },
    {
      no: '90',
      superScript: '%'
    },
    {
      no: '21',
      superScript: ''
    },
    {
      no: '30',
      superScript: ''
    },
    {
      no: '1.2',
      superScript: 'K'
    }, ,
  ];

  const heading = [
    "Projects Delievered",
    "Loyal Client",
    "Team Nationalities",
    "Countries Reached",
    "Lightbulb moments",
  ];

  const content = [
    "Big stages, small details. Each one designed to leave a mark.",
    "Our clients love to come back, proof that true partnership lasts.",
    "One team. Twenty-one perspectives. Countless cultural insights.",
    "We don’t just go global. We bring the world to every event.",
    "That’s ideas, not coffee. Brilliant ones, brewed daily.",
  ];

  const imageSources = [
    "/assets/img/about-bg.jpeg",
    "/assets/img/about-bg-2.jpeg",
    "/assets/img/about-bg-3.jpeg",
    "/assets/img/about-bg-4.jpeg",
    "/assets/img/about-bg-5.jpeg",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const total = heading.length;

      heading.forEach((_, i) => {
        const startPos = (i / total) * 70;
        const endPos = startPos + 13.8;

        if (!headingRefs.current[i] || !contentRefs.current[i]) return;

        const initialTargets = [headingRefs.current[i], contentRefs.current[i]].filter(Boolean);
        if (initialTargets.length > 0) {
          gsap.set(initialTargets, { y: "8vw", opacity: 0 });
          if (i === 0) gsap.set(initialTargets, { y: 0, opacity: 1 });
        }

        ScrollTrigger.create({
          trigger: "#insights",
          start: `${startPos}% 20.5%`,
          end: `${endPos}% 20.5%`,

          onEnter: () => {
            if (i > 0) {
              const targets = [headingRefs.current[i], contentRefs.current[i]].filter(Boolean);
              if (targets.length > 0) {
                gsap.fromTo(
                  targets,
                  { y: "8vw", opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
                );
              }

              // IMAGE CROSSFADE
              if (imageRefs.current[i - 1]) {
                gsap.to(imageRefs.current[i - 1], {
                  opacity: 0,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }
              if (imageRefs.current[i]) {
                gsap.to(imageRefs.current[i], {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out",
                });
              }
            }
          },

          // === ON LEAVE DOWN (scroll continues) ===
          onLeave: () => {
            if (i < total - 1) {
              const targets = [headingRefs.current[i], contentRefs.current[i]].filter(Boolean);
              if (targets.length > 0) {
                gsap.to(targets, {
                  y: "-8vw",
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            }
          },

          // === ON ENTER BACK (scrolling up) ===
          onEnterBack: () => {
            if (i === total - 1) return;
            const targets = [headingRefs.current[i], contentRefs.current[i]].filter(Boolean);
            if (targets.length > 0) {
              gsap.fromTo(
                targets,
                { y: "-8vw", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              );
            }

            // IMAGE CROSSFADE (scrolling up)
            if (imageRefs.current[i + 1]) {
              gsap.to(imageRefs.current[i + 1], {
                opacity: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            }
            if (imageRefs.current[i]) {
              gsap.to(imageRefs.current[i], {
                opacity: 1,
                duration: 0.2,
                ease: "power2.out",
              });
            }
          },

          // === ON LEAVE BACK (scroll up past item) ===
          onLeaveBack: () => {
            if (i > 0) {
              const targets = [headingRefs.current[i], contentRefs.current[i]].filter(Boolean);
              if (targets.length > 0) {
                gsap.to(targets, {
                  y: "8vw",
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            }
          },
        });
      });

      imageSources.forEach((_, i) => {
        const total = imageSources.length;
        const midNosElements = containerRef.current?.querySelectorAll(".mid-nos p") || [];
        const midNosTopElements = containerRef.current?.querySelectorAll(".mid-nos-top p") || [];
        if (!midNosElements[i] || !midNosTopElements[i]) return;

        gsap.set(midNosTopElements[i], { y: "20vw" });
        if (i === 0) gsap.set(midNosTopElements[i], { y: 0, opacity: 1 });

        ScrollTrigger.create({
          trigger: midNosElements[i],
          start: "top 53%",
          end: "bottom 50%",

          onEnter: () => {
            if (i > 0 && midNosTopElements[i]) {
              gsap.fromTo(
                midNosTopElements[i],
                { y: "20vw" },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              );
            }
          },

          onLeave: () => {
            if (i < total - 1 && midNosTopElements[i]) {
              gsap.to(midNosTopElements[i], {
                y: "-20vw",
                duration: 0.5,
                ease: "power2.out",
              });
            }
          },

          onEnterBack: () => {
            if (i === total - 1) return;
            if (midNosTopElements[i]) {
              gsap.fromTo(
                midNosTopElements[i],
                { y: "-20vw" },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
              );
            }
          },

          onLeaveBack: () => {
            if (i > 0 && midNosTopElements[i]) {
              gsap.to(midNosTopElements[i], {
                y: "20vw",
                duration: 0.5,
                ease: "power2.out",
              });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const image = imageWrapperRef.current;
    if (!container || !image) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const normX = (x - width / 2) / (width / 2);
    const normY = (y - height / 2) / (height / 2);

    const rotateY = baseRotateY + normX * 5;
    const rotateX = baseRotateX - normY * 5;

    gsap.to(image, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const image = imageWrapperRef.current;
    if (!image) return;

    gsap.to(image, {
      rotateX: baseRotateX,
      rotateY: baseRotateY,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      id="insights"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-screen h-[190vh] bg-[#F3EFEB] relative z-55"
    >
      <div className="h-screen w-full overflow-hidden sticky top-0 flex items-center justify-between px-[5vw] z-2">

        <div
          ref={imageWrapperRef}
          className="w-[33vw] max-md:w-[65vw] bg-black h-[22vw] max-md:h-[42vw] absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[1vw] max-md:rounded-[2vw] overflow-hidden shadow-2xl"
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(800px) rotateX(${baseRotateX}deg) rotateY(${baseRotateY}deg)`,
          }}
        >
          {imageSources.map((src, i) => (
            <Image
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              width={1000}
              height={1000}
              alt={`about-img-${i}`}
              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="w-[22%] max-md:w-[42%]">
          <div className="h-[8vw] max-md:h-[18vw] relative overflow-hidden w-full">
            {heading.map((no, idx) => (
              <p
                key={idx}
                ref={(el) => (headingRefs.current[idx] = el)}
                className="text-black text-[3.4vw] max-md:text-[4.5vw] opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.2] font-bold text-center"
              >
                {no}
              </p>
            ))}
          </div>
        </div>

        <div className="w-[22%] max-md:w-[42%]">
          <div className="h-[9vw] max-md:h-[22vw] relative overflow-hidden w-full">
            {content.map((no, idx) => (
              <p
                key={idx}
                ref={(el) => (contentRefs.current[idx] = el)}
                className="text-black w-full text-[1.3vw] max-md:text-[2.6vw] opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.2] font-medium text-center"
              >
                {no}
              </p>
            ))}
          </div>
        </div>

        <div className="h-[15vw] max-md:h-[25vw] w-[30vw] max-md:w-[50vw] overflow-hidden absolute z-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-full w-full relative space-y-[1vw] mid-nos-top">
            {mids.map((n, idx) => (
              <p
                key={idx}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-yellow text-[10vw] max-md:text-[16vw] font-bold"
              >
                <span className="absolute right-[-4vw] max-md:right-[-6vw] top-[1vw] text-[5vw] max-md:text-[8vw]">
                  {n.superScript}
                </span>
                {n.no}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 flex justify-center">
        <div className="w-[30%] max-md:w-[80%] h-full pt-[10vw] space-y-[5vw]">
          <div>
            <p className="text-[2vw] max-md:text-[4.5vw] font-display text-center">
              Where passion meets precision
            </p>
          </div>

          <div className="h-[15vw] w-full flex justify-center">
            <div className="h-[55vw] space-y-[2vw] mid-nos">
              {mids.map((n, idx) => (
                <p
                  key={idx}
                  className="text-white relative h-[12vw] max-md:h-[18vw] text-[10vw] max-md:text-[16vw] font-bold text-center"
                >
                  <span className="absolute text-white right-[-3vw] max-md:right-[-5vw] top-[1vw] text-[5vw] max-md:text-[8vw]">
                    {n.superScript}
                  </span>
                  {n.no}
                </p>
              ))}
              <div className="w-full flex cursor-pointer justify-center mt-[5vw]">
                <Btn text="Get to Know us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
