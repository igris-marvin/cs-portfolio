import type { TechnicalSkillInterface } from "./technical_skill.interface";

export interface ProjectInterface {
  id: string;
  title: string;
  image: string;
  gallery: string[] | null;
  duration_in_months: number | null;
  start_date: Date | null;
  end_date: Date | null;
  description: string;
  code_snippet: string | null;
  code_language?: string | null;
  github_link: string | null;
  site: string | null;
  my_role: string | null;
  technicalSkills: TechnicalSkillInterface[];
}
