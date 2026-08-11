import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profile from "../assets/images/hero_img1.png";

export default function Hero() {
    const roles = [
        "Web Developer",
        "Frontend Developer",
        "UI/UX Designer",
    ];

    const greetings = [
      "Hello",        // English 🇬🇧
      "Hola",         // Spanish 🇪🇸
      "Bonjour",      // French 🇫🇷
      "Hai",         // Indonesian 🇮🇩
      "Ciao",         // Italian 🇮🇹
      "Olá",          // Portuguese 🇵🇹
      "Konnichiwa",   // Japanese 🇯🇵
      "Annyeong", // Korean 🇰🇷
      "Ni Hao",       // Chinese 🇨🇳
      "مرحبا",        // Arabic 🇸🇦
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Greeting animation
    const [greetingIndex, setGreetingIndex] = useState(0);

    // =========================
    // Typing Role Animation
    // =========================
    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 60 : 50;
        const pauseTime = 1000;

        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setText((prev) =>
                    isDeleting
                        ? currentRole.substring(0, prev.length - 1)
                        : currentRole.substring(0, prev.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);


    // =========================
    // Greeting Animation
    // =========================
    useEffect(() => {
      const interval = setInterval(() => {
          setGreetingIndex(
              (prev) => (prev + 1) % greetings.length
          );
      },500);

      return () => clearInterval(interval);
    }, []);


    return (
        <section className="min-h-[85vh] flex items-center py-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div className="order-2 md:order-1 text-center md:text-left">

                    {/* Greeting */}
                    <div className="h-8 mb-3">
                        <p className="text-purple-400 font-bold text-lg">
                            {greetings[greetingIndex]}, I'm
                        </p>
                    </div>

                    {/* Name */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-shine">
                        Desquita Sasyili
                    </h1>


                    {/* Typing Role */}
                    <h2 className="text-xl md:text-2xl text-gray-300 mt-4 h-10 flex items-center justify-center md:justify-start">
                        <span>{text}</span>

                        <span className="ml-1 text-pink-500 animate-pulse">
                            |
                        </span>
                    </h2>


                    {/* Description */}
                    <p className="mt-8 text-[14px] md:text-base leading-6 md:leading-8 max-w-xl mx-auto md:mx-0 text-gray-400">
                        As a Web Developer, Frontend Developer, and UI/UX Designer,
                        I transform ideas into modern digital products by combining
                        clean code, responsive interfaces, and user-centered design
                        to create engaging and impactful web experiences.
                    </p>


                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-3 mt-8 flex-wrap">

                        {/* Let's Know Me */}
                        <a
                            href="#about"
                            className="
                                flex
                                items-center
                                gap-2
                                bg-purple-500
                                text-white
                                px-7
                                py-3
                                rounded-full
                                font-semibold
                                hover:bg-pink-500
                                hover:scale-105
                                transition-all
                                duration-300
                                animate-bounce
                            "
                        >
                            <span>Let's Know Me 👀</span>
                        </a>


                        {/* GitHub */}
                        <a
                            href="https://github.com/Dsasyili"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
                                w-12
                                h-12
                                rounded-full
                                border
                                border-gray-600
                                flex
                                items-center
                                justify-center
                                text-white
                                hover:bg-blue-500
                                hover:border-blue-500
                                hover:text-white
                                transition-all
                                duration-300
                            "
                        >
                            <FaGithub size={20} />
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/desquita-sasyili/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="
                                w-12
                                h-12
                                rounded-full
                                border
                                border-gray-600
                                flex
                                items-center
                                justify-center
                                text-white
                                hover:bg-blue-400
                                hover:border-blue-400
                                hover:text-white
                                transition-all
                                duration-300
                            "
                        >
                            <FaLinkedin size={20} />
                        </a>

                    </div>
                </div>

        {/* Photo */}
            <div className="order-1 md:order-2 flex justify-center mt-2">
                <div className="relative animate-floating">

                    {/* Dashed Ring */}
                    <div
                    className="
                        absolute
                        -inset-3
                        rounded-full
                        border-[3px]
                        border-dashed
                        border-pink-500
                        animate-ring
                    "
                    />

                    {/* Second Ring */}
                    <div
                    className="
                        absolute
                        -inset-6
                        rounded-full
                        border
                        border-pink-400/40
                    "
                    />

                    {/* Image */}
                    <div className="relative w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-slate-800">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    </div>

                </div>
            </div>
      </div>
    </section>
  );
}