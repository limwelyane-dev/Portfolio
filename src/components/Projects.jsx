import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight, Leaf } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BMI Calculator",
        description: "This is my BMI Calculator, a web application I built using React and Vite. Its purpose is to help users calculate their Body Mass Index based on their height and weight, then instantly determine whether they are underweight, at a healthy weight, overweight, or obese.",
        image: "/src/assets/BMICalculator.png",
        tags: ["React", "TailwindCSS", "Javascript", "Framer Motion"],
        githubUrl: "https://limwelyane-dev.github.io/BMI-Calculator/"
    },
    {
        id: 2,
        title: "Shanelle Crochet",
        description: "This is my crochet shop website, an e-commerce web application. The goal of this project was to create a modern, responsive online store where customers can browse handmade crochet products, add them to a shopping cart, and place orders.",
        image: "/src/assets/CrochetWeb.png",
        tags: ["React", "TailwindCSS", "Javascript", "Framer Motion"],
        githubUrl: "https://limwelyane-dev.github.io/shanelleCrochet/"
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
                className="flex flex-row items-center justify-center gap-2 text-3xl md:text-4xl font-bold mb-4">Featured<span className="text-primary"> Projects</span> <Leaf size={30} className="text-primary"/></motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
                className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects I created with React.js. Each project was carefully crafted with attention to detail, performance, and user experience.</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                src={project.image} 
                                alt={project.title} 
                                className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-4">
                                <h3 className="text-[22px] font-bold text-primary m-4">{project.title}</h3>
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag) =>(
                                            <span className="text-xs font-poppins rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <button className="flex flex-row gap-2 w-full items-center justify-center bg-primary/10 text-primary p-2 hover:text-teal-700 hover:shadow-[0_2px_15px_rgba(20,184,166,0.25)]">
                                    <a href={project.githubUrl}>View Work</a>
                                    <ArrowRight size={20}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};