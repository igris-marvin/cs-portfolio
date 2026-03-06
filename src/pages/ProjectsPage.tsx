import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, Rocket, Beaker, Calendar, GraduationCap, Briefcase, Code2, Layers } from "lucide-react";
import ProjectCard, { type ProjectDetailsProps } from "../components/ProjectCard";
import TechSlider from "../components/projects_comps/TechSlider";
import CurrentlyBuilding from "../components/projects_comps/CurrentlyBuilding";
import ScrollToTop from "../components/home_comps/ScrollToTop";


export const ProjectsPage = () => {

    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Rocket size={16} className="text-primary" />
                            <span className="text-sm text-muted-foreground">Shipped & Deployed</span>
                        </motion.div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            My <span className="text-gradient-cosmic">Projects</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A curated collection of projects that showcase my technical expertise,
                            problem-solving abilities, and passion for building impactful solutions.
                        </p>
                    </motion.div>

                    {/* Currently Building Section */}
                    <CurrentlyBuilding />

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
                                <span className="text-sm text-muted-foreground">Shipped & Deployed</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Completed <span className="text-gradient-cosmic">Projects</span>
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Production-ready applications that are live and serving users.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnimatePresence>
                                {displayedProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        index={index}
                                        detailed
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {allProjects.length > 4 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-center mt-10"
                            >
                                <button
                                    onClick={() => setShowAll(!showAll)}
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
                                Proficient in a wide range of modern technologies, continuously expanding my expertise.
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
                                    className="px-5 py-2.5 rounded-md light-card text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        {/* Tools Slider */}
                        <TechSlider />
                    </section>

                    {/* Experimental Zone */}
                    <section className="mb-20">
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
                    </section>

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
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block" />

                                <div className="space-y-8">
                                    {timelineData.map((phase, index) => (
                                        <motion.div
                                            key={phase.period}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                            className="relative"
                                        >
                                            {/* Timeline dot */}
                                            <div className="absolute left-6 top-6 w-4 h-4 rounded-sm bg-primary hidden md:block" />

                                            <div className="md:ml-20 light-card p-6 rounded-md hover:border-primary/30 transition-all">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
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
                                                            className="px-3 py-1.5 text-sm rounded-sm bg-muted/50 border border-border"
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
    )
}


const allProjects: ProjectDetailsProps[] = [
    {
        id: "1",
        title: "Cloud Dashboard",
        description: "A real-time analytics dashboard for monitoring cloud infrastructure with advanced visualizations and alerting systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: ["React", "TypeScript", "D3.js", "AWS", "WebSocket"],
        duration: "3 months",
        year: "2024",
        date: "Jan 2024 - Mar 2024",
        liveUrl: "#",
        githubUrl: "#",
        codeSnippet: `const useRealTimeData = (endpoint: string) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket(endpoint);
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    return () => ws.close();
  }, [endpoint]);
  
  return data;
};`,
    },
    {
        id: "2",
        title: "E-Commerce Platform",
        description: "Full-stack marketplace with payment processing, inventory management, and comprehensive admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "Prisma"],
        duration: "6 months",
        year: "2024",
        date: "Jun 2023 - Dec 2023",
        liveUrl: "#",
        githubUrl: "#",
        codeSnippet: `async function processPayment(cart: CartItem[]) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: cart.map(item => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    mode: 'payment',
  });
  return session;
}`,
    },
    {
        id: "3",
        title: "AI Chat Assistant",
        description: "Intelligent conversational AI with natural language processing, context awareness, and memory persistence.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
        tags: ["Python", "OpenAI", "FastAPI", "React", "LangChain"],
        duration: "4 months",
        year: "2023",
        date: "Aug 2023 - Nov 2023",
        liveUrl: "#",
        githubUrl: "#",
        codeSnippet: `async def generate_response(
    query: str, 
    context: list[Message]
) -> str:
    response = await openai.chat.completions.create(
        model="gpt-4",
        messages=[*context, {"role": "user", "content": query}],
        temperature=0.7,
    )
    return response.choices[0].message.content`,
    },
    {
        id: "4",
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        duration: "2 months",
        year: "2023",
        date: "May 2023 - Jul 2023",
        liveUrl: "#",
        githubUrl: "#",
        codeSnippet: `socket.on('task:update', (task: Task) => {
  dispatch({
    type: 'UPDATE_TASK',
    payload: task,
  });
});`,
    },
    {
        id: "5",
        title: "Portfolio Website",
        description: "Personal portfolio with cosmic space theme, smooth animations, and interactive elements.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
        tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
        duration: "1 month",
        year: "2024",
        date: "Dec 2024",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: "6",
        title: "API Gateway Service",
        description: "High-performance API gateway with rate limiting, caching, and request transformation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        tags: ["Go", "Redis", "Docker", "Kubernetes"],
        duration: "5 months",
        year: "2023",
        date: "Jan 2023 - May 2023",
        liveUrl: "#",
        githubUrl: "#",
    },
];

const techStack = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", "Go",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Kubernetes",
];

const experimentalProjects = [
    { name: "WASM Compiler", tech: ["Rust", "WebAssembly"] },
    { name: "Reactive State Engine", tech: ["Signals", "Fine-grained Reactivity"] },
    { name: "AI Code Review Bot", tech: ["LLM", "AST Parsing"] },
    { name: "3D Portfolio v2", tech: ["Three.js", "React Fiber"] },
];

const timelineData = [
    {
        period: "University",
        date: "2015 - 2019",
        icon: GraduationCap,
        items: ["Java", "OracleDB", "OOP fundamentals", "Data Structures"],
        description: "Built the foundation of computer science knowledge through rigorous coursework and hands-on projects.",
    },
    {
        period: "Internship Prep",
        date: "2019 - 2020",
        icon: Code2,
        items: ["React", "Node.js", "Firebase", "Async patterns", "REST APIs"],
        description: "Self-taught modern web technologies to prepare for real-world development challenges.",
    },
    {
        period: "Personal Projects",
        date: "2020 - 2022",
        icon: Layers,
        items: ["TypeScript", "UI/UX polish", "Edge-case handling", "Testing"],
        description: "Refined skills through building and shipping personal projects with production-level quality.",
    },
    {
        period: "Professional",
        date: "2022 - Present",
        icon: Briefcase,
        items: ["Cloud Architecture", "DevOps", "System Design", "Leadership"],
        description: "Expanded into architecture and team leadership while staying hands-on with modern tech stack.",
    },
];