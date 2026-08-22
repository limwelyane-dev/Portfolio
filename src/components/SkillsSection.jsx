import { motion } from "framer-motion";
import {
    Code2,
    Palette,
    Monitor,
    GitBranch,
    PenTool,
    CodeXml,
    Braces,
    Layers3,
    Globe,
} from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        description: "Building responsive and interactive user interfaces.",
        icon: Code2,
        skills: [
            { name: "HTML & CSS", icon: CodeXml },
            { name: "JavaScript", icon: Braces },
            { name: "React", icon: Layers3 },
            { name: "Tailwind CSS", icon: Palette },
        ],
    },
    {
        title: "Web Development",
        description: "Creating functional and user-friendly web experiences.",
        icon: Globe,
        skills: [
            { name: "Responsive Web Design", icon: Monitor },
            { name: "UI Implementation", icon: Layers3 },
            { name: "API Integration", icon: Globe },
        ],
    },
    {
        title: "Tools",
        description: "Tools I use throughout my development workflow.",
        icon: GitBranch,
        skills: [
            { name: "Git & GitHub", icon: GitBranch },
            { name: "VS Code", icon: Code2 },
            { name: "Figma", icon: PenTool },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const SkillSection = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-28 px-4 bg-secondary/20"
        >
            {/* Background decoration */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

            <div className="relative container mx-auto max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        My Toolkit
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Skills &{" "}
                        <span className="text-primary">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                        Technologies and tools I use to design, develop,
                        and build modern web experiences.
                    </p>
                </motion.div>

                {/* Skill Groups */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                            <motion.div
                                key={group.title}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="
                                    group relative overflow-hidden
                                    rounded-2xl
                                    border border-border/50
                                    bg-card/60
                                    backdrop-blur-xl
                                    p-7
                                    shadow-lg
                                    transition-all duration-300
                                    hover:border-primary/40
                                    hover:shadow-primary/10
                                "
                            >
                                {/* Glow */}
                                <div
                                    className="
                                        absolute -top-20 -right-20
                                        w-40 h-40
                                        rounded-full
                                        bg-primary/10
                                        blur-3xl
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity duration-500
                                    "
                                />

                                <div className="relative">

                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="
                                            flex items-center justify-center
                                            w-12 h-12
                                            rounded-xl
                                            bg-primary/10
                                            text-primary
                                            border border-primary/10
                                        ">
                                            <GroupIcon size={23} />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                {group.title}
                                            </h3>

                                            <div className="w-8 h-0.5 bg-primary mt-2 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                                        {group.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="space-y-3">
                                        {group.skills.map((skill) => {
                                            const SkillIcon = skill.icon;

                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="
                                                        flex items-center gap-3
                                                        p-3
                                                        rounded-xl
                                                        border border-border/40
                                                        bg-background/30
                                                        transition-all duration-300
                                                        group/item
                                                        hover:border-primary/30
                                                        hover:bg-primary/5
                                                    "
                                                >
                                                    <div className="
                                                        flex items-center justify-center
                                                        w-9 h-9
                                                        rounded-lg
                                                        bg-secondary/70
                                                        text-muted-foreground
                                                        transition-colors
                                                        group-hover/item:text-primary
                                                    ">
                                                        <SkillIcon size={17} />
                                                    </div>

                                                    <span className="
                                                        text-sm font-medium
                                                        transition-colors
                                                        group-hover/item:text-primary
                                                    ">
                                                        {skill.name}
                                                    </span>

                                                    <div className="ml-auto">
                                                        <span className="
                                                            block w-1.5 h-1.5
                                                            rounded-full
                                                            bg-primary/50
                                                            group-hover/item:bg-primary
                                                        " />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        Constantly learning and improving my{" "}
                        <span className="text-primary font-medium">
                            development skills.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};