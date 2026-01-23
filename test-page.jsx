import {
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Zap,
  DollarSign,
  Gift,
  FileText,
  Building2,
  ShoppingBag,
  Award,
  HeartHandshake,
  Factory
} from "lucide-react";

export default function Pricing() {
  // const certificates = [
  //   {
  //     icon: <Target className="w-8 h-8" />,
  //     name: "Business Name Registration",
  //     description: "Register your business name with CAC",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-blue-500 to-blue-600",
  //     timeline: "3-5 business days",
  //     features: [
  //       "Name availability search",
  //       "CAC registration form",
  //       "Certificate of registration",
  //       "Digital copy delivery",
  //       "Expert guidance included"
  //     ],
  //     cta: "Register Now",
  //     popular: false
  //   },
  //   {
  //     icon: <Building2 className="w-8 h-8" />,
  //     name: "Limited Liability Company",
  //     description: "Incorporate your business as an LLC",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-green-500 to-green-600",
  //     timeline: "7-10 business days",
  //     features: [
  //       "CAC incorporation certificate",
  //       "Memorandum & Articles of Association",
  //       "Form CAC 1.1 & CAC 7",
  //       "Company seal & stamp",
  //       "TIN registration assistance"
  //     ],
  //     cta: "Incorporate Now",
  //     popular: true
  //   },
  //   {
  //     icon: <FileText className="w-8 h-8" />,
  //     name: "TIN Registration",
  //     description: "Get your Tax Identification Number",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-orange-500 to-orange-600",
  //     timeline: "2-3 business days",
  //     features: [
  //       "FIRS registration",
  //       "TIN certificate",
  //       "Tax compliance guidance",
  //       "Digital delivery",
  //       "Same-day processing available"
  //     ],
  //     cta: "Get TIN",
  //     popular: false
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     name: "SCUML Registration",
  //     description: "Special Control Unit Against Money Laundering",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-purple-500 to-purple-600",
  //     timeline: "5-7 business days",
  //     features: [
  //       "SCUML certificate",
  //       "Compliance documentation",
  //       "Application processing",
  //       "Expert guidance",
  //       "Renewal reminders"
  //     ],
  //     cta: "Apply Now",
  //     popular: false
  //   },
  //   {
  //     icon: <ShoppingBag className="w-8 h-8" />,
  //     name: "Business Permit",
  //     description: "Local government business operating permit",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-red-500 to-red-600",
  //     timeline: "7-10 business days",
  //     features: [
  //       "Business permit application",
  //       "Local government liaison",
  //       "Document preparation",
  //       "Certificate delivery",
  //       "Compliance support"
  //     ],
  //     cta: "Get Permit",
  //     popular: false
  //   },
  //   {
  //     icon: <Factory className="w-8 h-8" />,
  //     name: "FIRS Registration",
  //     description: "Federal Inland Revenue Service registration",
  //     price: "Official Rate",
  //     priceDetail: "Government fees apply",
  //     color: "from-teal-500 to-teal-600",
  //     timeline: "3-5 business days",
  //     features: [
  //       "FIRS registration",
  //       "Tax compliance setup",
  //       "Certificate of registration",
  //       "Expert guidance",
  //       "Fast-track processing"
  //     ],
  //     cta: "Register",
  //     popular: false
  //   }
  // ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "Official government rates" },
    { icon: <Clock className="w-6 h-6" />, text: "Guaranteed timelines" },
    { icon: <Zap className="w-6 h-6" />, text: "Expert guidance included" },
    { icon: <Gift className="w-6 h-6" />, text: "Free initial consultation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=800&fit=crop"
            alt="Financial planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-yellow-900/95"></div>
        </div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge with Hover Effect */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-default group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
              <DollarSign className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 text-yellow-400" />
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight block">
                Simple, Clear Pricing
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent leading-tight block mt-2">
                Official Government Rates
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              All base prices are at official government rates.
              <span className="block mt-2 text-lg text-gray-400">
                Expert guidance and processing support included.
              </span>
            </p>

            {/* Decorative Elements */}
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Compliance Certificates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Registration & Licenses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Fixed, transparent pricing for all essential business registrations.
            All base prices are always at the official government rates.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We know how dynamic your business idea can be, as such we anticipate
            the need for several compliance documents. To that effect we help
            you obtain the necessary government certificates or licences needed.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                cert.popular ? "ring-4 ring-green-500 scale-105" : ""
              }`}
            >
              {cert.popular && (
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1 z-10">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {cert.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.priceDetail}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{cert.timeline}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {cert.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    window.open(
                      "https://console.app.craddule.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    cert.popular
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {cert.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-12 text-center bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
          <p className="text-gray-800 text-lg mb-2">
            <strong>Some of the most popular include:</strong>
          </p>
          <p className="text-gray-700 mb-4">
            CAC • TIN • SCUML • FIRS • Business Permits
          </p>
          <p className="text-gray-700">
            For other specific requests, we are happy to help you process.{" "}
            <a
              href="mailto:support@craddule.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
      >
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
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategy and Insights
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Connect with our Experts
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With our network of experts, you have an opportunity to connect
                with and seek clarity.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Industry insight and experience are pivotal to young and veteran
                entrepreneurs achieving business success. Our strategy framework
                is designed to accommodate businesses within any cycle, provide
                expert feedback and practical guidance on what they must do to
                either position for funding or develop their ideas or enhance
                their business.
              </p>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Maximize this network of over 106 experts with an average of 18
                years of specialty in different fields and industries.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Cost per session: ₦50,000 monthly per Project
                </p>
                <p className="text-gray-700 text-sm">
                  This covers a holistic review of your premise, insights into
                  the industry, tough questions to challenge why your approach
                  will stand, and mentorship through the journey.
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://console.app.craddule.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition font-semibold inline-flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
                alt="Strategy and Insights"
                className="rounded-2xl shadow-lg w-full md:w-96"
              />
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
                  "https://console.app.craddule.com",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold shadow-xl inline-flex items-center justify-center gap-2"
            >
              Start Registration
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://console.app.craddule.com",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition text-lg font-semibold"
            >
              Book Free Consultation
            </button>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            No credit card required • Free consultation • Money-back guarantee
          </p>
        </div>
      </section>
    </div>
  );
}
