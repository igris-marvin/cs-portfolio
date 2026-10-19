import type { TechnicalSkillInterface } from "./technical_skill.interface";

export interface JourneyInterface {
  id: string;
  icon: string | null;
  institution: string;
  start_year: number;
  end_year: number | null;
  description: string | null;
  technicalSkills: TechnicalSkillInterface[];
}
