import { Mail } from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
                 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In <span className="text-primary"> Touch</span>
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 70 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: false }}
                
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <div className="bg-transparent">
                        <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center">You can <span className="text-primary"> Reach me Here!</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="relative p-5 bg-primary/10 flex items-center justify-center card-hover">
                            <Mail className="absolute left-5 h-6 w-6 text-primary" />
                            <a href="mailto:limwelyane@gmail.com">
                                limwelyane@gmail.com
                            </a>
                        </div>
                        <div className="relative p-5 bg-primary/10 flex items-center justify-center card-hover">
                            <FaFacebook className="absolute left-5 h-6 w-6 text-primary" />
                            <a href="www.facebook.com">
                                Limwel Ren Yane
                            </a>
                        </div>
                        <div className="relative p-5 bg-primary/10 flex items-center justify-center card-hover">
                            <FaLinkedin className="absolute left-5 h-6 w-6 text-primary" />
                            <a href="www.linked.com/in/limwel06profile">
                                www.linked.com/in/limwel06profile
                            </a>
                        </div>
                        <div className="relative p-5 bg-primary/10 flex items-center justify-center card-hover">
                            <FaGithub className="absolute left-5 h-6 w-6 text-primary" />
                            <a href="github.com/limwelyane-dev">
                                github.com/limwelyane-dev
                            </a>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
        </section>
    )
}