import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import sertifDataScience from "../assets/images/Sertif-DataSciene.png";
import sertifSql from "../assets/images/Sertif-SQL.png";
import sertifHcia from "../assets/images/Sertif-HCIA.png";
import sertifPython from "../assets/images/Sertif-Python.png";
import sertifPython2 from "../assets/images/Sertif-Python2.png";
import sertifJava from "../assets/images/Sertif-Javascript.png";
import sertifCss from "../assets/images/Sertif-css.png";
import sertifRoci from "../assets/images/Sertif-ROCI.png";
import sertifPos1 from "../assets/images/Sertif-Poster1.png";
import sertifPos2 from "../assets/images/Sertif-Poster2.png";
import sertifSwim from "../assets/images/Sertif-Swim.jpg";

export default function Resume() {
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("education");
  const tabs = [
    {
      id: "education",
      label: "Education 🎓",
    },
    {
      id: "experience",
      label: "Experience 🎯",
    },
    {
      id: "certificate",
      label: "Certificate 📰",
    },
  ];

  const certificates = [
  {
    image: sertifDataScience,
    title: "Data Science with Python",
    desc: "DQLAB AI-Powered Learning",
  },
  {
    image: sertifSql,
    title: "Guide to Learn SQL with AI at DQLab",
    desc: "DQLAB AI-Powered Learning",
  },
  {
    image: sertifHcia,
    title: "HCIA-AI V3.5 Certification",
    desc: "Huawei Certification - Artificial Intelligence Fundamentals",
  },
  {
    image: sertifRoci,
    title: "Coding and Robotics Workshop",
    desc: "ROCI (Robotic Organizing Committee Indonesia) and University of Bandar Lampung (UBL)",
  },
  {
    image: sertifPython,
    title: "Introduction to Python",
    desc: "Sololearn Course Certificate",
  },
  {
    image: sertifPython2,
    title: "Python Intermediate",
    desc: "Sololearn Course Certificate",
  },
  {
    image: sertifPos1,
    title: "Online Poster Contest",
    desc: "Organized by the Agribusiness Student Association (HMP) at Duta Bangsa University, Surakarta",
  },
  {
    image: sertifPos2,
    title: "Poster Design Contest",
    desc: "Organized by the SKK Migas Sumbagut Regional Office",
  },
    {
    image: sertifSwim,
    title: "Citra Raya Swimming Club",
    desc: "Swimming 50 meters in the breaststroke proficiently",
  },
  {
    image: sertifJava,
    title: "Introduction to JavaScript",
    desc: "Sololearn Course Certificate",
  },
  {
    image: sertifCss,
    title: "Introduction to CSS",
    desc: "Sololearn Course Certificate",
  },
];

  return (
    <section
      id="resume"
      className="py-12 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-sm mb-3">
            My Journey 🗺️⁀જ✈︎
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
            Resume
          </h2>
        </div>

        {/* Tabs */}
        <div
            className="
                flex
                justify-center
                gap-2
                sm:gap-3
                flex-nowrap
                overflow-x-auto
                mb-10
                px-2
                scrollbar-hide
            "
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                        shrink-0
                        px-3
                        sm:px-6
                        py-2.5
                        sm:py-3
                        text-sm
                        sm:text-base
                        rounded-full
                        font-semibold
                        transition-all
                        duration-300
                        cursor-pointer
                        whitespace-nowrap

                        ${
                            activeTab === tab.id
                                ? "bg-purple-500 text-white shadow-lg"
                                : "bg-slate-900 text-gray-400 hover:text-white border border-slate-800"
                        }
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>

            {/* Content */}
            <div className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                md:p-8
                ">
            {/* Education */}
            {activeTab === "education" && (
                <div className="space-y-8">

                    {/* University */}
                    <div className="border-l-2 border-blue-500 pl-5">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                            {/* Left */}
                            <div>
                            <h3 className="
                            text-xl
                            sm:text-2xl
                            font-bold
                            text-blue-400
                            leading-snug
                            ">
                                Bachelor of Computer Science
                            </h3>

                            <p className="
                                text-base
                                sm:text-lg
                                leading-snug
                                font-medium
                                mt-2
                                ">
                                Multimedia Nusantara University
                            </p>
                            </div>

                            {/* Right */}
                            <div
                            className="
                            text-left
                            md:text-right
                            text-white-400
                            text-xs
                            sm:text-sm
                            mt-2
                            md:mt-0
                            "
                            >
                            <p>
                                2022 - 2026
                            </p>
                            <p className="mt-1">
                                Tangerang
                            </p>
                            </div>
                        </div>

                        <p className="
                            text-sm
                            sm:text-base
                            text-gray-400
                            leading-7
                            sm:leading-8
                            mt-4
                            ">
                            Focusing on software development, algorithms, web technologies,
                            database systems, artificial intelligence, computer security,
                            and application design that prioritizes the user experience.
                            In addition, I am continually deepening my knowledge in the field
                            of machine learning.
                        </p>
                    </div>

                    {/* High School */}
                    <div className="border-l-2 border-blue-500 pl-5">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                            {/* Left */}
                            <div>
                                <h3 className="
                                    text-xl
                                    sm:text-2xl
                                    font-bold
                                    text-blue-400
                                    leading-snug
                                    ">
                                    Senior High School
                                </h3>
                                <p className="
                                    text-base
                                    sm:text-lg
                                    leading-snug
                                    font-medium
                                    mt-2
                                    ">
                                    MAN 4 Tangerang
                                </p>
                            </div>


                            {/* Right */}
                            <div
                                className="
                                text-left
                                md:text-right
                                text-white-400
                                text-xs
                                sm:text-sm
                                mt-2
                                md:mt-0
                                "
                                >
                                <p>
                                    2019 - 2022
                                </p>
                                <p className="mt-1">
                                    Tangerang
                                </p>
                            </div>
                        </div>

                        <p className="
                            text-sm
                            sm:text-base
                            text-gray-400
                            leading-7
                            sm:leading-8
                            mt-4
                            ">
                            Specialized in Science and Mathematics with a focus on
                            technology development and robotics.
                        </p>

                        <ul
                            className="
                                list-disc
                                pl-5
                                text-sm
                                sm:text-base
                                text-gray-400
                                leading-7
                                sm:leading-8
                                mt-3
                                marker:text-blue-400
                            "
                        >
                            <li>
                                Received a certificate for the
                                <span className="text-blue-400">
                                    {" "}“Coding and Robotics Using Magnetcode and Android Smartphones”
                                </span>
                                {" "}workshop organized by the Robotics Organizing Committee
                                of Indonesia (ROCI).
                            </li>

                            <li>
                                Developed an Arduino-based project:
                                <span className="text-blue-400">
                                    {" "}“Earthquake Detection System Using Vibration Sensors.”
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Experience */}
            {activeTab === "experience" && (
                <div className="space-y-10">

                    {/* Internship Web Developer */}
                    <div className="border-l-2 border-blue-500 pl-5">
                        <div className="
                            flex
                            flex-col
                            md:flex-row
                            md:justify-between
                            md:items-start
                            gap-2
                        ">

                            {/* Left */}
                            <div>
                                <h3 className="
                                    text-xl
                                    sm:text-2xl
                                    font-bold
                                    text-blue-400
                                    leading-snug
                                ">
                                    Internship Web Developer
                                </h3>

                                <p className="
                                    text-base
                                    sm:text-lg
                                    leading-snug
                                    font-medium
                                    mt-2
                                ">
                                    Division Engineering | Full Stack Developer
                                </p>

                                <p className="
                                    text-gray-400
                                    text-sm
                                    sm:text-base
                                    mt-1
                                ">
                                    PT. Summarecon Agung Tbk
                                </p>
                            </div>

                            {/* Right */}
                            <div
                                className="
                                    text-left
                                    md:text-right
                                    text-white-400
                                    text-xs
                                    sm:text-sm
                                    mt-2
                                    md:mt-0
                                "
                            >
                                <p>
                                    Februari 2025 - Januari 2026
                                </p>

                                <p className="mt-1">
                                    Jakarta Utara
                                </p>
                            </div>
                        </div>

                        <p className="
                            text-sm
                            sm:text-base
                            text-gray-400
                            leading-7
                            sm:leading-8
                            mt-4
                        ">
                            Developed a Network Infrastructure Management System using PHP, MySQL, and Bootstrap, 
                            focusing on UI/UX, CRUD features, document management, data visualization, and automated notifications.
                        </p>
                    </div>


                    {/* PPIF 2024 */}
                    <div className="border-l-2 border-blue-500 pl-5">
                        <div className="
                            flex
                            flex-col
                            md:flex-row
                            md:justify-between
                            md:items-start
                            gap-2
                        ">

                            {/* Left */}
                            <div>
                                <h3 className="
                                    text-xl
                                    sm:text-2xl
                                    font-bold
                                    text-blue-400
                                    leading-snug
                                ">
                                    PPIF 2024
                                </h3>

                                <p className="
                                    text-base
                                    sm:text-lg
                                    leading-snug
                                    font-medium
                                    mt-2
                                ">
                                    Member of Security Division
                                </p>

                                <p className="
                                    text-gray-400
                                    text-sm
                                    sm:text-base
                                    mt-1
                                ">
                                    Universitas Multimedia Nusantara
                                </p>
                            </div>

                            {/* Right */}
                            <div
                                className="
                                    text-left
                                    md:text-right
                                    text-white-400
                                    text-xs
                                    sm:text-sm
                                    mt-2
                                    md:mt-0
                                "
                            >
                                <p>
                                    Februari - September 2024
                                </p>

                                <p className="mt-1">
                                    Tangerang
                                </p>
                            </div>
                        </div>

                        <p className="
                            text-sm
                            sm:text-base
                            text-gray-400
                            leading-7
                            sm:leading-8
                            mt-4
                        ">
                            Maintained security and order for PPIF activities, managing approximately 210 participants, 
                            coordinating freshman flows, and implementing event regulations and bag-checking procedures.
                        </p>
                    </div>


                    {/* MAXIMA UMN 2023 */}
                    <div className="border-l-2 border-blue-500 pl-5">
                        <div className="
                            flex
                            flex-col
                            md:flex-row
                            md:justify-between
                            md:items-start
                            gap-2
                        ">

                            {/* Left */}
                            <div>
                                <h3 className="
                                    text-xl
                                    sm:text-2xl
                                    font-bold
                                    text-blue-400
                                    leading-snug
                                ">
                                    MAXIMA UMN 2023
                                </h3>

                                <p className="
                                    text-base
                                    sm:text-lg
                                    leading-snug
                                    font-medium
                                    mt-2
                                ">
                                    Member of Decoration Division
                                </p>

                                <p className="
                                    text-gray-400
                                    text-sm
                                    sm:text-base
                                    mt-1
                                ">
                                    Universitas Multimedia Nusantara
                                </p>
                            </div>

                            {/* Right */}
                            <div
                                className="
                                    text-left
                                    md:text-right
                                    text-white-400
                                    text-xs
                                    sm:text-sm
                                    mt-2
                                    md:mt-0
                                "
                            >
                                <p>
                                    Februari - November 2023
                                </p>

                                <p className="mt-1">
                                    Tangerang
                                </p>
                            </div>
                        </div>

                        <p className="
                            text-sm
                            sm:text-base
                            text-gray-400
                            leading-7
                            sm:leading-8
                            mt-4
                        ">
                            Designed and created decorations for UMN’s annual freshman event, 
                            including student organization booths and the grand finale venue.
                        </p>
                    </div>

                </div>
            )}

            {/* Certificate */}
            {activeTab === "certificate" && (
                <div>
                    <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-6
                    ">

                    {certificates
                        .slice(certificateIndex, certificateIndex + 3)
                        .map((cert, index) => (
                        <div
                            key={index}
                            className="
                                bg-slate-800
                                rounded-2xl
                                overflow-hidden
                                border
                                border-slate-700
                                hover:-translate-y-3
                                hover:border-purple-500
                                transition-all
                                duration-300
                                shadow-lg
                            "
                        >

                            {/* Image */}
                            <div
                                className="
                                    h-64
                                    md:h-72
                                    overflow-hidden
                                    bg-slate-950
                                "
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    onClick={() => setSelectedCertificate(cert)}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        cursor-pointer
                                        hover:scale-110
                                        transition-transform
                                        duration-500
                                    "
                                />
                            </div>


                            {/* Content */}
                            <div className="p-5">
                                <h3 className="
                                    text-lg
                                    font-bold
                                    text-blue-400
                                ">
                                    {cert.title}
                                </h3>


                                <p className="
                                    text-gray-400
                                    mt-2
                                    text-sm
                                    leading-6
                                ">
                                    {cert.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>

                    {/* Navigation */}
                    <div className="
                        flex
                        justify-center
                        gap-4
                        mt-8
                    ">

                        {/* Prev */}
                        <button
                            onClick={() =>
                                setCertificateIndex(
                                    certificateIndex === 0
                                    ? certificates.length - 3
                                    : certificateIndex - 3
                                )
                            }
                            className="
                                w-10
                                h-10
                                sm:w-12
                                sm:h-12
                                rounded-full
                                flex
                                items-center
                                justify-center
                                bg-purple-500
                                text-white
                                hover:bg-purple-600
                                hover:scale-110
                                transition-all
                                duration-300
                                cursor-pointer
                            "
                        >
                            <FaChevronLeft className="text-sm sm:text-lg"/>
                        </button>

                        {/* Next */}
                        <button
                            onClick={() =>
                                setCertificateIndex(
                                    certificateIndex + 3 >= certificates.length
                                    ? 0
                                    : certificateIndex + 3
                                )
                            }
                            className="
                                w-10
                                h-10
                                sm:w-12
                                sm:h-12
                                rounded-full
                                flex
                                items-center
                                justify-center
                                bg-purple-500
                                text-white
                                hover:bg-purple-600
                                hover:scale-110
                                transition-all
                                duration-300
                                cursor-pointer
                            "
                        >
                            <FaChevronRight size={18}/>
                        </button>
                    </div>
                </div>
            )}
            </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
            <div
                className="
                    fixed
                    inset-0
                    bg-black/80
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    z-[100]
                    p-5
                "
                onClick={() => setSelectedCertificate(null)}
            >
                <div
                    className="
                        relative
                        max-w-md
                        sm:max-w-xl
                        w-full
                        bg-slate-900
                        rounded-2xl
                        p-4
                        border
                        border-slate-700
                    "
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedCertificate(null)}
                        className="
                            absolute
                            right-3
                            top-2
                            text-white
                            text-2xl
                            hover:text-purple-400
                            transition
                        "
                    >
                        ×
                    </button>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="
                                max-h-[45vh]
                                sm:max-h-[60vh]
                                max-w-full
                                object-contain
                                rounded-xl
                            "
                        />
                    </div>

                    {/* Description */}
                    <div className="mt-4 text-center">
                        <h3
                            className="
                                text-xl
                                font-bold
                                text-purple-400
                            "
                        >
                            {selectedCertificate.title}
                        </h3>

                        <p className="
                            text-gray-400
                            mt-2
                            text-sm
                        ">
                            {selectedCertificate.desc}
                        </p>
                    </div>
                </div>
            </div>
        )}
    </section>
  );
}