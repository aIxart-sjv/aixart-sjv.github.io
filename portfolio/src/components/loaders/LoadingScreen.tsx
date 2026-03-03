"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }: any) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[9999] 
          bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-2xl tracking-[0.3em]"
            >
              INITIALIZING SYSTEM
            </motion.h1>

            <motion.div
              className="mt-6 h-[2px] bg-white"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}