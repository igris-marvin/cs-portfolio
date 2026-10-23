import { useState } from "react";
import { useData } from "../context/data-context";
import type { JourneyInterface } from "../interface/journey.interface";
import type { ProjectInterface } from "../interface/project.interface";
import type { ProjectDetailsProps } from "../components/ProjectCard";
import { Code2, GraduationCap, Layers, type LucideIcon } from "lucide-react";
import ezbyProfileImage from "../assets/images/projects/ezby_profile_image.svg";
import pulseAppProfileImage from "../assets/images/projects/pulse_app_profile_image.webp";
import saniProfileImage from "../assets/images/projects/sani_enterprise_profile_image.webp";

interface TimelineEntry {
  period: string;
  date: string;
  icon: LucideIcon;
  items: string[];
  description: string;
}

const fallbackProjects: ProjectDetailsProps[] = [
  {
    id: "1",
    title: "Sani Enterprise (Voluntary Project)",
    description: "A Full-stack e-commerce CMS project for selling furniture on the internet.",
    image: saniProfileImage,
    tags: ["React JS", "TypeScript", "SpringBoot", "MySQL"],
    duration: "3 months",
    year: "2024",
    date: "Feb 2024 - Apr 2024",
    liveUrl: "#",
    githubUrl: "https://github.com/igris-marvin/sani",
    codeLanguage: "java",
    codeSnippet: `@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public Flux<List<Product>> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/create")
    public Mono<Product> createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }
}`,
  },
  {
    id: "2",
    title: "Pulse App",
    description: "An emotion regulator app with an admin dashboard, music player and Arduino that reads a client's pulse.",
    image: pulseAppProfileImage,
    tags: ["PHP", "HTML", "Arduino", "MySQL"],
    duration: "4 months",
    year: "2024",
    date: "Feb 2024 - May 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Eazy-Bookify",
    description: "A full-stack web application with booking services for properties, vehicles and flights.",
    image: ezbyProfileImage,
    tags: ["React JS", "SpringBoot", "Socket", "Firebase"],
    duration: "4 months",
    year: "2024 - 2025",
    date: "Aug 2024 - July 2025",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const fallbackTechStack = [
  "Java", "JavaScript", "TypeScript", "PHP", "SpringBoot", "React JS", "Node JS", "Express JS",
  "MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Firebase", "Visual Studio Code", "IntelliJ IDEA",
  "GitHub", "Postman",
];

const fallbackTimeline: TimelineEntry[] = [
  {
    period: "University",
    date: "2021 - 2024",
    icon: GraduationCap,
    items: ["Java", "OracleDB", "OOP fundamentals", "Data Structures", "Algorithms"],
    description: "Built the foundation of computer science knowledge through rigorous coursework and hands-on projects.",
  },
  {
    period: "Work Integrated Learning",
    date: "2024 - 2025",
    icon: Code2,
    items: ["React JS", "Node.js", "TypeScript", "Firebase", "Asynchronous Programming", "Reactive Programming"],
    description: "Learned modern web technologies to prepare for real-world development challenges.",
  },
  {
    period: "Personal Projects",
    date: "2024 - Present",
    icon: Layers,
    items: ["TypeScript", "UI/UX Design", "Responsive Design", "UI/UX Libraries"],
    description: "Refined skills through building and shipping personal projects with production-level quality.",
  },
];

const toProjectCard = (project: ProjectInterface, index: number): ProjectDetailsProps => {
  const fallback = fallbackProjects[index % fallbackProjects.length];
  const tags = project.technicalSkills?.map((skill) => skill.name).filter(Boolean) ?? [];
  const startDate = project.start_date ? new Date(project.start_date) : null;
  const endDate = project.end_date ? new Date(project.end_date) : null;
  const formatDate = (date: Date) => date.toLocaleString("en", { month: "short", year: "numeric" });

  return {
    id: project.id,
    title: project.title || fallback.title,
    description: project.description || fallback.description,
    image: project.image || fallback.image,
    tags: tags.length > 0 ? tags : fallback.tags,
    duration: project.duration_in_months ? `${project.duration_in_months} months` : undefined,
    year: startDate ? `${startDate.getFullYear()}${endDate && endDate.getFullYear() !== startDate.getFullYear() ? ` - ${endDate.getFullYear()}` : ""}` : undefined,
    date: startDate ? `${formatDate(startDate)}${endDate ? ` - ${formatDate(endDate)}` : ""}` : undefined,
    liveUrl: project.site || undefined,
    githubUrl: project.github_link || undefined,
    codeSnippet: project.code_snippet || undefined,
    codeLanguage: project.code_language || undefined,
  };
};

const toTimelineEntry = (journey: JourneyInterface, index: number): TimelineEntry => {
  const fallback = fallbackTimeline[index % fallbackTimeline.length];
  const endYear = journey.end_year ?? "Present";
  const items = journey.technicalSkills?.map((skill) => skill.name).filter(Boolean) ?? [];

  return {
    period: journey.institution || fallback.period,
    date: `${journey.start_year} - ${endYear}`,
    icon: fallback.icon,
    items: items.length > 0 ? items : fallback.items,
    description: journey.description?.trim() || fallback.description,
  };
};

export const useProjectsPageData = () => {
  const { projects, technicalSkills, journeys } = useData();
  const [showAll, setShowAll] = useState(false);
  const allProjects = projects.length > 0 ? projects.map(toProjectCard) : fallbackProjects;
  const skills = technicalSkills.map((skill) => skill.name).filter(Boolean);

  return {
    projects: showAll ? allProjects : allProjects.slice(0, 4),
    hasMoreProjects: allProjects.length > 4,
    showAll,
    toggleShowAll: () => setShowAll((current) => !current),
    techStack: skills.length > 0 ? skills : fallbackTechStack,
    timeline: journeys.length > 0
      ? journeys.map(toTimelineEntry)
      : fallbackTimeline,
  };
};
