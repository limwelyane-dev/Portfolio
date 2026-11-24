import { User, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import resumePDF from "/src/assets/limwel_Ren_Yane.pdf"
import Profile from "/src/assets/limProfile.png"

export const AboutSection = () => {

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
                        Frontend Developer
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm a Frontend developer passionate about building
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
                        I also have knowledge with{" "}
                        <span className="text-foreground font-medium">
                            Node.js, Express.js, and PostgreSQL, MongoDB
                        </span>{" "}
                        allowing me to build REST APIs, manage application
                        data, and develop full-stack web applications.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                        I'm currently seeking a Frontend developer opportunity
                        where I can apply my skills, collaborate with a
                        development team, contribute to meaningful projects,
                        and continue growing professionally.
                    </p>

                    <div className="w-full h-2 mt-10 bg-primary rounded-full"/>

                </div>

                
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className=" flex flex-col gap-8 items-center justify-center w-full min-h-100 sm:min-h-125 overflow-hidden"
                >
                   
                    <img
                        src={Profile}
                        alt="Profile"
                        className=" z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full"
                    />


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
                </motion.div>

            </motion.div>
        </div>
    </section>
    );
}
