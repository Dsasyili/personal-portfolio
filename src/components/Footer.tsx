import { useEffect, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaHeart,
} from "react-icons/fa";

export default function Footer() {
    const [showHello, setShowHello] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.innerHeight + window.scrollY;

            const pageHeight =
                document.documentElement.scrollHeight;

            // Aktif ketika mendekati footer
            if (scrollPosition >= pageHeight - 300) {
                setShowHello(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className="border-t border-white/10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Animated Hello */}
                <div
                    className={`
                        text-center
                        mb-10
                        transition-all
                        duration-1000
                        ${
                            showHello
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }
                    `}
                >
                    <p className="text-sm text-gray-400 mb-2">
                        Hello there
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold">
                        <span className="text-blue-400">
                            Thanks for stopping by
                        </span>

                        <span className="inline-block ml-2 animate-bounce">
                            👋
                        </span>
                    </h2>
                </div>

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">
                            <span className="text-blue-400">
                                Sachylee.
                            </span>
                        </h3>

                        <p className="text-sm text-gray-400 mt-2 max-w-sm leading-6">
                            Web Developer & UI/UX Designer passionate about
                            creating modern and meaningful digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                        <a
                            href="#home"
                            className="text-pink-400 hover:text-white transition"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-pink-400 hover:text-white transition"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            className="text-pink-400 hover:text-white transition"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            className="text-pink-400 hover:text-white transition"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-pink-400 hover:text-white transition"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">

                        {/* GitHub */}
                        <a
                            href="https://github.com/Dsasyili"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
                                w-10 h-10
                                rounded-full
                                bg-[#181717]
                                border border-[#303030]
                                flex items-center justify-center
                                text-white
                                hover:bg-[#303030]
                                hover:-translate-y-1
                                transition-all duration-300
                            "
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/desquita-sasyili/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="
                                w-10 h-10
                                rounded-full
                                bg-[#0A66C2]
                                border border-[#0A66C2]
                                flex items-center justify-center
                                text-white
                                hover:bg-[#084f96]
                                hover:-translate-y-1
                                transition-all duration-300
                            "
                        >
                            <FaLinkedin />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/desquitasks_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="
                                w-10 h-10
                                rounded-full
                                bg-gradient-to-tr
                                from-purple-600
                                via-pink-500
                                to-orange-400
                                border border-pink-400
                                flex items-center justify-center
                                text-white
                                hover:brightness-110
                                hover:-translate-y-1
                                transition-all duration-300
                            "
                        >
                            <FaInstagram />
                        </a>

                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-8" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-xs text-gray-500 text-center sm:text-left">
                        <span className="text-pink-400">
                            © 2026 Sachylee. All Rights Reserved.
                        </span>
                    </p>

                    <p className="text-sm text-gray-400 flex items-center gap-1">
                        <span>
                            Designed & Built with
                        </span>

                        <FaHeart className="text-blue-400 text-xs" />
                    </p>

                </div>

            </div>
        </footer>
    );
}