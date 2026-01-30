import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  // { name: "About", path: "/about" },
  // { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src={logo} className="w-6 h-6" alt="Craddule logo" />
          </div>
          <span
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-blue-600" : "text-white"
            }`}
          >
            Craddule
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() =>
            window.open(
              "https://app.craddule.com",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className={`hidden md:block px-6 py-2 rounded-lg text-sm font-semibold transition-all
            ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                : "bg-white/90 text-blue-600 hover:bg-white"
            }
          `}
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-gray-600" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() =>
              window.open(
                "https://app.craddule.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 shadow-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
