import type { JourneyInterface } from "./journey.interface";
import type { ProjectInterface } from "./project.interface";

export interface TechnicalSkillInterface {
  id: string;
  name: string;
  category: string;
  description: string | null;
  projects: ProjectInterface[];
  journeys: JourneyInterface[];
}
