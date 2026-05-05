"use client";

import React, { forwardRef } from "react";

type SignatureProps = React.HTMLAttributes<HTMLImageElement>;

const Signature = forwardRef<HTMLImageElement, SignatureProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <img
        ref={ref}
        src="/images/signature.png"
        alt="Signature"
        {...props}
        className={`
          w-[60vw]
          max-w-[700px]
          min-w-[220px]
          h-auto
          object-contain
          select-none
          pointer-events-none
          opacity-100
          translate-y-0
          ${className}
        `}
      />
    );
  }
);

Signature.displayName = "Signature";

export default Signature;