import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink
} from "lucide-react";

import CalculatorImage from "/src/assets/Calculator.png";
import CrochetImage from "/src/assets/CrochetWeb.png";
import FerrariImage from "/src/assets/FerrariWeb.png";
import TechVaultImage from "/src/assets/TecchVault.png";
import Quickbite from "/src/assets/quickbite.png";
import ToDoList from "/src/assets/ToDoList.png"

export const projects = [
    {
        id: "01",
        title: "Shanelle Crochet",
        category: "E-Commerce Application",
        description:
            "A responsive crochet e-commerce application where users can browse products, search items, manage a shopping cart, and place orders.",
        image: CrochetImage,
        liveUrl: "https://limwelyane-dev.github.io/shanelleCrochet/",
        githubUrl: "",
        features: ["Product Catalog","Product Search","Brand Story and Customer Reviews","Checkout System","Order Management","User registration and login"],
    },
    {
        id: "02",
        title: "TechVault E-Commerce",
        category: "E-Commerce Application",
        description:
            "TechVault is a full-stack electronics e-commerce platform where users can browse products, manage their shopping carts, place orders, and submit product reviews.",
        image: TechVaultImage,
        liveUrl: "https://tech-vault-azure.vercel.app/login",
        githubUrl: "",
        features: ["User registration and login","Shopping cart and checkout","Admin dashboard and order management","Product image uploads and customer reviews"],
    },
    {
        id: "03",
        title: "Ferrari Landing Page",
        category: "Frontend Project",
        description:
            "A premium automotive landing page focused on immersive visuals, smooth animations, responsive layouts, and an interactive user experience.",
        image: FerrariImage,
        liveUrl: "https://limwelyane-dev.github.io/PersonalFerrariLandingPage/",
        githubUrl: "",
        features: ["Cinematic Video Background","Smooth Scroll Animations","Luxury-Inspired UI","Responsive Design"],
    },
    {
        id: "04",
        title: "Calculator",
        category: "React Application",
        description:
            "A responsive BMI calculator that allows users to enter their height and weight and instantly receive their BMI result and health category.",
        image: CalculatorImage,
        liveUrl: "https://limwelyane-dev.github.io/My_Calculator/",
        githubUrl: "",
        features: ["Interactive User Interface","Dynamic Results Display","Toggle Effect","Accurate Calculation"],
    },
    {
        id: "05",
        title: "QuickBite Foodhub",
        category: "E-Commerce Application",
        description:
            "A food ordering platform that allows customers to browse a variety of delicious meals, explore food options, and conveniently place orders online. It provides a simple, user-friendly experience designed to make ordering food faster, easier, and more convenient.",
        image: Quickbite,
        liveUrl: " https://limwelyane-dev.github.io/QuickBitePH/",
        githubUrl: "",
        features: ["User Authentication","Food Browsing","Order Management","Shopping Cart"],
    },
    {
        id: "06",
        title: "To Do List",
        category: "Frontend Project",
        description:
            "A task management app with secure authentication, task creation, editing, and deletion. Features priority levels, due dates, progress tracking, calendar view, and dark mode.",
        image: ToDoList,
        liveUrl: "https://to-do-list-nine-opal-65.vercel.app/login",
        githubUrl: "",
        features: ["User Authentication","Task creation","Calendar view"," Progress tracking", "Dark mode"],
    },
];

export const ProjectSection = () => {

    return (
        <section
            id="projects"
            className="relative overflow-hidden py-28 px-4"
        >
            <div className="
                absolute
                top-20
                left-1/2
                -translate-x-1/2
                w-125
                h-75
                rounded-full
                bg-primary/5
                blur-[120px]
                pointer-events-none
            " />

            <div className="relative container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

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

                <div className="
                    columns-2
                    sm:columns-3
                
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
                                mb-2
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
                            <div className="
                                absolute
                                inset-0
                                z-20
                                flex
                                items-center
                                justify-center
                                bg-black/60
                                opacity-0
                                group-hover:opacity-100
                                transition-all
                                duration-300
                            ">
                                <a
                                    href={project.liveUrl.trim()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-white
                                        font-semibold
                                        text-sm
                                        px-5
                                        py-3
                                        rounded-full
                                        border
                                        border-white/50
                                        hover:bg-white
                                        hover:text-black
                                        transition-all
                                    "
                                >
                                    View Live Website
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                            
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

                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/60
                                    via-black/10
                                    to-transparent
                                    opacity-60
                                " />

                                

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

                            <div className="p-6">

                                <div className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                    mb-3
                                ">
                                    <h3 className="
                                        text-md
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
                                            shrink-0
                                            text-muted-foreground
                                            transition-all
                                            duration-300
                                            group-hover:text-primary
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        "
                                    />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

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