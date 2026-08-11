import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
                fixed
                right-5
                bottom-5
                sm:right-8
                sm:bottom-8
                z-50

                w-10
                h-10
                sm:w-11
                sm:h-11

                rounded-full
                bg-pink-500
                hover:bg-blue-500
                border
                border-white/10

                flex
                items-center
                justify-center

                text-white
                cursor-pointer
                shadow-lg
                shadow-purple-500/20

                transition-all
                duration-300

                ${
                    isVisible
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                }
            `}
        >
            <FaArrowUp className="text-sm" />
        </button>
    );
}