"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

export default function AboutParticles() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,

        fpsLimit: 60,

        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              area: 900,
            },
          },

          color: {
            value: "#ffffff",
          },

          shape: {
            type: "triangle",
          },

          opacity: {
            value: 0.15,
          },

          size: {
            value: { min: 4, max: 8 },
          },

          rotate: {
            value: 0,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            distance: 160,
            color: "#ffffff",
            opacity: 0.06,
            width: 1,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },

          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}