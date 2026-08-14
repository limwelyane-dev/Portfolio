import { motion } from "framer-motion";

const skills = [
    {name: "HTML/CSS", level: 90, category: "frontend"},
    {name: "JavaScript", level: 60, category: "frontend"},
    {name: "TailWind CSS", level: 70, category: "frontend"},
    {name: "React", level: 75, category: "frontend"},

    {name: "Python", level: 75, category: "backend"},
    {name: "Java", level: 70, category: "backend"},

    {name: "Git/GitHub", level: 65, category: "tools"},
    {name: "VS Code", level: 90, category: "tools"},
    {name: "Figma", level: 65, category: "tools"},
];

export const SkillSection = () => {

    return (
        <section id="skills"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}

                className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}

                 className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) =>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out}" style={{width: skill.level + "%"}} />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
};