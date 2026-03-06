import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import background_image from "../assets/images/background_image.jpg"
import ezby_profile_image from "../assets/images/projects/ezby_profile_image.svg"
import pulse_app_profile_image from "../assets/images/projects/pulse_app_profile_image.png"
import sani_profile_image from "../assets/images/projects/sani_enterprise_profile_image.jpg"
import type { ProjectDetailsProps } from "../components/ProjectCard"
import ProjectCard from "../components/ProjectCard"
import SocialIcons from "../components/SocialIcons"
import ServicesSection from "../components/home_comps/ServicesSection"
import SkillsSection from "../components/home_comps/SkillsSection"
import StatsSection from "../components/home_comps/StatsSection"
import CTASection from "../components/home_comps/CTASection"
import CompanySlider from "../components/home_comps/CompanySlider"
import ScrollToTop from "../components/home_comps/ScrollToTop"
import { DisclaimerAlert } from "../components/temp_comps/DisclaimerAlert"

export const HomePage = () => {

    return (
        <>
            <main className="min-h-screen">

                {/* HERO [ SECTION ] */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

                    {/* BACKGROUND IMAGE */}
                    <div className="absolute inset-0">

                        <img
                            src={background_image}
                            alt="space background"
                            className="w-full h-full object-cover"
                        />

                        {/* GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-background" />

                    </div>

                    {/* CONTENT */}

                    <div className="relative z-10 mx-auto max-w-7x1 px-6 pt-60">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                                >
                                    <Sparkles size={16} className="text-pink-500" />
                                    <span className="text-sm text-white/90">Available for new projects</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="font-display text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                                >
                                    Hi, I'm Peter Malope
                                    {/* <span className="text-gradient-cosmic">Your Name</span> */}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl md:text-2xl font-semibold text-pink-500 drop-shadow-[0_2px_8px_rgba(224, 224, 224, 0.7)]"
                                >
                                    Software Developer
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg text-white/90 max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
                                >
                                    I craft elegant digital solutions that bridge creativity and technology.
                                    Specializing in full-stack development with a passion for clean code and
                                    exceptional user experiences.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <SocialIcons variant="hero" size="md" />
                                </motion.div>
                            </motion.div>

                            {/* Right - Empty space for background focus */}
                            <div className="hidden lg:block" />
                        </div>

                    </div>

                </section>

                {/* FEATURED [ PROJECTS ] */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Featured <span className="text-gradient-cosmic">Projects</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A selection of my most impactful work showcasing full-stack expertise
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                featuredProjects
                                    .map(
                                        (project, index) => (
                                            <ProjectCard
                                                key={project.id}
                                                project={project}
                                                index={index}
                                            />
                                        )
                                    )
                            }
                        </div>
                    </div>
                </section>

{/* DISCLAIMER ALERT BUTTON */}
                <DisclaimerAlert />

                {/* STATS SECTION */}
                <StatsSection />

                {/* SERVICES SECTION */}
                <ServicesSection />

                {/* SKILLS SECTION */}
                <SkillsSection />

                {/* COMPANIES SLIDER SECTION */}
                <CompanySlider />

                {/* CTA SECTION */}
                <CTASection />

                {/* SCROLL TO THE TOP BUTTON */}
                <ScrollToTop />
            </main>
        </>
    )
}

const featuredProjects: ProjectDetailsProps[] = [
    {
        id: "1",
        title: "Sani Enterprise (Voluntary Project)",
        description: "A Full-stack e-commerce CMS project for selling furniture on the internet.",
        image: sani_profile_image,
        tags: ["React JS", "TypeScript", "SpringBoot", "MySQL"],
        duration: "3 months",
        year: "2024",
        liveUrl: "",
        githubUrl: "https://github.com/igris-marvin/sani.git",
    },
    {
        id: "2",
        title: "Pulse App (Tertiary Project)",
        description: "An emotion regulator app with an admin dashboard, music player and Adruino that reads a client's pulse.",
        image: pulse_app_profile_image,
        tags: ["PHP", "HTML", "Arduino", "MySQL"],
        duration: "4 months",
        year: "2024",
        liveUrl: "",
        githubUrl: "",
        // githubUrl: "https://github.com/igris-marvin/pulse_app_repo.git",
    },
    {
        id: "3",
        title: "Eazy-Bookify",
        description: "A Full-stack Web Application with booking services for properties, vehicles and flights.",
        image: ezby_profile_image,
        tags: ["React JS", "SpringBoot", "Java", "Firebase"],
        duration: "12 months",
        year: "2024 - 2025",
        liveUrl: "",
        githubUrl: "",
    },
];