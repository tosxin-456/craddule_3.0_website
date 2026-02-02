import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Zap,
  Gift,
  FileText,
  Users,
  TrendingUp,
  Mail
} from "lucide-react";
import ContactTicket from "../../components/contact";
import { useState } from "react";
import { API_BASE_URL } from "../../../config/apiConfig";

export default function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "Official government rates" },
    { icon: <Clock className="w-6 h-6" />, text: "Guaranteed timelines" },
    { icon: <Zap className="w-6 h-6" />, text: "Expert guidance included" },
    { icon: <Gift className="w-6 h-6" />, text: "Free initial consultation" }
  ];

  const certificates = [
    { name: "SCUML", price: "Free", highlight: true },
    { name: "TIN (from FIRS)", price: "Free", highlight: true },
    {
      name: "CAC Registrations",
      price: "Service fee: starting from ₦10,000",
      highlight: false
    },
    { name: "FIRS", price: "Contact us", highlight: false },
    { name: "Business Permits", price: "Contact us", highlight: false }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("🎉 Successfully added to the waitlist!");
        setFullName("");
        setEmail("");
        setShowModal(false)
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop"
            alt="Financial planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-yellow-900/95"></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-default group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight block">
                Simple, Clear Pricing
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent leading-tight block mt-2">
                Official Government Rates
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              All base prices are at official government rates.
              <span className="block mt-2 text-lg text-gray-400">
                Expert guidance and processing support included.
              </span>
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                Official Rates
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-blue-400/50"></div>
                Guaranteed Timelines
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-2000 shadow-lg shadow-yellow-400/50"></div>
                Expert Support
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .bg-grid-pattern {
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 50px 50px;
          }
        `}</style>
      </section>

      {/* Compliance Certificates Section */}
      <section
        id="certificates"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Compliance Certificates
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Business Registration & Licenses
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Fixed, transparent pricing for all essential business registrations.
            All base prices are always at the official government rates.
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We know how dynamic your business idea can be, as such we anticipate
            the need for several compliance documents. To that effect we help
            you obtain the necessary government certificates or licences needed.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 ${
                  cert.highlight
                    ? "border-green-400 bg-gradient-to-br from-green-50 to-white"
                    : "border-blue-100"
                }`}
              >
                <div
                  className={`w-16 h-16 ${
                    cert.highlight
                      ? "bg-gradient-to-br from-green-500 to-green-600"
                      : "bg-gradient-to-br from-blue-500 to-blue-600"
                  } rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  {cert.highlight ? (
                    <Gift className="w-8 h-8 text-white" />
                  ) : (
                    <FileText className="w-8 h-8 text-white" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {cert.name}
                </h3>

                <div className="text-center mb-4">
                  <p
                    className={`text-3xl font-extrabold ${
                      cert.highlight ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {cert.price}
                  </p>
                </div>

                {cert.highlight && (
                  <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-green-800">
                      ✓ No cost to you
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-10 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Other Permits or Certificates?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We're happy to help you process any permits or certificates not
                listed here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <a
                href="mailto:feedback@craddule.com"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold inline-flex items-center gap-3 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Contact us at feedback@craddule.com
                <ArrowRight className="w-5 h-5" />
              </a> */}
            </div>
            <ContactTicket />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Founders Choose Craddule
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transparent, efficient, and designed with startups in mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <p className="font-semibold text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy and Insights Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                  <Sparkles className="w-4 h-4" />
                  Coming Soon
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Strategy and Insights
                </h2>

                <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                  Connect with our Experts
                </h3>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With our network of experts, you have an opportunity to
                  connect with and seek clarity.
                </p>

                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Industry insight and experience are pivotal to young and
                  veteran entrepreneurs achieving business success. Our strategy
                  framework is designed to accommodate businesses within any
                  cycle, provide expert feedback and practical guidance on what
                  they must do to either position for funding or develop their
                  ideas or enhance their business.
                </p>

                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Maximize this network of over 106 experts with an average of
                  18 years of specialty in different fields and industries.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-bold text-gray-900 mb-2">
                        Cost per session: ₦50,000 monthly per Project
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        This covers a holistic review of your premise, insights
                        into the industry, tough questions to challenge why your
                        approach will stand, and mentorship through the journey.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={openModal}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-lg transition font-semibold inline-flex items-center justify-center gap-2 w-fit"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>

                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      Join Our Waitlist
                    </h2>
                    <p className="text-gray-700 mb-6">
                      Enter your details to secure a spot and get notified when
                      we launch.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
                      >
                        {loading ? "Submitting..." : "Submit"}
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>

                    {message && (
                      <p className="mt-4 text-center text-green-600 font-medium">
                        {message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Image Side */}
              <div className="relative h-full min-h-[400px] md:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
                  alt="Strategy and Insights"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Register your business today or schedule a free consultation to
            discuss your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://app.craddule.com",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl inline-flex items-center justify-center gap-2"
            >
              Start Registration
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
