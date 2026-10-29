
import { Mail } from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
    {
        name: "Email",
        value: "limwelyane@gmail.com",
        href: "mailto:limwelyane@gmail.com",
        icon: Mail,
        external: false,
    },
    {
        name: "Facebook",
        value: "Limwel Ren Yane",
        href: "https://www.facebook.com/limwelren.yane.26/",
        icon: FaFacebook,
        external: true,
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/limwel06profile",
        href: "https://www.linkedin.com/in/limwel06profile",
        icon: FaLinkedin,
        external: true,
    },
    {
        name: "GitHub",
        value: "github.com/limwelyane-dev",
        href: "https://github.com/limwelyane-dev",
        icon: FaGithub,
        external: true,
    },
];

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative bg-secondary/30 px-4 py-24"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center text-3xl font-bold md:text-4xl"
                >
                    Get In <span className="text-primary">Touch</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
                >
                    <div>
                        <h3 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                            You can{" "}
                            <span className="text-primary">
                                Reach me Here!
                            </span>
                        </h3>
                        <p className="text-center text-muted-foreground">
                            Feel free to contact me for opportunities,
                            collaborations, or questions about my projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {contactLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={
                                        item.external
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        item.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={`${item.name}: ${item.value}`}
                                    className="card-hover relative flex min-w-0 items-center justify-center gap-3 bg-primary/10 p-5 transition-colors hover:bg-primary/20"
                                >
                                    <Icon
                                        className="absolute left-5 h-6 w-6 shrink-0 text-primary"
                                        aria-hidden="true"
                                    />
                                    <span className="break-all px-8 text-center">
                                        {item.value}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
