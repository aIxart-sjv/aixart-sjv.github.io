"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 120,
  duration = 0.6,
  speed = 0.4,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    let split: any;
    let handleMove: any;

    const init = async () => {
      /**
       * Dynamically import GSAP plugins
       * Prevents Next.js SSR crashes
       */
      const { SplitText } = await import("gsap/SplitText");
      const { ScrambleTextPlugin } = await import(
        "gsap/ScrambleTextPlugin"
      );

      gsap.registerPlugin(SplitText, ScrambleTextPlugin);

      const paragraph =
        rootRef.current!.querySelector("p");

      if (!paragraph) return;

      // Split into characters
      split = SplitText.create(paragraph, {
        type: "lines,chars",
        charsClass:
          "inline-block will-change-transform",
      });

      // store original text
      split.chars.forEach((el: HTMLElement) => {
        gsap.set(el, {
          attr: {
            "data-content": el.innerHTML,
          },
        });
      });

      // Cursor proximity reaction
      handleMove = (e: PointerEvent) => {
        split.chars.forEach((el: HTMLElement) => {
          const rect =
            el.getBoundingClientRect();

          const dx =
            e.clientX -
            (rect.left + rect.width / 2);

          const dy =
            e.clientY -
            (rect.top + rect.height / 2);

          const distance = Math.hypot(dx, dy);

          if (distance < radius) {
            gsap.to(el, {
              overwrite: true,
              duration:
                duration *
                (1 - distance / radius),

              scrambleText: {
                text:
                  el.dataset.content || "",
                chars: scrambleChars,
                speed,
              },

              ease: "none",
            });
          }
        });
      };

      rootRef.current!.addEventListener(
        "pointermove",
        handleMove
      );
    };

    init();

    // CLEANUP
    return () => {
      if (rootRef.current && handleMove) {
        rootRef.current.removeEventListener(
          "pointermove",
          handleMove
        );
      }

      split?.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`relative select-none text-white ${className}`}
      style={style}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;