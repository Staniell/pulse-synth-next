import { Zap, Shield, Music } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Audio-First Design",
    description:
      "Connects to any active tab's audio stream. Whether it's Spotify, SoundCloud, or YouTube, PulseSynth reacts in real-time.",
  },
  {
    icon: Zap,
    title: "GPU Accelerated",
    description:
      "Built with WebGL shaders to ensure zero impact on your browsing performance. Run it all day without lag.",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Audio analysis happens entirely within your browser. No data is ever sent to external servers.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start gap-4 p-8 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.05]"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20">
                <feature.icon className="w-6 h-6 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>

              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
