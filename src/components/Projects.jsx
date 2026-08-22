import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Sparkles,
} from "lucide-react";

import BMIImage from "/src/assets/BMICalculator.png";
import CrochetImage from "/src/assets/CrochetWeb.png";
import FerrariImage from "/src/assets/FerrariWeb.png";

const projects = [
    {
        id: "01",
        title: "Shanelle Crochet",
        category: "E-Commerce Application",
        description:
            "A responsive crochet e-commerce application where users can browse products, search items, manage a shopping cart, and place orders.",
        image: CrochetImage,
        tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://limwelyane-dev.github.io/shanelleCrochet/",
        githubUrl: "",
    },
    {
        id: "02",
        title: "Ferrari Landing Page",
        category: "Frontend Project",
        description:
            "A premium automotive landing page focused on immersive visuals, smooth animations, responsive layouts, and an interactive user experience.",
        image: FerrariImage,
        tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://limwelyane-dev.github.io/PersonalFerrariLandingPage/",
        githubUrl: "",
    },
    {
        id: "03",
        title: "BMI Calculator",
        category: "React Application",
        description:
            "A responsive BMI calculator that allows users to enter their height and weight and instantly receive their BMI result and health category.",
        image: BMIImage,
        tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://limwelyane-dev.github.io/BMI-Calculator/",
        githubUrl: "",
    },
];

export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden py-28 px-4"
        >
            {/* Background glow */}
            <div className="
                absolute
                top-20
                left-1/2
                -translate-x-1/2
                w-[500px]
                h-[300px]
                rounded-full
                bg-primary/5
                blur-[120px]
                pointer-events-none
            " />

            <div className="relative container mx-auto max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="
                        inline-flex items-center gap-2
                        px-4 py-2
                        mb-5
                        rounded-full
                        border border-primary/20
                        bg-primary/5
                        text-sm text-primary
                    ">
                        <Sparkles size={15} />
                        My Work
                    </span>

                    <h2 className="
                        text-4xl md:text-5xl
                        font-bold
                        tracking-tight
                    ">
                        Featured{" "}
                        <span className="text-primary">
                            Projects
                        </span>
                    </h2>

                    <p className="
                        mt-5
                        max-w-2xl
                        mx-auto
                        text-muted-foreground
                        leading-relaxed
                    ">
                        A selection of projects I've built while developing
                        my skills in modern frontend development, responsive
                        design, and interactive user experiences.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-7
                ">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border border-border/50
                                bg-card/60
                                backdrop-blur-xl
                                shadow-lg
                                transition-all duration-300
                                hover:border-primary/40
                                hover:shadow-primary/10
                            "
                        >
                            {/* Project Image */}
                            <div className="
                                relative
                                h-56
                                overflow-hidden
                                bg-secondary/30
                            ">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project`}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />
                                ) : (
                                    <div className="
                                        flex
                                        items-center
                                        justify-center
                                        w-full
                                        h-full
                                        bg-gradient-to-br
                                        from-primary/10
                                        via-background
                                        to-secondary
                                    ">
                                        <span className="
                                            text-muted-foreground
                                            text-sm
                                        ">
                                            Preview coming soon
                                        </span>
                                    </div>
                                )}

                                {/* Image overlay */}
                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/60
                                    via-black/10
                                    to-transparent
                                    opacity-60
                                " />

                                {/* Project number */}
                                <div className="
                                    absolute
                                    top-4
                                    left-4
                                    px-3
                                    py-1.5
                                    rounded-full
                                    bg-black/40
                                    backdrop-blur-md
                                    border border-white/10
                                    text-white
                                    text-xs
                                    font-medium
                                ">
                                    {project.id}
                                </div>

                                {/* Category */}
                                <div className="
                                    absolute
                                    bottom-4
                                    left-4
                                    text-white
                                    text-xs
                                    font-medium
                                ">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                    mb-3
                                ">
                                    <h3 className="
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        group-hover:text-primary
                                        transition-colors
                                    ">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight
                                        size={20}
                                        className="
                                            flex-shrink-0
                                            text-muted-foreground
                                            transition-all
                                            duration-300
                                            group-hover:text-primary
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        "
                                    />
                                </div>

                                <p className="
                                    text-sm
                                    text-muted-foreground
                                    leading-relaxed
                                    mb-5
                                ">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="
                                    flex
                                    flex-wrap
                                    gap-2
                                    mb-6
                                ">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                px-2.5
                                                py-1
                                                rounded-full
                                                bg-primary/5
                                                border border-primary/10
                                                text-xs
                                                text-muted-foreground
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="
                                    flex
                                    items-center
                                    gap-3
                                ">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                flex-1
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                px-4
                                                py-2.5
                                                rounded-xl
                                                bg-primary
                                                text-primary-foreground
                                                text-sm
                                                font-medium
                                                transition-all
                                                duration-300
                                                hover:opacity-90
                                                hover:shadow-lg
                                                hover:shadow-primary/20
                                            "
                                        >
                                            Live Demo
                                            <ExternalLink size={16} />
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                w-11
                                                h-11
                                                rounded-xl
                                                border
                                                border-border/60
                                                text-muted-foreground
                                                hover:text-primary
                                                hover:border-primary/40
                                                transition-all
                                            "
                                            aria-label={`View ${project.title} source code`}
                                        >
                                            
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="mt-14 text-center"
                >
                    <p className="
                        text-sm
                        text-muted-foreground
                    ">
                        More projects coming as I continue{" "}
                        <span className="text-primary font-medium">
                            building and learning.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};