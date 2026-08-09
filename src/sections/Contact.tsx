import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                py-16
                sm:py-24
                px-4
                sm:px-6
                lg:px-10
            "
        >
            <div className="max-w-5xl mx-auto w-full">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-10 sm:mb-14">

                    <p className="
                        uppercase
                        tracking-[3px]
                        text-xs
                        sm:text-sm
                        text-white-500
                        mb-3
                    ">
                        Get In Touch ✦
                    </p>

                    <h2 className="
                        text-4xl
                        sm:text-5xl
                        font-bold
                        text-blue-400
                        mb-4 animate-bounce
                    ">
                        Contact Me
                    </h2>

                    <p className="
                        text-gray-400
                        text-sm
                        sm:text-base
                        max-w-2xl
                        mx-auto
                        leading-7
                        px-2
                    ">
                        Have a project in mind, want to collaborate, or simply
                        want to say hello? I&apos;d love to hear from you.
                    </p>

                </div>


                {/* ================= CONTACT PANEL ================= */}
                <div
                    className="
                        max-w-4xl
                        mx-auto
                        relative
                        overflow-hidden
                        bg-white/[0.04]
                        backdrop-blur-xl
                        border
                        border-white/10
                        rounded-3xl
                        p-5
                        sm:p-8
                        lg:p-10
                    "
                >

                    {/* Decorative Glow */}
                    <div className="
                        absolute
                        -top-20
                        -right-20
                        w-48
                        h-48
                        bg-purple-500/10
                        rounded-full
                        blur-3xl
                        pointer-events-none
                    " />

                    <div className="
                        absolute
                        -bottom-20
                        -left-20
                        w-48
                        h-48
                        bg-blue-500/10
                        rounded-full
                        blur-3xl
                        pointer-events-none
                    " />


                    {/* ================= INFO ================= */}
                    <div className="
                        relative
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-4
                    ">

                        {/* Email */}
                        <a
                            href="mailto:desquitasasyilii@gmail.com"
                            className="
                                group
                                flex
                                items-center
                                gap-4
                                p-4
                                rounded-2xl
                                bg-white/[0.04]
                                border
                                border-white/10
                                hover:border-purple-500/40
                                hover:bg-purple-500/10
                                transition-all
                                duration-300
                            "
                        >
                            <div className="
                                w-11
                                h-11
                                sm:w-12
                                sm:h-12
                                rounded-xl
                                bg-purple-500/10
                                border
                                border-purple-500/20
                                flex
                                items-center
                                justify-center
                                flex-shrink-0
                                group-hover:scale-105
                                transition
                            ">
                                <FaEnvelope className="
                                    text-purple-400
                                    text-base
                                    sm:text-lg
                                " />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 mb-1">
                                    Email
                                </p>

                                <p className="
                                    text-sm
                                    sm:text-base
                                    font-medium
                                    text-gray-200
                                    break-all
                                    group-hover:text-purple-300
                                    transition
                                ">
                                    desquitasasyilii@gmail.com
                                </p>
                            </div>
                        </a>


                        {/* Location */}
                        <div
                            className="
                                flex
                                items-center
                                gap-4
                                p-4
                                rounded-2xl
                                bg-white/[0.04]
                                border
                                border-white/10
                            "
                        >
                            <div className="
                                w-11
                                h-11
                                sm:w-12
                                sm:h-12
                                rounded-xl
                                bg-blue-500/10
                                border
                                border-blue-500/20
                                flex
                                items-center
                                justify-center
                                flex-shrink-0
                            ">
                                <FaMapMarkerAlt className="
                                    text-blue-400
                                    text-base
                                    sm:text-lg
                                " />
                            </div>

                            <div>
                                <p className="text-xs text-gray-500 mb-1">
                                    Location
                                </p>

                                <p className="
                                    text-sm
                                    sm:text-base
                                    font-medium
                                    text-gray-200
                                ">
                                    Tangerang, Indonesia
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* ================= DIVIDER ================= */}
                    <div className="
                        relative
                        h-px
                        bg-white/10
                        my-7
                    " />


                    {/* ================= SOCIAL ================= */}
                    <div className="relative text-center">

                        <p className="
                            text-xs
                            uppercase
                            tracking-[2px]
                            text-white-500
                            mb-4
                        ">
                            Connect with me
                        </p>

                        <div className="flex justify-center gap-3">

                            {/* GitHub */}
                            <a
                                href="https://github.com/Dsasyili"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="
                                    w-11
                                    h-11
                                    sm:w-12
                                    sm:h-12
                                    rounded-full
                                    bg-white/[0.05]
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-300
                                    hover:bg-purple-500
                                    hover:border-purple-500
                                    hover:text-white
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaGithub size={18} />
                            </a>


                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/desquita-sasyili/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    w-11
                                    h-11
                                    sm:w-12
                                    sm:h-12
                                    rounded-full
                                    bg-white/[0.05]
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-300
                                    hover:bg-blue-500
                                    hover:border-blue-500
                                    hover:text-white
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaLinkedin size={18} />
                            </a>


                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/desquitasks_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="
                                    w-11
                                    h-11
                                    sm:w-12
                                    sm:h-12
                                    rounded-full
                                    bg-white/[0.05]
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-300
                                    hover:bg-pink-500
                                    hover:border-pink-500
                                    hover:text-white
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                "
                            >
                                <FaInstagram size={18} />
                            </a>

                        </div>

                    </div>


                    {/* ================= CTA ================= */}
                    <div className="
                        relative
                        mt-7
                        sm:mt-8
                        text-center
                    ">
                        <a
                            href="mailto:desquitasasyilii@gmail.com"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                w-full
                                sm:w-auto
                                px-6
                                py-3
                                rounded-xl
                                bg-purple-500
                                hover:bg-pink-500
                                hover:scale-[1.02]
                                transition-all
                                duration-300
                                text-sm
                                font-semibold
                                text-white
                            "
                        >
                            <FaEnvelope size={14} />
                            Let&apos;s Work Together
                            <FaArrowRight
                                size={12}
                                className="ml-1"
                            />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}