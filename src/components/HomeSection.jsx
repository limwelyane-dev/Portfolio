import { ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./Projects"


const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
        className="relative shrink-0 w-80 sm:w-90 pt-5 rounded-2xl"
     >

      <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ width: 0, opacity: 0, x: -15 }}
            animate={{ width: 260, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              absolute
              -top-15
              left-28
              shrink-0 overflow-hidden
              h-auto rounded-2xl
              bg-primary-foreground text-black
              backdrop-blur-md
              border border-white/10
              z-20
            "
          >
            <div className="flex flex-col items-center justify-center w-60 py-4">
              <h3 className="text-sm font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-xs uppercase tracking-widest text-primary mb-3">
                Key Features
              </p>

              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center text-sm italic text-black"
                  >
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export const HomeSection = () => {

    const featuredProjects = [
        ...projects,
        ...projects,
    ];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center gap-15 px-4 overflow-hidden">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Limwel Ren</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Yane</span>
                    </h1>
                    <p className="
                    mt-5
                    max-w-3xl
                    mx-auto
                    text-base md:text-lg
                    leading-relaxed
                    text-muted-foreground
                    opacity-0
                    animate-fade-in-delay-3
                ">
                    I build a responsive and interactive website
                    using{" "}
                    <span className="text-foreground font-medium">
                        React, JavaScript, and Tailwind CSS
                    </span>
                    {" "} with additional experience in{" "}<span className="text-foreground font-medium">
                       Node.js, Express.js, and PostgreSQL.
                    </span> I'm passionate about turning ideas into
                    clean, functional, and user-friendly interfaces while continuously improving my skills in frontend and full-stack development.
                </p>
                <div className="flex flex-row gap-4 items-center justify-center opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="
                                cosmic-button
                                inline-flex
                                items-center
                                gap-2
                            "
                        >
                            View My Work
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            href="#contact"
                            className="
                                px-6 py-2.5
                                rounded-full
                                border border-primary/40
                                text-primary
                                hover:bg-primary/10
                                transition-all duration-300
                            "
                        >
                            Get In Touch
                        </a>
                    </div>

                </div>
            </div>

            <div className="w-full overflow-visible py-2 -mb-30">
                <div className=" relative sideAni flex gap-6 w-max px-3 ">

                
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.name}-${index}`}
                    project={project}
                    index={index}
                  />
                ))}


                </div>
            </div>

        </section>
    )
}