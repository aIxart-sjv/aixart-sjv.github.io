"use client";

import React, { forwardRef } from "react";

const Signature = forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>((props, ref) => {
  return (
    <img
      ref={ref}
      src="/images/signature.png"
      alt="Signature"
      {...props}
      className="
        absolute
        bottom-20
        left-1/2
        -translate-x-1/2
        w-[240px]
        opacity-0
        translate-y-10
        pointer-events-none
      "
    />
  );
});

Signature.displayName = "Signature";

export default Signature;