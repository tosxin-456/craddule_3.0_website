import {
  ArrowRight,
  CheckCircle,
  Shield,
  DollarSign,
  Target,
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import BusinessOnboarding from "../../components/abbybasic";

export default function Home() {
  const companies = [
    {
      name: "Stretford Professional Services",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&auto=format"
    },
    {
      name: "Oui Advisory Capital",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=80&fit=crop&auto=format"
    },
    {
      name: "Gigawatt Energy Limited",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&auto=format"
    },
    {
      name: "Klump Technologies",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=80&fit=crop&auto=format"
    },
    {
      name: "Esca Technologies",
      logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&h=80&fit=crop&auto=format"
    },
    {
      name: "Probitas Partners LLP",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop"
            alt="Funding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 text-sm backdrop-blur-sm">
              <DollarSign className="w-4 h-4" />
              Funding + Compliance in one
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get funded
              <span className="block text-yellow-400">stay compliant</span>
            </h1>

            <p className="text-xl text-green-100 mb-8">
              Craddule helps fund your business idea and ensures you meet every
              regulatory requirement—so you can scale without surprises.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://console.app.craddule.com",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition shadow-xl"
            >
              Get started
              <ArrowRight />
            </button>

            <div className="flex gap-8 mt-8 text-green-100">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400" />
                Capital + compliance
              </span>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800"
              alt="Funding"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold">₦42.7M </p>
                  <p className="text-sm text-gray-600">
                    in funding and Value deployed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROP ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Funding that comes with structure
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="text-white w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Seed capital + growth support
              </h3>

              <p className="text-gray-700 text-lg mb-4">
                Get access to seed funding designed to move your business
                forward—paired with the right tools and expert guidance to help
                you scale sustainably.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>Seed capital to kickstart or accelerate growth</span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>You lead the equity conversation—on your terms</span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>
                    Access industry tools & experts to support execution
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compliance built in</h3>
              <p className="text-gray-700 text-lg mb-4">
                We identify every license, permit, and regulatory requirement
                your business needs before you scale.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>Complete regulatory checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>Guided application support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-1 flex-shrink-0 w-5 h-5" />
                  <span>Ongoing compliance monitoring</span>
                </li>
              </ul>
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
                Too many great businesses fail because they either can't access
                capital or miss critical compliance requirements.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe you shouldn't have to choose between funding and
                doing things right.
              </p>
              <p className="text-lg font-semibold text-green-700">
                Craddule gives you both—the capital to grow and the structure to
                stay compliant.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
                alt="Business growth"
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

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                  alt="AI Business Review"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-green-600/10 rounded-xl group-hover:bg-green-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI-powered business review
              </h3>
              <p className="text-gray-600">
                Our AI engine analyzes your idea and helps develop your business
                summary, financial projections, and market strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop"
                  alt="Apply"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-green-600/10 rounded-xl group-hover:bg-green-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply for funding</h3>
              <p className="text-gray-600">
                Tell us about your business, revenue, and growth plans. Takes 10
                minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop"
                  alt="Review"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-green-600/10 rounded-xl group-hover:bg-green-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Get your offer + compliance roadmap
              </h3>
              <p className="text-gray-600">
                Receive a funding offer and a complete checklist of regulatory
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop"
                  alt="Scale"
                  className="rounded-xl mx-auto shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-green-600/10 rounded-xl group-hover:bg-green-600/20 transition" />
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Scale with confidence
              </h3>
              <p className="text-gray-600">
                Use the capital to grow while we guide you through compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BusinessOnboarding />

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
                Our funding principles
              </h2>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Founder-friendly terms, no hidden fees
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Compliance is non-negotiable</p>
                </div>
                <div className="bg-white p-5 rounded-xl flex gap-4 shadow-sm">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Long-term partnership over quick wins
                  </p>
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
            Trusted by founders building the future
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Join hundreds of businesses funded and kept compliant by Craddule
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
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=600&fit=crop"
            alt="Success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get the capital, leverage business experts, and obtain the
            compliance your business needs
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Register today start your businesses’ regulatory compliance, and
            apply for potential funding offers.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://console.app.craddule.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-white text-green-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto hover:scale-105 transition shadow-2xl"
          >
            Register now
            <ArrowRight />
          </button>

          <p className="mt-6 text-green-200 text-sm">
            No upfront fees • Quick decisions • Keep your equity
          </p>
        </div>
      </section>
    </div>
  );
}
