"use client"

import { cn } from "@/lib/utils";
import * as React from "react";

const iconPaths: Record<string, React.ReactNode> = {
    'i-logo': <path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 2.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6Zm-.2 2.4c.5 0 .9.4.9.9v4.6l3.3 1.9c.43.25.58.8.33 1.22a.9.9 0 0 1-1.22.33l-3.7-2.1a1.4 1.4 0 0 1-.64-1.2V7.5c0-.5.4-.9.9-.9Z"/>,
    'i-search': <path fill="currentColor" d="M10 2a8 8 0 1 1 5.3 14l4.4 4.4-1.4 1.4-4.4-4.4A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4Z"/>,
    'i-uniform': <path fill="currentColor" d="M8 3c1.1 1 2.5 1.5 4 1.5S14.9 4 16 3l3 3-2 5h-2V7h-2v4h-2V7H9v4H7L5 6l3-3ZM6 14h12v7H6v-7Z"/>,
    'i-map': <path fill="currentColor" d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Zm0 2.2v12.6l-4 1.3V6.5l4-1.3Zm2 .4 4 1.3v12.6l-4-1.3V5.6Zm10 .9v12.6l-4 1.3V7.8l4-1.3Z"/>,
    'i-rules': <path fill="currentColor" d="M5 3h14v2H5V3Zm0 4h14v2H5V7Zm0 4h9v2H5v-2Zm0 4h9v2H5v-2Zm0 4h9v2H5v-2Zm12-8h2v10h-2V11Z"/>,
    'i-pay': <path fill="currentColor" d="M3 5h18v14H3V5Zm2 2v2h14V7H5Zm0 4v6h14v-6H5Zm2 2h6v2H7v-2Z"/>,
    'i-dot': <circle cx="12" cy="12" r="9" fill="currentColor"/>,
    'i-alert': <path fill="currentColor" d="M12 2 1 21h22L12 2Zm0 6 5 9H7l5-9Zm-1 10h2v2h-2v-2Z"/>,
    'i-up': <path fill="currentColor" d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7Z"/>,
    'i-expand': <path fill="currentColor" d="M7 10h10v2H7v-2Zm0 4h10v2H7v-2ZM7 6h10v2H7V6Z"/>,
    'i-collapse': <path fill="currentColor" d="M7 6h10v2H7V6Zm0 12h10v-2H7v2Z"/>,
    'i-theme-light': <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>,
    'i-theme-dark': <path fill="currentColor" d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>,
  };
  
  interface IconProps extends React.SVGAttributes<SVGElement> {
    id: keyof typeof iconPaths;
  }
  
  export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ id, className, ...props }, ref) => {
      return (
        <svg
          ref={ref}
          className={cn(className)}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          {...props}
        >
          {iconPaths[id]}
        </svg>
      );
    }
  );
  Icon.displayName = "Icon";
