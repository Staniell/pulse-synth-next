import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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

          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Data Collection</h2>
            <p>
              PulseSynth is designed with privacy as a priority.{" "}
              <strong>We do not collect, store, or transmit any of your personal data.</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Audio Processing</h2>
            <p>
              All audio analysis is performed locally within your browser using the Web Audio API. Audio data is
              processed in real-time to generate visual effects and is immediately discarded. It is never recorded or
              sent to any external server.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Permissions</h2>
            <p>
              The extension requires "tabCapture" permission solely to access the audio stream of the active tab for
              visualization purposes. It requires "activeTab" permission to inject the visual overlay.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Updates</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page.</p>
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
