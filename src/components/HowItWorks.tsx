import { Download, Pin, Play } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "1. Install",
    description: "Get PulseSynth from the Chrome Web Store.",
  },
  {
    icon: Pin,
    title: "2. Pin It",
    description: "Pin the extension to your toolbar for easy access.",
  },
  {
    icon: Play,
    title: "3. Play",
    description: "Start music in any tab and watch the light show begin.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How it works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get up and running in less than a minute. No complex setup required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              {/* Visual Placeholder */}
              <div className="relative w-full aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-sm text-gray-500 font-mono">[Preview: {step.title}]</span>
                {/* This would be a Next.js Image or video later */}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
