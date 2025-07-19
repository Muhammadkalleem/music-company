"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  let ctx: CanvasRenderingContext2D;
  let animationId: number;
  let w = 0, h = 0, nt = 0;

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.01;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    ctx.clearRect(0, 0, w, h); // Clear previous frame
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d")!;
    
    const bounds = canvas.getBoundingClientRect();
    w = canvas.width = bounds.width;
    h = canvas.height = bounds.height;

    ctx.filter = `blur(${blur}px)`;

    render();

    window.addEventListener("resize", () => {
      const bounds = canvas.getBoundingClientRect();
      w = canvas.width = bounds.width;
      h = canvas.height = bounds.height;
      ctx.filter = `blur(${blur}px)`;
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      init();
    }, 100); // Small delay ensures layout is stable

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-center relative",
        containerClassName
      )}
    >
        <canvas
  className="absolute inset-0 z-0"
  ref={canvasRef}
  style={{
    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
    width: "100%",
    height: "100%",
  }}
></canvas>



      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
