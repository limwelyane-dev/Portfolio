import { User, Code2, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import resumePDF from "/src/assets/Web_dev_Resume.pdf"

export const AboutSection = () => {
    const aboutCards = [
    {
        icon: Code2,
        title: "Frontend Development",
        description:
            "Creating responsive, interactive, and user-friendly interfaces with React, JavaScript, and Tailwind CSS.",
    },
    {
        icon: Database,
        title: "Backend Development",
        description:
            "Building REST APIs and working with Node.js, Express.js, and PostgreSQL to handle application data.",
    },
    {
        icon: User,
        title: "Continuous Growth",
        description:
            "Seeking a junior developer opportunity to contribute to real-world projects, collaborate with a team, and strengthen my development skills.",
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
                    <h3 className="text-2xl font-semibold">
                        Web Developer
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm a Web developer passionate about building
                        responsive, interactive, and user-friendly web
                        applications. I enjoy turning ideas into functional
                        digital experiences with clean interfaces and practical
                        solutions.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        My primary focus is frontend development using{" "}
                        <span className="text-foreground font-medium">
                            React, JavaScript, and Tailwind CSS.
                        </span>{" "}
                        I also have experience with{" "}
                        <span className="text-foreground font-medium">
                            Node.js, Express.js, and PostgreSQL,
                        </span>{" "}
                        allowing me to build REST APIs, manage application
                        data, and develop full-stack web applications.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm currently seeking a junior developer opportunity
                        where I can apply my skills, collaborate with a
                        development team, contribute to meaningful projects,
                        and continue growing professionally.
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