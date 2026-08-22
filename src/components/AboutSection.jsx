import { User, Code2, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import resumePDF from "/public/ReactResume.pdf"

export const AboutSection = () => {
    const aboutCards = [
    {
        icon: Code2,
        title: "Frontend Development",
        description:
            "Building responsive and interactive interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
        icon: Database,
        title: "Modern Web Development",
        description:
            "Working with REST APIs and React Query to fetch, manage, and display application data efficiently.",
    },
    {
        icon: User,
        title: "Professional Growth",
        description:
            "Actively seeking a junior frontend opportunity where I can contribute, learn from experienced developers, and grow professionally.",
    },
];

    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-x-5xl">
            <motion.h2
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </motion.h2>

            <motion.div 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
            className="bg-blureffect/5 p-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Junior Frontend Developer</h3>
                    
                    <p>
                        I'm a junior frontend developer passionate
                        about creating responsive, interactive, and
                        user-friendly websites. I enjoy transforming
                        ideas and designs into functional digital
                        experiences.
                    </p>

                    <p>
                        My current focus is on modern frontend
                        development using{" "}
                        <span className="text-foreground font-medium">
                            React, JavaScript, Tailwind CSS,
                        </span>{" "}
                        and responsive web development. I'm also
                        learning to build applications that work with
                        APIs and manage server data using{" "}
                        <span className="text-foreground font-medium">
                            React Query.
                        </span>
                    </p>

                    <p>
                        I'm looking for an opportunity where I can
                        contribute my current skills, work with a
                        development team, and continue growing as a
                        professional frontend developer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-3">
                        <a
                            href="#contact"
                            className="cosmic-button inline-flex items-center justify-center gap-2"
                        >
                            Get In Touch
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            href={resumePDF}
                            download
                            className="
                                inline-flex items-center justify-center
                                gap-2 px-6 py-2.5
                                rounded-full
                                border border-primary/50
                                text-primary
                                hover:bg-primary/10
                                transition-all duration-300
                            "
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {aboutCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.12,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="
                                        group relative
                                        overflow-hidden
                                        rounded-2xl
                                        border border-border/50
                                        bg-card/50
                                        backdrop-blur-xl
                                        p-6
                                        transition-all duration-300
                                        hover:border-primary/40
                                        hover:bg-card/70
                                        hover:shadow-lg
                                        hover:shadow-primary/5
                                    "
                                >
                                    <div
                                        className="
                                            absolute -right-12 -top-12
                                            w-28 h-28
                                            rounded-full
                                            bg-primary/10
                                            blur-3xl
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-opacity duration-500
                                        "
                                    />

                                    <div className="relative flex gap-5">

                                        {/* Icon */}
                                        <div
                                            className="
                                                flex-shrink-0
                                                w-12 h-12
                                                flex items-center justify-center
                                                rounded-xl
                                                bg-primary/10
                                                border border-primary/10
                                                text-primary
                                                transition-all duration-300
                                                group-hover:bg-primary/15
                                            "
                                        >
                                            <Icon size={22} />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">
                                                {card.title}
                                            </h4>

                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
            </motion.div>
        </div>
    </section>
    );
}