import { ArrowDown, ArrowUpRight } from "lucide-react"

export const HomeSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Limwel Ren</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Yane</span>
                    </h1>
                    <p className="
                    mt-5
                    max-w-2xl
                    mx-auto
                    text-base md:text-lg
                    leading-relaxed
                    text-muted-foreground
                    opacity-0
                    animate-fade-in-delay-3
                ">
                    I build responsive and interactive web experiences
                    using{" "}
                    <span className="text-foreground font-medium">
                        React, JavaScript, and Tailwind CSS
                    </span>
                    . I'm passionate about turning ideas into
                    clean, functional, and user-friendly interfaces.
                </p>

                    <div className="
                        mt-9
                        flex flex-col sm:flex-row
                        items-center justify-center
                        gap-4
                        opacity-0
                        animate-fade-in-delay-4
                    ">
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

            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}