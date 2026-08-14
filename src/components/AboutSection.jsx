import { User, Code, Settings } from "lucide-react"
import { motion } from "framer-motion";

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
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                    
                    <p className="text-muted-foreground">
                        I'm a 23 years old Junior frontend developer who loves creating creative and functional websites, solving real-world problems. I enjoy turning ideas into interactive digital experiences using modern web technologies. I am looking for a long-term opportunity where I can contribute my skills while learning and growing professionally.
                    </p>
                    <p className="text-muted-foreground">
                        I'm passionate about creating elegant and interactive websites, giving solutions to complex problem.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="bg-primary/10 p-6 rounded-lg card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full">
                                <Settings className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    );
}