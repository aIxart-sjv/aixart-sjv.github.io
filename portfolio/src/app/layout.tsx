"use client";

import "./globals.css";

import { ReactNode } from "react";

import useLoader from "@/hooks/useLoader";
import useLenis from "@/hooks/useLenis";

import LoadingScreen from "@/components/loaders/LoadingScreen";
// future ready
// import Navbar from "@/components/layout/Navbar";
// import BackgroundScene from "@/three/BackgroundScene";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  /* =============================
     GLOBAL SYSTEMS
  ============================= */

  // cinematic smooth scrolling
  useLenis();

  // boot loader control
  const { isLoading } = useLoader();

  return (
    <html lang="en">
      <body
        className="
          bg-black
          text-white
          overflow-x-hidden
          antialiased
          selection:bg-white
          selection:text-black
        "
      >
        {/* =============================
            LOADING SCREEN
        ============================= */}
        <LoadingScreen isLoading={isLoading} />

        {/* =============================
            MAIN EXPERIENCE
        ============================= */}
        {!isLoading && (
          <>
            {/* --------------------------------
               GLOBAL BACKGROUND LAYER
               (Particles / Three.js later)
            -------------------------------- */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              {/* <BackgroundScene /> */}
            </div>

            {/* --------------------------------
               NAVIGATION
            -------------------------------- */}
            {/* <Navbar /> */}

            {/* --------------------------------
               SCROLL EXPERIENCE
            -------------------------------- */}
            <main
              className="
                relative
                z-10
                w-full
              "
            >
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  );
}