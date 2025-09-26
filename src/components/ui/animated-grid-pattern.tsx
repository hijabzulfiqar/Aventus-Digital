"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      opacity: number;
    }>
  >([]);

  const getPos = () => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  };

  // Generate grid squares based on container size
  const generateSquares = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const [x, y] = getPos();
      return {
        id: i,
        x: x * width,
        y: y * height,
        opacity: Math.random() * maxOpacity,
      };
    });
  };

  // Update container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || 800,
          height: rect.height || 600,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate squares when dimensions change
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares, width, height, maxOpacity]);

  // Animate squares
  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((current) =>
        current.map((square) => ({
          ...square,
          opacity: Math.random() * maxOpacity,
        }))
      );
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration, maxOpacity]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5,${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map((square) => (
        <rect
          key={square.id}
          width={width}
          height={height}
          x={square.x}
          y={square.y}
          fill="currentColor"
          fillOpacity={square.opacity}
          style={{
            transition: `fill-opacity ${duration}s ease-in-out`,
          }}
        />
      ))}
    </svg>
  );
}
