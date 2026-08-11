import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const isDetailProject =
      location.pathname.startsWith("/detail-project/");

  const menus = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
      if (isDetailProject) {
          setActiveSection("projects");
          return;
      }

      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      setActiveSection(entry.target.id);
                  }
              });
          },
          {
              threshold: 0.6,
          }
      );

      sections.forEach((section) =>
          observer.observe(section)
      );

      return () => observer.disconnect();
  }, [isDetailProject]);

  const getMenuHref = (href: string) => {
      if (isDetailProject) {
          return `/${href}`;
      }

      return href;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1a1027]/70 backdrop-blur-2xl border-b border-purple-400/20 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">
          Portfolio.
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ml-auto items-center gap-10">
          {menus.map((menu) => {
            const isActive =
              activeSection === menu.href.replace("#", "");

            return (
              <a
                key={menu.name}
                href={getMenuHref(menu.href)}
                className={`relative pb-2 transition-colors duration-300 ${
                  isActive
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {menu.name}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-purple-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes size={26} />
          ) : (
            <FaBars size={26} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 border-t border-slate-800"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-slate-900">
          {menus.map((menu) => {
            const isActive =
              activeSection === menu.href.replace("#", "");

            return (
              <a
                key={menu.name}
                href={getMenuHref(menu.href)}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 transition-all duration-300 ${
                  isActive
                    ? "text-purple-400 bg-slate-800"
                    : "text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                }`}
              >
                {menu.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}