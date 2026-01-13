import {
  ArrowRight,
  CheckCircle,
  Shield,
  FileCheck,
  Target,
  Zap,
  Star
} from "lucide-react";

export default function Home() {
  const companies = [
    {
      name: "TechVenture",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop"
    },
    {
      name: "InnovateCo",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop"
    },
    {
      name: "FutureScale",
      logo: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=200&h=80&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 text-sm backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Regulatory clarity for founders
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Know your regulatory requirements
              <span className="block text-yellow-400">before you scale</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Get the exact licenses, registrations, and approvals your business
              needs.
            </p>

            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition shadow-xl">
              Get my regulatory checklist
              <ArrowRight />
            </button>

            <div className="flex gap-8 mt-8 text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400" />
                Free
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400" />
                Compliance-first
              </span>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
              alt="Documents"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Star className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-gray-600">Businesses helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Craddule exists</h2>
              <p className="text-lg text-gray-700 mb-4">
                Many founders fail not because their ideas are bad, but because
                they miss critical regulatory requirements.
              </p>
              <p className="text-lg text-gray-700">
                Craddule removes that uncertainty.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Business planning"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop"
                  alt="Evaluate"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluate your idea</h3>
              <p className="text-gray-600">
                We analyze your business and industry context.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
                  alt="Identify"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Identify requirements
              </h3>
              <p className="text-gray-600">
                Every approval, license, and certificate you need.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                  alt="Secure"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure compliance</h3>
              <p className="text-gray-600">
                Guided support to get everything right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                alt="Principles"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">
                Our compliance principles
              </h2>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">No shortcuts or loopholes</p>
                </div>
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Structure and clarity first</p>
                </div>
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Long-term compliance focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Trusted by growing businesses
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Join hundreds of founders who got clarity on their compliance needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {companies.map((c, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="mx-auto h-20 w-full object-cover rounded-lg mb-4"
                />
                <p className="font-semibold text-center text-lg">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Know what your business needs — before you scale
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get your free regulatory checklist in minutes.
          </p>

          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto hover:scale-105 transition shadow-2xl">
            Get started free
            <ArrowRight />
          </button>

          <p className="mt-6 text-blue-200 text-sm">
            No credit card required • Takes 5 minutes
          </p>
        </div>
      </section>
    </div>
  );
}
