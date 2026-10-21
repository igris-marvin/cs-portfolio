import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, Rocket, Calendar } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import TechSlider from "../components/projects_comps/TechSlider";
// import CurrentlyBuilding from "../components/projects_comps/CurrentlyBuilding";
import ScrollToTop from "../components/home_comps/ScrollToTop";
import { useProjectsPageData } from "../hooks/useProjectsPageData";


export const ProjectsPage = () => {

    const {
        projects,
        hasMoreProjects,
        showAll,
        toggleShowAll,
        techStack,
        timeline,
    } = useProjectsPageData();

    return (
        <>
            <main className="min-h-screen pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Rocket size={16} className="text-primary" />
                            <span className="text-sm text-muted-foreground">Completed</span>
                        </motion.div> */}
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient-cosmic">Projects</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A collection of projects that showcase my technical expertise,
                            problem-solving abilities, and passion for building impactful solutions.
                        </p>
                    </motion.div>

                    {/* Currently Building Section */}
                    {/* <CurrentlyBuilding /> */}

                    {/* Projects Grid */}
                    <section className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 mb-6">
                                <Rocket size={16} className="text-primary" />
                                <span className="text-sm text-muted-foreground">Completed</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Completed <span className="text-gradient-cosmic">Projects</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Projects that i had a part as a developing in collaboration.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnimatePresence>
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        detailed
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {hasMoreProjects && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-center mt-10"
                            >
                                <button
                                    onClick={toggleShowAll}
                                    className="flex items-center gap-2 px-6 py-3 rounded-md light-card hover:border-primary/30 transition-all group"
                                >
                                    <span>{showAll ? "Show Less" : "Show All Projects"}</span>
                                    {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </motion.div>
                        )}
                    </section>

                    {/* Tech Stack Section */}
                    <section className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 mb-6">
                                <Sparkles size={16} className="text-primary" />
                                <span className="text-sm text-muted-foreground">Technologies Mastered</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Tech <span className="text-gradient-cosmic">Stack</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                I am proficient in a wide range of modern technologies, continuously expanding my expertise.
                            </p>
                        </motion.div>

                        {/* Tech Thumbs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-5 py-2.5 rounded-md light-card text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default border border-gray-200 bg-gray-50"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        {/* Tools Slider */}
                        <TechSlider />
                    </section>

                    {/* EXPERIMENTAL ZONE */}
                    {/* <section className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 mb-6">
                                <Beaker size={16} className="text-primary" />
                                <span className="text-sm text-muted-foreground">Under Development</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Experimental <span className="text-gradient-cosmic">Zone</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Here I explore compiler trade-offs, reactive patterns, and UI/UX experiments.
                                These aren't production-ready, but they reflect my curiosity and technical depth.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {experimentalProjects.map((project, index) => (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="light-card p-5 rounded-md hover:border-primary/30 transition-all"
                                >
                                    <h3 className="font-display font-semibold mb-2">{project.name}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 text-xs rounded-sm bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section> */}

                    {/* Tech Stack Timeline - No Accordion */}
                    <section>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Learning <span className="text-gradient-cosmic">Journey</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                My evolution as a developer through different phases of growth.
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="timeline-rail" aria-hidden="true" />

                                <div className="space-y-8">
                                    {timeline.map((phase, index) => (
                                        <motion.div
                                            key={phase.period}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                            className="relative"
                                        >
                                            {/* Timeline dot */}
                                            <div className="timeline-marker" aria-hidden="true" />

                                            <div className="md:ml-20 light-card p-6 rounded-md hover:border-primary/30 transition-all border border-gray-200 bg-gray-50">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-md bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-pink-500 bg-pink-50">
                                                            <phase.icon size={20} className="text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-display font-semibold text-lg">{phase.period}</h3>
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                <Calendar size={14} />
                                                                <span>{phase.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground mb-4">{phase.description}</p>

                                                <div className="flex flex-wrap gap-2">
                                                    {phase.items.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="px-3 py-1.5 text-sm rounded-sm bg-muted/50 text-pink-500 border border-pink-400 bg-pink-50 font-bold"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Scroll to Top */}
                <ScrollToTop />
            </main>
        </>
    );
};
