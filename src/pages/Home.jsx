
import StarBackground from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/Projects";
import { ContactSection } from "../components/ContactSection";


export default function Home() {
    return (
    <div>
        <StarBackground />
        <NavBar />
        <main>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </main>
    </div>
    );
};