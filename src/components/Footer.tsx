import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo / Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-lg font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            PulseSynth
          </span>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} PulseSynth. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://staniell.vercel.app/#projects"
            target="_blank"
            className="text-neon-cyan hover:text-neon-purple transition-colors font-medium"
          >
            More Projects
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <Link
            href="https://github.com/staniell"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gio-staniell-belolo/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
