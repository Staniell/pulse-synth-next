import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import VisualizerDemo from "@/components/VisualizerDemo";
import { cn } from "@/lib/utils/cn";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-neon-purple/20 blur-[100px] -z-20" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-neon-cyan/20 blur-[100px] -z-20" />

      <div className="relative z-10 max-w-4xl space-y-8">
        {/* Title Group */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neon-cyan backdrop-blur-md">
            <span>v1.0 Now Available</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span
              className={cn(
                "bg-gradient-to-r from-neon-purple via-white to-neon-cyan bg-clip-text text-transparent",
                "pb-2" // Fix for descender clipping
              )}
            >
              PulseSynth
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            Turn your browser into an immersive audiovisual experience. Real-time, GPU-accelerated ambient lighting that
            reacts to your music.
          </p>
        </div>

        {/* Demo */}
        <VisualizerDemo />

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <Download className="h-5 w-5" />
            <span>Add to Chrome</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 transition-opacity group-hover:opacity-10" />
          </Link>

          <Link
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-medium text-gray-300 transition-colors hover:text-white"
          >
            <span>How it works</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
