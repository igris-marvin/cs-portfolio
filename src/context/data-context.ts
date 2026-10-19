import { createContext, useContext } from "react";
import type { AboutInterface } from "../interface/about.interface";
import type { ContactMessageInterface } from "../interface/contact.interface";
import type { ContactDetailInterface } from "../interface/contact_detail.interface";
import type { JourneyInterface } from "../interface/journey.interface";
import type { ProjectInterface } from "../interface/project.interface";
import type { SocialDataInterface } from "../interface/social_data.interface";
import type { TechnicalSkillInterface } from "../interface/technical_skill.interface";

export type ResourceKey =
  | "about"
  | "contact"
  | "contactDetail"
  | "journey"
  | "project"
  | "socialData"
  | "technicalSkill";

export interface DataContextValue {
  isLoading: boolean;
  errors: Partial<Record<ResourceKey, string>>;
  about: AboutInterface | null;
  contacts: ContactMessageInterface[];
  contactDetails: ContactDetailInterface[];
  journeys: JourneyInterface[];
  projects: ProjectInterface[];
  socialData: SocialDataInterface[];
  technicalSkills: TechnicalSkillInterface[];
}

export const DataContext = createContext<DataContextValue | undefined>(undefined);

export const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
