import { Heart, Coffee } from "lucide-react";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-500/10 text-red-400 mb-4">
          <Heart className="w-6 h-6 fill-current" />
        </div>

        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
          Support Development
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          PulseSynth is 100% free. If you love using it, consider buying me a coffee to keep the updates flowing.
        </p>

        <div className="pt-4">
          <Link
            href="https://ko-fi.com/staniellg"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF5E5B] text-white font-bold text-lg hover:bg-[#FF5E5B]/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,94,91,0.3)] hover:shadow-[0_0_40px_rgba(255,94,91,0.5)]"
          >
            <Coffee className="w-6 h-6" />
            <span>Buy me a Coffee</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500">Every donation helps pay for development time.</p>
        </div>
      </div>
    </section>
  );
}
