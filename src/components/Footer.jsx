// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="max-w-sm">
            <p className="font-bold text-xl text-blue-900">Craddule</p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Supporting founders with clarity, structure, and expert guidance
              to build successful ventures.
            </p>
            {/* Social or contact icons could go here */}
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 text-sm">
            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Company</p>
              <a
                href="#about"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#features"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Pricing
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Legal</p>
              <a
                href="#privacy"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Support</p>
              <a
                href="#help"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Help Center
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Craddule. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a
                href="#privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy
              </a>
              <span>•</span>
              <a
                href="#terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms
              </a>
              <span>•</span>
              <a
                href="#sitemap"
                className="hover:text-blue-600 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
