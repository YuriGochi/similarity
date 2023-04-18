import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const HeadingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4x1 md:text-5xl lg:text-6xl",
        lg: "text-5x1 md:text-6xl lg:text-7xl",
        sm: "text-2x1 md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadgingProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof HeadingVariants> {}

const LargeHeading = React.forwardRef<HTMLHeadingElement, LargeHeadgingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(HeadingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = "LargeHeading";
export default LargeHeading;
