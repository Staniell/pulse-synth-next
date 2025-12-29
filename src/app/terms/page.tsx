import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-gray-300">
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to PulseSynth. By installing or using our Chrome Extension, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use the extension.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Use License</h2>
            <p>
              PulseSynth is free to use. You are granted a limited, non-exclusive, revocable license to use the
              extension for personal, non-commercial purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Disclaimer</h2>
            <p>
              The software is provided "as is", without warranty of any kind, express or implied, including but not
              limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no
              event shall the authors or copyright holders be liable for any claim, damages or other liability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Changes</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the extension constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
