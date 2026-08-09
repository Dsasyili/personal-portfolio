import {
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

// Ekspresi mahkota img
import projWebMAN from "../assets/images/Proj-Man.png";
import projWebMAN2 from "../assets/images/Det-EM1.png";
import projWebMAN3 from "../assets/images/Det-EM2.png";
import projWebMAN4 from "../assets/images/Det-EM3.png";
import projWebMAN5 from "../assets/images/Det-EM4.png";
import projWebMAN6 from "../assets/images/Det-EM5.png";
import projWebMAN7 from "../assets/images/Det-EM6.png";
import projWebMAN8 from "../assets/images/Det-EM7.png";
import projWebMAN9 from "../assets/images/Det-EM8.jpg";
import projWebMAN10 from "../assets/images/Det-EM9.jpg";
// Dashboard JJUP img
import dashSm from "../assets/images/Proj-WebJJUP.jpg";
import dashSm2 from "../assets/images/Det-JJUP2.png";
import dashSm3 from "../assets/images/Det-JJUP3.png";
import dashSm4 from "../assets/images/Det-JJUP4.png";
import dashSm7 from "../assets/images/Det-JJUP7.png";
import dashSm8 from "../assets/images/Det-JJUP8.jpg";
// Coffee Shop img
import webCoffee from "../assets/images/Proj-Coffee.png";
import webCoffee2 from "../assets/images/Det-CS1.png";
import webCoffee3 from "../assets/images/Det-CS2.png";
import webCoffee4 from "../assets/images/Det-CS3.jpg";
import webCoffee5 from "../assets/images/Det-CS4.jpg";
// Hewan Peliharaan img
import virtualPet from "../assets/images/Proj-pet.png";
import virtualPet2 from "../assets/images/Det-Pet2.png";
import virtualPet3 from "../assets/images/Det-Pet3.png";
import virtualPet4 from "../assets/images/Det-Pet4.png";
// CareFull img
import appCarefull from "../assets/images/Proj-carefull.png";
import appCarefull2 from "../assets/images/Det-CF1.jpg";
import appCarefull3 from "../assets/images/Det-CF2.jpg";
import appCarefull4 from "../assets/images/Det-CF3.png";
import appCarefull5 from "../assets/images/Det-CF4.png";
// Budget Boost img
import appBudget1 from "../assets/images/Det-BB1.jpg";
import appBudget2 from "../assets/images/Det-BB2.jpg";
import appBudget3 from "../assets/images/Det-BB3.jpg";
import appBudget4 from "../assets/images/Det-BB4.png";
import appBudget5 from "../assets/images/Det-BB5.png";
import appBudget6 from "../assets/images/Det-BB6.png";
import appBudget7 from "../assets/images/Proj-budgetboost.png";
// ConcerTix img
import konserTix from "../assets/images/Proj-konsertix.png";
import konserTix2 from "../assets/images/Det-CT1.jpg"
import konserTix3 from "../assets/images/Det-CT2.jpg"
import konserTix4 from "../assets/images/Det-CT3.jpg"
import konserTix5 from "../assets/images/Det-CT4.png"
// Post Story img
import postStory1 from "../assets/images/Proj-PostStory.jpg";
import postStory2 from "../assets/images/Det-PS1.jpg";
import postStory3 from "../assets/images/Det-PS2.jpg";
// Web Pasraman img
import webPasraman from "../assets/images/Proj-pasraman.png";
import webPasraman2 from "../assets/images/Det-SC1.png";
import webPasraman3 from "../assets/images/Det-SC2.png";
import webPasraman4 from "../assets/images/Det-SC3.png";
import webPasraman5 from "../assets/images/Det-SC4.png";
// Tower Defense img
import gameTower from "../assets/images/Proj-gameant.png";
import gameTower2 from "../assets/images/Det-TD1.jpg";
import gameTower3 from "../assets/images/Det-TD2.jpg";
import gameTower5 from "../assets/images/Det-TD4.jpg";
import gameTower6 from "../assets/images/Det-TD5.jpg";
import gameTower7 from "../assets/images/Det-TD6.png";

import {
    SiTailwindcss,
    SiKotlin,
    SiFirebase,
    SiGradle,
    SiXml,
} from "react-icons/si";

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
            projWebMAN2,
            projWebMAN3, projWebMAN4, projWebMAN5, projWebMAN6, projWebMAN7, projWebMAN8, projWebMAN9, projWebMAN10,
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
        gallery: [ dashSm, dashSm2, dashSm3, dashSm4, dashSm7, dashSm8,],
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
        image: appBudget7,
        description:
            "Fintech app prototype with gamification and financial education, user research and Design Thinking for Gen Z.",
        details:
            "A fintech mobile app prototype designed for Gen Z to develop better financial habits through gamification, daily challenges, goal setting, financial education, and user-centered design.",
        gallery: [
            appBudget1,
            appBudget2,
            appBudget3,
            appBudget4,
            appBudget5,
            appBudget6,
            appBudget7,
        ],
        tech: [
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
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
            appCarefull2,
            appCarefull3,
            appCarefull4,
            appCarefull5,
        ],

        tech: [
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
            {
                icon: FaLightbulb,
                name: "Design Thinking",
                color: "text-yellow-400",
            },
            {
                icon: FaPenFancy,
                name: "8 Golden Rules Design",
                color: "text-green-400",
            },
            {
                icon: FaDesktop,
                name: "HCI",
                color: "text-blue-400",
            },
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
        gallery: [konserTix, konserTix2, konserTix3, konserTix4, konserTix5, ],
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
        image: postStory1,
        description:
            "A Kotlin-based social media mobile application with Firebase, featuring post creation, image sharing, likes, saved posts, pinned posts, and profile management.",
        details:
            "A social media mobile application developed using Android Studio and Kotlin, with Firebase serving as the backend database. The application enables users to create and share posts using text captions or images with captions, interact with content through likes and unlikes, pin and save posts, and manage their profile information. The project demonstrates the implementation of core social media functionalities in a modern Android application with a focus on usability and user interaction.",
        gallery: [postStory1, postStory2, postStory3,],
        tech: [
            { icon: SiKotlin, name: "Kotlin", color: "text-purple-400" },
            { icon: SiFirebase, name: "Firebase", color: "text-orange-500" },
            {
                icon: SiGradle,
                name: "Gradle",
                color: "text-blue-400",
            },
            {
                icon: SiXml,
                name: "XML",
                color: "text-orange-400",
            },
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
        gallery: [webCoffee, webCoffee2, webCoffee3, webCoffee4, webCoffee5,],
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
        gallery: [gameTower, gameTower2, gameTower3, gameTower5, gameTower6, gameTower7, ],
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
        gallery: [virtualPet, virtualPet2, virtualPet3, virtualPet4,],
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
        gallery: [ webPasraman, webPasraman2, webPasraman3, webPasraman4, webPasraman5, ],
        tech: [
            { icon: FaPhp, name: "PHP", color: "text-indigo-400" },
            { icon: FaLaravel, name: "Laravel", color: "text-red-400" },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS",
                color: "text-cyan-400",
            },
            { icon: FaDatabase, name: "MySQL", color: "text-blue-400" },
            { icon: FaFigma, name: "Figma", color: "text-pink-500" },
        ],

        link: "https://www.figma.com/design/GXKdzrzwbaB4GRCdczOiA8/Pasraman-Sidhi-Karya-School-Website?node-id=0-1&p=f",
    },
];