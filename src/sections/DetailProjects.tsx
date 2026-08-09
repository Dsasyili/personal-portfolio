import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import {
    FaArrowLeft,
    FaArrowRight,
    FaExternalLinkAlt,
} from "react-icons/fa";

import { projects } from "../data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function DetailProjects() {
    const budgetBoostVideo =
    "https://www.youtube.com/embed/9PBaxYkbZ4s";

    const { id } = useParams();

    const [activeSlide, setActiveSlide] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const project = projects.find(
        (item) => item.id === id
    );

    const handleBackToProjects = () => {
        window.location.href = "/#projects";
    };

    // Jika project tidak ditemukan
    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">

                    <h1 className="text-3xl font-bold mb-4">
                        Project Not Found
                    </h1>

                    <p className="text-gray-400 mb-6">
                        The project you are looking for
                        does not exist.
                    </p>

                    <button
                        onClick={handleBackToProjects}
                        className="
                            px-6
                            py-3
                            rounded-xl
                            bg-purple-500
                            hover:bg-blue-600
                            transition
                            text-white
                            font-medium
                            cursor-pointer
                        "
                    >
                        Back to Projects
                    </button>

                </div>
            </section>
        );
    }

    return (
        <section
            className="
                min-h-screen
                pt-28
                pb-20
                px-6
            "
        >

            <div className="max-w-6xl mx-auto">

                {/* Back Button */}

                <button
                    onClick={handleBackToProjects}
                    className="
                        flex
                        items-center
                        gap-2
                        text-pink-400
                        hover:text-blue-400
                        transition
                        mb-8
                        text-sm
                        cursor-pointer
                    "
                >
                    <FaArrowLeft />
                    Back to Projects
                </button>


                {/* Project Gallery */}

                <div className="mb-12">

                    {/* Main Gallery */}

                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiperInstance) => {
                            setSwiper(swiperInstance);
                        }}
                        onSlideChange={(swiperInstance) => {
                            setActiveSlide(swiperInstance.activeIndex);
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="w-full"
                    >

                        {/* Budget Boost YouTube Video */}
                        {project.id === "budget-boost" && (
                            <SwiperSlide>
                                <div
                                    className="
                                        w-full
                                        max-h-[500px]
                                        flex
                                        justify-center
                                        overflow-hidden
                                        rounded-3xl
                                        bg-black
                                    "
                                >
                                    <div
                                        className="
                                            w-full
                                            aspect-video
                                            max-h-[500px]
                                        "
                                    >
                                        <iframe
                                            src={budgetBoostVideo}
                                            title="Budget Boost Pitching Video"
                                            className="
                                                w-full
                                                h-full
                                                rounded-3xl
                                            "
                                            allow="
                                                accelerometer;
                                                autoplay;
                                                clipboard-write;
                                                encrypted-media;
                                                gyroscope;
                                                picture-in-picture;
                                                web-share
                                            "
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}

                        {/* Existing Images */}
                        {project.gallery.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="
                                        w-full
                                        flex
                                        justify-center
                                        cursor-pointer
                                    "
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} - ${index + 1}`}
                                        className="
                                            w-full
                                            h-auto
                                            max-h-[500px]
                                            object-contain
                                            rounded-3xl
                                            block
                                        "
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Preview */}
                    {project.gallery.length > 0 && (
                        <div
                            className="
                                flex
                                justify-center
                                gap-3
                                mt-5
                                overflow-x-auto
                                pb-2
                                px-2
                            "
                        >
                            {/* Video Thumbnail */}
                            {project.id === "budget-boost" && (
                                <button
                                    onClick={() => {
                                        swiper?.slideTo(0);
                                        setActiveSlide(0);
                                    }}
                                    className={`
                                        flex-shrink-0
                                        w-20
                                        h-14
                                        sm:w-24
                                        sm:h-16
                                        rounded-xl
                                        overflow-hidden
                                        border-2
                                        transition-all
                                        duration-300
                                        cursor-pointer

                                        ${
                                            activeSlide === 0
                                                ? "border-pink-500 opacity-100"
                                                : "border-white/10 opacity-60 hover:opacity-100"
                                        }
                                    `}
                                    aria-label="View Budget Boost video"
                                >
                                    <div className="relative w-full h-full bg-black">

                                        <img
                                            src="https://img.youtube.com/vi/9PBaxYkbZ4s/mqdefault.jpg"
                                            alt="Budget Boost video thumbnail"
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                bg-black/20
                                            "
                                        >

                                            <div
                                                className="
                                                    w-7
                                                    h-7
                                                    rounded-full
                                                    bg-red-600
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-white
                                                    text-xs
                                                "
                                            >
                                                ▶
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            )}

                            {/* Image Thumbnails */}
                            {project.gallery.map((image, index) => {

                                const slideIndex =
                                    project.id === "budget-boost"
                                        ? index + 1
                                        : index;

                                return (

                                    <button
                                        key={index}
                                        onClick={() => {
                                            swiper?.slideTo(slideIndex);
                                            setActiveSlide(slideIndex);
                                        }}
                                        className={`
                                            flex-shrink-0
                                            w-20
                                            h-14
                                            sm:w-24
                                            sm:h-16
                                            rounded-xl
                                            overflow-hidden
                                            border-2
                                            transition-all
                                            duration-300
                                            cursor-pointer

                                            ${
                                                activeSlide === slideIndex
                                                    ? "border-pink-500 opacity-100"
                                                    : "border-white/10 opacity-60 hover:opacity-100"
                                            }
                                        `}
                                        aria-label={`View image ${index + 1}`}
                                    >

                                        <img
                                            src={image}
                                            alt={`${project.title} thumbnail ${index + 1}`}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />

                                    </button>

                                );

                            })}

                        </div>

                    )}


                    {/* Slider Controls */}

                    {(
                        project.id === "budget-boost"
                            ? project.gallery.length + 1
                            : project.gallery.length
                    ) > 1 && (

                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                gap-5
                                mt-4
                            "
                        >

                            {/* Previous */}

                            <button
                                onClick={() => swiper?.slidePrev()}
                                disabled={activeSlide === 0}
                                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-300
                                    bg-white/5
                                    border
                                    border-white/10
                                    hover:bg-purple-500
                                    hover:text-white
                                    transition
                                    disabled:opacity-30
                                    disabled:cursor-not-allowed
                                    cursor-pointer
                                "
                                aria-label="Previous slide"
                            >
                                <FaArrowLeft className="text-xs" />
                            </button>


                            {/* Counter */}

                            <span
                                className="
                                    text-sm
                                    text-gray-400
                                    min-w-[45px]
                                    text-center
                                "
                            >
                                {activeSlide + 1} / {
                                    project.id === "budget-boost"
                                        ? project.gallery.length + 1
                                        : project.gallery.length
                                }
                            </span>


                            {/* Next */}

                            <button
                                onClick={() => swiper?.slideNext()}
                                disabled={
                                    activeSlide ===
                                    (
                                        project.id === "budget-boost"
                                            ? project.gallery.length
                                            : project.gallery.length - 1
                                    )
                                }
                                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-300
                                    bg-white/5
                                    border
                                    border-white/10
                                    hover:bg-purple-500
                                    hover:text-white
                                    transition
                                    disabled:opacity-30
                                    disabled:cursor-not-allowed
                                    cursor-pointer
                                "
                                aria-label="Next slide"
                            >
                                <FaArrowRight className="text-xs" />
                            </button>

                        </div>

                    )}

                </div>

                {/* Project Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Title & View Project */}
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            gap-4
                            mb-6
                        "
                    >

                        {/* Title */}
                        <h1
                            className="
                                text-2xl
                                sm:text-3xl
                                lg:text-4xl
                                font-bold
                                leading-tight
                            "
                        >
                            {project.title}
                        </h1>


                        {/* View Project Button */}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    px-5
                                    py-2.5
                                    rounded-xl
                                    bg-purple-500
                                    hover:bg-pink-500
                                    transition
                                    text-white
                                    text-sm
                                    font-medium
                                    shrink-0
                                    self-start
                                    sm:self-center
                                "
                            >
                                View Project

                                <FaExternalLinkAlt
                                    className="text-xs"
                                />
                            </a>
                        )}
                    </div>

                    {/* Description */}
                    <p
                        className="
                            text-gray-400
                            text-sm
                            sm:text-base
                            leading-7
                            mb-10
                        "
                    >
                        {project.description}
                    </p>


                    {/* About Project */}
                    <div className="mb-10">
                        <h2
                            className="
                                text-xl
                                sm:text-2xl
                                font-bold
                                mb-2
                            "
                        >
                            About Project
                        </h2>

                        <p
                            className="
                                text-gray-400
                                text-sm
                                sm:text-base
                                leading-8
                            "
                        >
                            {project.details}
                        </p>
                    </div>


                    {/* Technologies */}
                    <div className="mb-10">
                        <h2
                            className="
                                text-xl
                                sm:text-2xl
                                font-bold
                                mb-5
                            "
                        >
                            Technologies
                        </h2>

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-3
                            "
                        >

                            {project.tech.map(
                                (tech, index) => {
                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                px-4
                                                py-2
                                                rounded-xl
                                                bg-white/5
                                                border
                                                border-white/10
                                            "
                                        >

                                            <Icon
                                                className={`text-lg ${tech.color}`}
                                            />

                                            <span
                                                className="
                                                    text-sm
                                                    text-gray-300
                                                "
                                            >
                                                {tech.name}
                                            </span>

                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}