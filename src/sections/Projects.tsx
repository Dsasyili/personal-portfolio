import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
    FaChevronLeft,
    FaChevronRight,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaPhp,
    FaBootstrap,
    FaFigma,
    FaWhatsapp,
    FaLightbulb,
    FaJs,
    FaDatabase,
    FaBolt,
    FaUnity,
    FaCode,
    FaLaravel,
    FaPenFancy,
    FaAndroid,
    FaEnvelope,
    FaHandshake,
    FaDesktop,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projWebMAN from "../assets/images/Proj-Man.png";
import dashSm from "../assets/images/Proj-WebJJUP.jpg";
import webCoffee from "../assets/images/Proj-Coffee.png";
import virtualPet from "../assets/images/Proj-pet.png";
import appCarefull from "../assets/images/Proj-Carefull.png";
import appBudget from "../assets/images/Proj-budgetboost.png";
import konserTix from "../assets/images/Proj-konsertix.png";
import postStory from "../assets/images/Proj-PostStory.jpg";
import webPasraman from "../assets/images/Proj-pasraman.png";
import gameTower from "../assets/images/Proj-gameant.png";

import { SiKotlin, SiTailwindcss, SiFirebase, SiGradle, SiXml, } from "react-icons/si";

export const projects = [
    {
        id: "recommended-extracurricular",
        title: "Website Recommended for Extracurricular Activities",
        image: projWebMAN,
        description:
            "Web application using AI-based recommendation system with forward chaining algorithm.",
        details:
            "A web application that helps students find suitable extracurricular activities through an AI-based recommendation system using the Forward Chaining algorithm.",
        gallery: [
            projWebMAN,
        ],
        link: "https://ekspresimahkota-pi.vercel.app/",
        tech: [
            { icon: FaReact, name: "React", color: "text-cyan-400" },
            { icon: FaBolt, name: "Vite", color: "text-purple-400" },
            { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
            { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaDatabase, name: "MySQL", color: "text-blue-400" },
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
        ],
    },


    {
        id: "dashboard-management",
        title: "Website Dashboard Management System",
        image: dashSm,
        description:
            "Dashboard system for managing data and monitoring network infrastructure, with CRUD functionality.",
        details:
            "A network infrastructure management system designed to manage corporate infrastructure data and PKS documents. The system includes CRUD functionality, document management, data visualization, and automated email notifications.",
        gallery: [
            dashSm,
            // dashSm2,
            // dashSm3,
        ],
        tech: [
            { icon: FaPhp, name: "PHP", color: "text-indigo-400" },
            { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
            { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaDatabase, name: "MySQL", color: "text-blue-400" },
            { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
            { icon: FaEnvelope, name: "PHPMailer", color: "text-orange-500" },
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
        ],
        link: "https://jejaringultraprima.com",
    },

    {
        id: "budget-boost",
        title: "Budget Boost Mobile App Prototype",
        video: "https://www.youtube.com/watch?v=9PBaxYkbZ4s",
        description:
            "Fintech app prototype with gamification and financial education, user research and Design Thinking for Gen Z.",
        details:
            "A fintech mobile app prototype designed for Gen Z to develop better financial habits through gamification, daily challenges, goal setting, financial education, and user-centered design.",
        gallery: [
            appBudget,
            // appBudget2,
            // appBudget3,
        ],
        tech: [
            {
                icon: FaFigma,
                name: "Figma",
                color: "text-pink-500",
            },
            {
                icon: FaLightbulb,
                name: "Design Thinking",
                color: "text-yellow-400",
            },
            {
                icon: FaHandshake,
                name: "Technopreneurship",
                color: "text-blue-400",
            },
        ],
        link: "https://www.figma.com/proto/tA4u2O3UixolQHLQjBpCn2/Budget-Boost---Techno?node-id=201-516",
    },
    {
        id: "carefull",
        title: "CareFull Mobile App Prototype",
        image: appCarefull,
        description:
            "Mobile app prototype designed to provide a modern and user-friendly experience.",
        details:
            "A mobile application prototype focused on creating a modern, intuitive, and user-friendly experience. The project applies user-centered design principles to improve usability and interaction.",
        gallery: [
            appCarefull,
            // appCarefull2,
            // appCarefull3,
        ],
        tech: [
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
            { icon: FaDesktop, name: "HCI", color: "text-blue-400",},
            { icon: FaLightbulb, name: "Design Thinking", color: "text-yellow-400",},
            { icon: FaPenFancy, name: "8 Golden Rules Design", color: "text-green-400",},
        ],
        link: "https://www.figma.com/proto/WMNH83dnSyJ9xR2DG7qBpp/Carefull-Prototype",
    },

    {
        id: "concertix",
        title: "ConcerTix Mobile App Prototype",
        image: konserTix,
        description:
            "Interactive concert ticketing mobile app developed with Android Studio, designed for a seamless ticket booking experience.",
        details:
            "An interactive concert ticketing mobile application designed to provide a seamless experience for discovering concerts, selecting tickets, and managing the booking process.",
        gallery: [
            konserTix,
            // konserTix2,
            // konserTix3,
        ],
        tech: [
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
            { icon: SiKotlin, name: "Kotlin", color: "text-purple-400" },
            { icon: SiXml, name: "XML", color: "text-orange-400",},
            { icon: SiFirebase, name: "Firebase", color: "text-orange-500" },
            { icon: FaAndroid, name: "Android Studio", color: "text-green-500" },
        ],
        link: "https://www.figma.com/proto/YXo0gE7CXzsLCLgryWoHEe/Prototype-ConcerTix---MAP",
    },

    {
        id: "posstory",
        title: "Mobile Application Post Story",
        image: postStory,
        description:
            "A Social Media mobile app with Firebase for creating and sharing text and image posts, liking, saving posts, and pin post.",
        details:
            "A social media mobile application developed with Kotlin and Firebase, allowing users to create and share posts with text and images, interact through likes, save posts, and manage their profiles.",
        gallery: [postStory,],
        tech: [
            { icon: SiKotlin, name: "Kotlin", color: "text-purple-400" },
            { icon: SiFirebase, name: "Firebase", color: "text-orange-500" },
            { icon: SiGradle, name: "Gradle", color: "text-blue-400",},
            { icon: SiXml, name: "XML", color: "text-orange-400",},
            { icon: FaAndroid, name: "Android Studio", color: "text-green-500" },
        ],
        link: "#",
    },

    {
        id: "coffee-shop",
        title: "Website Coffee Shop",
        image: webCoffee,
        description:
            "Interactive coffee shop website where users can explore products and place orders through WhatsApp.",
        details:
            "An interactive coffee shop website that allows users to explore products, view menu information, and place orders directly through WhatsApp integration.",
        gallery: [
            webCoffee,
        ],
        tech: [
            { icon: FaReact, name: "React", color: "text-cyan-400" },
            { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
            { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
            { icon: FaWhatsapp, name: "WhatsApp API", color: "text-green-500" },
        ],
        link: "https://curio-brew-project-uas.vercel.app/",
    },

    {
        id: "ant-tower-defense",
        title: "Game Ant Tower Defense",
        image: gameTower,
        description:
            "Tower defense game featuring procedural map generation, unique towers, and endless survival gameplay.",
        details:
            "A tower defense game featuring procedural map generation, unique tower mechanics, and endless survival gameplay. Players must strategically place towers to defend against incoming enemies.",
        gallery: [
            gameTower,
            // gameTower2,
            // gameTower3,
        ],
        tech: [
            { icon: FaUnity, name: "Unity", color: "text-gray-300" },
            { icon: FaCode, name: "C#", color: "text-purple-400" },
        ],
        link: "https://github.com/Sagisak/CGA_KelasA_Grup2_UAS",
    },

    {
        id: "virtual-pet",
        title: "Website Game Hewan Peliharaan",
        image: virtualPet,
        description:
            "Interactive virtual pet simulation website where users can take care of pets.",
        details:
            "An interactive virtual pet simulation where users can take care of virtual pets by managing their needs and interacting with them through various activities.",
        gallery: [
            virtualPet,
            // virtualPet2,
            // virtualPet3,
        ],
        tech: [
            { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
            { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
        ],
        link: "https://github.com/Dsasyili/PTI-UMNGotcha-Group5",
    },

    {
        id: "pasraman-school",
        title: "Website Sekolah Pura Dharma Sidhi Karya Ciledug",
        image: webPasraman,
        description:
            "School website designed to provide information about school activities, programs, and services.",
        details:
            "A school website designed to provide information about school activities, programs, services, and other important information through a modern and responsive interface.",
        gallery: [
            webPasraman,
            // webPasraman2,
            // webPasraman3,
        ],
        tech: [
            { icon: FaPhp, name: "PHP", color: "text-indigo-400" },
            { icon: FaLaravel, name: "Laravel", color: "text-red-400" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400",},
            { icon: FaDatabase, name: "MySQL", color: "text-blue-400" },
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
        ],
        link: "https://www.figma.com/design/GXKdzrzwbaB4GRCdczOiA8/Pasraman-Sidhi-Karya-School-Website?node-id=0-1&p=f",
    },
];

export default function Projects() {
    const swiperRef = useRef<any>(null);
    const [mobilePage, setMobilePage] = useState(0);
    const cardsPerPage = 4;
    const totalPages = Math.ceil(projects.length / cardsPerPage);
    const visibleProjects = projects.slice(
        mobilePage * cardsPerPage,
        mobilePage * cardsPerPage + cardsPerPage
    );

    return (
    <section
        id="projects"
        className="
            min-h-screen
            py-12
            px-6
            lg:px-10
        "
        >

        <div className="max-w-[1600px] mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
                <p className="uppercase tracking-[3px] text-sm mb-3">
                    Things I've Created (˶ˆᗜˆ˵)💻
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-5">
                    Projects
                </h2>

                <p className="
                            max-w-2xl
                            mx-auto
                            mt-5
                            text-gray-400
                            leading-7
                            text-sm
                            sm:text-base
                        ">
                    A collection of projects showcasing my skills, creativity, and experience
                    in building digital experiences.
                </p>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <div className="grid grid-cols-2 gap-4">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            className="
                                min-h-[330px]
                                flex
                                flex-col
                                bg-white/10
                                backdrop-blur-md
                                rounded-2xl
                                overflow-hidden
                                border
                                border-white/10
                            "
                        >

                            {/* Image */}
                            <div className="h-36 overflow-hidden">
                                {project.video ? (
                                    <iframe
                                        src={project.video.replace(
                                            "https://www.youtube.com/watch?v=",
                                            "https://www.youtube.com/embed/"
                                        )}
                                        title={project.title}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            pointer-events-none
                                        "
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                        "
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-4">

                                {/* Title */}
                                <h3
                                    className="
                                        font-semibold
                                        text-sm
                                        mb-2
                                        line-clamp-2
                                    "
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        text-xs
                                        text-gray-400
                                        line-clamp-3
                                        mb-3
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Tech */}
                                {project.tech && (
                                    <div className="flex items-center gap-1 mb-3 flex-wrap">
                                        {project.tech.map((tech, techIndex) => {
                                            const TechIcon = tech.icon;

                                            return (
                                                <div
                                                    key={techIndex}
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-1
                                                        px-1.5
                                                        py-0.5
                                                        rounded-full
                                                        bg-white/10
                                                        border
                                                        border-white/10
                                                    "
                                                >
                                                    <TechIcon
                                                        className={`
                                                            text-[9px]
                                                            ${tech.color}
                                                        `}
                                                    />

                                                    <span
                                                        className="
                                                            text-[9px]
                                                            text-gray-300
                                                        "
                                                    >
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Project Buttons */}
                                <div className="mt-auto flex flex-col gap-2">

                                    {/* Lihat Detail */}
                                    <a
                                        href={`/detail-project/${project.id}`}
                                        className="
                                            w-full
                                            text-center
                                            py-2.5
                                            rounded-xl
                                            border
                                            border-pink-500
                                            text-pink-400
                                            hover:bg-pink-500
                                            hover:border-pink-500
                                            hover:text-white
                                            transition
                                            text-xs
                                            font-medium
                                            cursor-pointer
                                        "
                                    >
                                        View Detail
                                    </a>

                                    {/* View Project */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            w-full
                                            text-center
                                            py-2.5
                                            rounded-xl
                                            bg-purple-600
                                            hover:bg-purple-500
                                            transition
                                            text-xs
                                            font-medium
                                            cursor-pointer
                                        "
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div
                    className="
                        flex
                        justify-center
                        items-center
                        gap-4
                        mt-6
                    "
                >
                    {/* Previous */}
                    <button
                        onClick={() =>
                            setMobilePage((prev) =>
                                prev === 0
                                    ? totalPages - 1
                                    : prev - 1
                            )
                        }
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            hover:bg-purple-600
                            transition
                            cursor-pointer
                        "
                    >
                        <FaChevronLeft className="text-sm" />
                    </button>

                    {/* Page */}
                    <span className="text-sm text-gray-300">
                        {mobilePage + 1} / {totalPages}
                    </span>

                    {/* Next */}
                    <button
                        onClick={() =>
                            setMobilePage((prev) =>
                                prev === totalPages - 1
                                    ? 0
                                    : prev + 1
                            )
                        }
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            hover:bg-purple-600
                            transition
                            cursor-pointer
                        "
                    >
                        <FaChevronRight className="text-sm" />
                    </button>
                </div>
            </div>


            {/* Desktop */}
            <div className="hidden md:flex relative items-center px-20">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="
                        absolute
                        -left-2
                        z-20
                        w-12
                        h-12
                        rounded-full
                        bg-white/10
                        backdrop-blur-md
                        hover:bg-purple-600
                        transition
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                    "
                    >
                    <FaChevronLeft />
                </button>

                <Swiper
                    modules={[Pagination]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        pagination={{
                        clickable: true,
                        }}

                        spaceBetween={30}

                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },

                            1280: {
                                slidesPerView: 4,
                            },
                        }}

                        className="project-slider !pb-12"
                    >

                    {projects.map((project, index) => (
                    <SwiperSlide
                        key={index}
                            className="!h-auto"
                        >
                        <div
                            className="
                                min-h-[390px]
                                h-full
                                flex
                                flex-col
                                bg-white/8
                                backdrop-blur-md
                                rounded-2xl
                                overflow-hidden
                                border
                                border-white/10
                                transition-all
                                duration-300
                                hover:-translate-y-2
                            "
                        >

                            {/* Image */}
                            <div
                                className="
                                h-48
                                flex-shrink-0
                                overflow-hidden
                                "
                            >
                               {project.video ? (
                                    <div className="aspect-video w-full overflow-hidden rounded-xl">
                                        <iframe
                                            src="https://www.youtube.com/embed/9PBaxYkbZ4s"
                                            title={project.title}
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    flex-1
                                    p-5
                                    "
                                >
                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        mb-3
                                        h-14
                                        line-clamp-2
                                    "
                                    >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                                        text-gray-400
                                        text-sm
                                        leading-6
                                        mb-5
                                        h-20
                                        line-clamp-3
                                    "
                                    >
                                    {project.description}
                                </p>

                                {/* Desktop */}
                                {project.tech && (
                                    <div className="flex items-center gap-1.5 mb-5 flex-wrap">
                                        {project.tech.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    px-2.5
                                                    py-1.5
                                                    rounded-full
                                                    bg-white/10
                                                    border
                                                    border-white/10
                                                    transition
                                                    hover:bg-white/15
                                                "
                                            >
                                                <tech.icon className={`text-sm ${tech.color}`} />

                                                <span className="text-xs text-gray-300">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-auto flex gap-2">

                                    {/* Lihat Detail */}
                                    <a
                                        href={`/detail-project/${project.id}`}
                                        className="
                                            flex-1
                                            text-center
                                            py-2.5
                                            rounded-xl
                                            border
                                            border-pink-500
                                            text-pink-400
                                            hover:bg-pink-500
                                            hover:border-pink-500
                                            hover:text-white
                                            transition
                                            text-sm
                                            font-medium
                                            cursor-pointer
                                        "
                                    >
                                        View Detail
                                    </a>

                                    {/* View Project */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex-1
                                            text-center
                                            py-2.5
                                            rounded-xl
                                            bg-purple-600
                                            hover:bg-purple-500
                                            transition
                                            text-sm
                                            font-medium
                                            cursor-pointer
                                        "
                                    >
                                        View Project
                                    </a>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="
                        absolute
                        -right-2
                        z-20
                        w-12
                        h-12
                        rounded-full
                        bg-white/10
                        backdrop-blur-md
                        hover:bg-purple-600
                        transition
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                    "
                    >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    </section>
  );
}