import {
  LuUser,
  LuGraduationCap,
  LuCode,
  LuMail,
  LuMapPin,
} from "react-icons/lu"

import {
    FaDownload,
    FaArrowRight
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <p className="uppercase tracking-[3px] text-sm md:text-base mb-3">
            Who I Am (‘•.•’)
          </p>

          <h2 className="text-3xl text-blue-400 sm:text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </div>


        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">


          {/* Left */}
          <div className="text-center md:text-left">

            <h3
            className="
                text-2xl
                md:text-3xl
                font-bold
                mb-3
                leading-snug
                animate-text-gradient
                animate-text-float
            "
            >
            Hey, you made it here (˶˃ ᵕ ˂˶) .ᐟ
            </h3>

            <div
            className="mt-3 mb-5 h-[3px] w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse
                mx-auto
                md:mx-0
            "></div>

            <p className="text-gray-400 leading-7 md:leading-8 mb-5 text-sm sm:text-base">
              I am a Computer Science graduate with a strong passion for
              building modern, responsive, and user-friendly web applications.
              I enjoy transforming ideas into engaging digital experiences
              through clean code, thoughtful design, and continuous learning.
            </p>

            <p className="text-gray-400 leading-7 md:leading-8 text-sm sm:text-base">
              I enjoy turning ideas into modern, interactive interfaces—combining frontend development with UI/UX design to 
              create digital experiences that feel smooth, intuitive, and easy to enjoy (੭˃ᴗ˂)੭
            </p>

          </div>

            {/* Right */}
            <div
                className="
                    bg-slate-900
                    rounded-2xl
                    p-5 sm:p-6 md:p-8
                    border border-slate-800
                "
            >
                <div className="space-y-4">

                    {/* Name */}
                    <div className="flex justify-between items-center gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-600/15 flex items-center justify-center">
                                <LuUser className="text-purple-400 text-base sm:text-lg" />
                            </div>

                            <span className="text-xs sm:text-sm text-gray-400">
                                Name
                            </span>
                        </div>

                        <span className="font-medium text-xs sm:text-sm text-right">
                            Desquita Sasyili
                        </span>
                    </div>


                    {/* Education */}
                    <div className="flex justify-between items-center gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/15 flex items-center justify-center">
                                <LuGraduationCap className="text-blue-400 text-base sm:text-lg" />
                            </div>

                            <span className="text-xs sm:text-sm text-gray-400">
                                Education
                            </span>
                        </div>

                        <span className="font-medium text-xs sm:text-sm text-right">
                            Bachelor of Computer Science
                        </span>
                    </div>


                    {/* Focus */}
                    <div className="flex justify-between items-center gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-600/15 flex items-center justify-center">
                                <LuCode className="text-pink-400 text-base sm:text-lg" />
                            </div>

                            <span className="text-xs sm:text-sm text-gray-400">
                                Focus
                            </span>
                        </div>

                        <span className="font-medium text-xs sm:text-sm text-right">
                            Frontend Development
                        </span>
                    </div>


                    {/* Email */}
                    <div className="flex justify-between items-center gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-600/15 flex items-center justify-center">
                                <LuMail className="text-cyan-400 text-base sm:text-lg" />
                            </div>

                            <span className="text-xs sm:text-sm text-gray-400">
                                Email
                            </span>
                        </div>

                        <span className="font-medium text-xs sm:text-sm text-right break-all">
                            desquitasasyilii@gmail.com
                        </span>
                    </div>


                    {/* Location */}
                    <div className="flex justify-between items-center gap-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600/15 flex items-center justify-center">
                                <LuMapPin className="text-emerald-400 text-base sm:text-lg" />
                            </div>

                            <span className="text-xs sm:text-sm text-gray-400">
                                Location
                            </span>
                        </div>

                        <span className="font-medium text-xs sm:text-sm">
                            Tangerang, Indonesia
                        </span>
                    </div>
                </div>


                {/* Buttons */}
                <div className="mt-5 flex flex-row justify-end gap-2 sm:gap-3">

                    {/* Download CV */}
                    <a
                        href="/CV-Resume-DesquitaSasyili.pdf"
                        download="CV-Resume-DesquitaSasyili.pdf"
                        className="
                            flex-1
                            md:flex-none
                            bg-purple-500
                            hover:bg-pink-500
                            transition-all
                            duration-300
                            text-white
                            text-[11px]
                            sm:text-sm
                            font-semibold
                            py-2.5
                            px-2.5
                            sm:px-5
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            sm:gap-2
                            hover:scale-[1.02]
                            cursor-pointer
                        "
                    >
                        <FaDownload size={13} />
                        Download CV
                    </a>


                    {/* See My Work */}
                    <a
                        href="#projects"
                        className="
                            flex-1
                            md:flex-none
                            border
                            border-purple-500
                            text-purple-400
                            hover:bg-pink-500
                            hover:border-pink-500
                            hover:text-white
                            transition-all
                            duration-300
                            text-[11px]
                            sm:text-sm
                            font-semibold
                            py-2.5
                            px-2.5
                            sm:px-5
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            sm:gap-2
                            hover:scale-[1.02]
                        "
                    >
                        See My Work
                        <FaArrowRight size={12} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}