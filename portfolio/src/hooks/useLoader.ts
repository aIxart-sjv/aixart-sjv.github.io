"use client";

import { useEffect, useState } from "react";

export default function useLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      const video = document.createElement("video");
      video.src = "/videos/hero-bg.mp4";

      const image = new Image();
      image.src = "/images/profile.png";

      await Promise.all([
        new Promise((res) => {
          video.onloadeddata = res;
        }),
        new Promise((res) => {
          image.onload = res;
        }),
      ]);

      // cinematic delay
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    loadAssets();
  }, []);

  return { isLoading };
}