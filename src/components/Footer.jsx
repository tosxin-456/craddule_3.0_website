// components/Footer.jsx
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="max-w-sm">
            <p
              onClick={() => goTo("/")}
              className="font-bold text-xl text-blue-900 cursor-pointer"
            >
              Craddule
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Supporting founders with clarity, structure, and expert guidance
              to build successful ventures.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 text-sm">
            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Company</p>

              {/* <p
                onClick={() => goTo("/about")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </p> */}

              {/* <p
                onClick={() => goTo("/features")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Features
              </p> */}

              <p
                onClick={() => goTo("/pricing")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Pricing
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Legal</p>

              <p
                onClick={() => goTo("/privacy")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </p>

              <p
                onClick={() => goTo("/terms")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Terms of Service
              </p>

              {/* <p
                onClick={() => goTo("/cookies")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Cookie Policy
              </p> */}
            </div>
            {/* 
            <div className="space-y-3">
              <p className="font-semibold text-blue-900 mb-4">Support</p>

              <p
                onClick={() => goTo("/help")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Help Center
              </p>

              <p
                onClick={() => goTo("/contact")}
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact Us
              </p>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Craddule. All rights reserved.
            </p>

            {/* <div className="flex gap-6 text-xs text-gray-500">
              <p
                onClick={() => goTo("/privacy")}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Privacy
              </p>

              <span>•</span>

              <p
                onClick={() => goTo("/terms")}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Terms
              </p>

              <span>•</span>

              <p
                onClick={() => goTo("/sitemap")}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Sitemap
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
