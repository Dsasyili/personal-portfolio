
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPhp,
    FaBootstrap,
    FaFigma,
    FaGithub,
    FaGitAlt,
    FaAndroid,
    FaCode,
    FaPaintBrush,
    FaDesktop,
    FaVideo,
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiNextdotjs,
    SiVite,
    SiLaravel,
    SiKotlin,
    SiUnity,
    SiNodedotjs,
    SiPython,
    SiJupyter,
    SiExpress,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Development",
        description:
            "Building responsive and interactive web interfaces.",
        skills: [
            {
                name: "HTML",
                icon: FaHtml5,
                color: "text-orange-500",
            },
            {
                name: "CSS",
                icon: FaCss3Alt,
                color: "text-blue-500",
            },
            {
                name: "JavaScript",
                icon: FaJs,
                color: "text-yellow-400",
            },
            {
                name: "React",
                icon: FaReact,
                color: "text-cyan-400",
            },
            {
                name: "Vite",
                icon: SiVite,
                color: "text-purple-400",
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-400",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "text-cyan-400",
            },
            {
                name: "Bootstrap",
                icon: FaBootstrap,
                color: "text-purple-500",
            },
            {
                name: "Next.js",
                icon: SiNextdotjs,
                color: "text-white",
            },
        ],
    },

    {
        title: "Backend & Database",
        description:
            "Developing web applications and managing application data.",
        skills: [
            {
                name: "PHP",
                icon: FaPhp,
                color: "text-indigo-400",
            },
            {
                name: "Laravel",
                icon: SiLaravel,
                color: "text-red-500",
            },
            {
                name: "Node.js",
                icon: SiNodedotjs,
                color: "text-green-500",
            },
            {
                name: "Express.js",
                icon: SiExpress,
                color: "text-gray-300",
            },
            {
                name: "MySQL",
                icon: SiMysql,
                color: "text-blue-400",
            },
        ],
    },

    {
        title: "Programming & Data",
        description:
            "Working with programming, data analysis, and AI-related projects.",
        skills: [
             {
                name: "C",
                icon: FaCode,
                color: "text-blue-400",
            },
            {
                name: "Python",
                icon: SiPython,
                color: "text-yellow-400",
            },
            {
                name: "Jupyter Notebook",
                icon: SiJupyter,
                color: "text-orange-500",
            },
        ],
    },

    {
        title: "UI/UX Design & Editing",
        description:
            "Designing intuitive interfaces and user experiences.",
        skills: [
            {
                name: "Figma",
                icon: FaFigma,
                color: "text-pink-500",
            },
            {
                name: "Canva",
                icon: FaPaintBrush,
                color: "text-cyan-400",
            },
            {
            name: "CapCut",
                icon: FaVideo,
                color: "text-gray-300",
            },
        ],
    },

    {
        title: "Mobile & Game Development",
        description:
            "Creating mobile applications and interactive experiences.",
        skills: [
            {
                name: "Android Studio",
                icon: FaAndroid,
                color: "text-green-500",
            },
            {
                name: "Kotlin",
                icon: SiKotlin,
                color: "text-purple-400",
            },
            {
                name: "Unity",
                icon: SiUnity,
                color: "text-gray-300",
            },
            {
                name: "C#",
                icon: FaCode,
                color: "text-purple-400",
            },
        ],
    },

      {
        title: "Tools & Software",
        description:
            "Tools used for development, collaboration, and productivity.",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                color: "text-orange-500",
            },
            {
                name: "GitHub",
                icon: FaGithub,
                color: "text-white",
            },
            {
                name: "Visual Studio Code",
                icon: FaCode,
                color: "text-blue-400",
            },
            {
                name: "Microsoft Office",
                icon: FaDesktop,
                color: "text-blue-500",
            },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                min-h-screen
                py-16
                px-6
                lg:px-10
                flex
                items-center
            "
        >
            <div className="max-w-[1200px] w-full mx-auto">

                {/* Title */}
                <div className="text-center mb-14">

                    <p
                        className="
                            uppercase
                            tracking-[3px]
                            text-sm
                            text-white-400
                            mb-3
                        "
                    >
                        What I Work With ๋࣭ ⭑✮💻₊ ⊹
                    </p>

                    <h2
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            font-bold
                            text-blue-400
                        "
                    >
                        Skills
                    </h2>

                    <p
                        className="
                            max-w-2xl
                            mx-auto
                            mt-5
                            text-gray-400
                            leading-7
                            text-sm
                            sm:text-base
                        "
                    >
                        A collection of technologies and tools I use to
                        develop websites, applications, and digital
                        experiences.
                    </p>

                </div>

                {/* Skill Categories */}
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-6
                    "
                >

                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="
                                bg-white/5
                                backdrop-blur-md
                                border
                                border-white/10
                                rounded-2xl
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-white/10
                            "
                        >

                            {/* Category Header */}
                            <div className="mb-5">

                                <h3
                                    className="
                                        text-lg
                                        sm:text-xl
                                        font-semibold
                                        mb-2
                                    "
                                >
                                    {category.title}
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-gray-400
                                        leading-6
                                    "
                                >
                                    {category.description}
                                </p>

                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">

                                {category.skills.map(
                                    (skill, skillIndex) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <div
                                                key={skillIndex}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    px-3
                                                    py-2
                                                    rounded-xl
                                                    bg-white/5
                                                    border
                                                    border-white/10
                                                    transition
                                                    duration-300
                                                    hover:bg-white/10
                                                "
                                            >

                                                <SkillIcon
                                                    className={`
                                                        text-lg
                                                        ${skill.color}
                                                    `}
                                                />

                                                <span
                                                    className="
                                                        text-xs
                                                        sm:text-sm
                                                        text-gray-300
                                                    "
                                                >
                                                    {skill.name}
                                                </span>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

