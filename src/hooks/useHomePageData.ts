import { useData } from "../context/data-context";
import type { ProjectInterface } from "../interface/project.interface";
import type { ProjectDetailsProps } from "../components/ProjectCard";
import ezbyProfileImage from "../assets/images/projects/ezby_profile_image.svg";
import pulseAppProfileImage from "../assets/images/projects/pulse_app_profile_image.webp";
import saniProfileImage from "../assets/images/projects/sani_enterprise_profile_image.webp";

const fallbackProjects: ProjectDetailsProps[] = [
  {
    id: "1",
    title: "Sani Enterprise (Voluntary Project)",
    description: "A Full-stack e-commerce CMS project for selling furniture on the internet.",
    image: saniProfileImage,
    tags: ["React JS", "TypeScript", "SpringBoot", "MySQL"],
    duration: "3 months",
    year: "2024",
    githubUrl: "https://github.com/igris-marvin/sani.git",
  },
  {
    id: "2",
    title: "Pulse App (Tertiary Project)",
    description: "An emotion regulator app with an admin dashboard, music player and Arduino that reads a client's pulse.",
    image: pulseAppProfileImage,
    tags: ["PHP", "HTML", "Arduino", "MySQL"],
    duration: "4 months",
    year: "2024",
  },
  {
    id: "3",
    title: "Eazy-Bookify",
    description: "A full-stack web application with booking services for properties, vehicles and flights.",
    image: ezbyProfileImage,
    tags: ["React JS", "SpringBoot", "Java", "Firebase"],
    duration: "12 months",
    year: "2024 - 2025",
  },
];

const toProjectCard = (project: ProjectInterface, index: number): ProjectDetailsProps => {
  const fallback = fallbackProjects[index % fallbackProjects.length];
  const tags = project.technicalSkills?.map((skill) => skill.name).filter(Boolean) ?? [];
  const dateStart = project.start_date ? new Date(project.start_date).getFullYear() : undefined;
  const dateEnd = project.end_date ? new Date(project.end_date).getFullYear() : undefined;

  return {
    id: project.id,
    title: project.title || fallback.title,
    description: project.description || fallback.description,
    image: project.image || fallback.image,
    tags: tags.length > 0 ? tags : fallback.tags,
    duration: project.duration_in_months ? `${project.duration_in_months} months` : undefined,
    year: dateStart ? `${dateStart}${dateEnd && dateEnd !== dateStart ? ` - ${dateEnd}` : ""}` : undefined,
    liveUrl: project.site || undefined,
    githubUrl: project.github_link || undefined,
  };
};

export const useHomePageData = () => {
  const { about, projects } = useData();
  const hasProjects = projects.length > 0;

  return {
    occupation: about?.occupation?.trim() || "Software Developer",
    featuredProjects: hasProjects
      ? projects.slice(0, 3).map(toProjectCard)
      : fallbackProjects,
  };
};
