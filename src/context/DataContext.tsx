import { useEffect, useState, type PropsWithChildren } from "react";
import { DataContext, type DataContextValue, type ResourceKey } from "./data-context";
import { aboutService } from "../services/about.service";
import { contactService } from "../services/contact.service";
import { contactDetailService } from "../services/contact-detail.service";
import { journeyService } from "../services/journey.service";
import { projectService } from "../services/project.service";
import { socialDataService } from "../services/social-data.service";
import { technicalSkillService } from "../services/technical-skill.service";

const resultValue = <T,>(
  result: PromiseSettledResult<T>,
  key: ResourceKey,
  errors: Partial<Record<ResourceKey, string>>,
): T | undefined => {
  if (result.status === "fulfilled") {
    return result.value;
  }

  errors[key] = result.reason instanceof Error ? result.reason.message : String(result.reason);
  return undefined;
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Omit<DataContextValue, "isLoading" | "errors">>({
    about: null,
    contacts: [],
    contactDetails: [],
    journeys: [],
    projects: [],
    socialData: [],
    technicalSkills: [],
  });
  const [errors, setErrors] = useState<Partial<Record<ResourceKey, string>>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const results = await Promise.allSettled([
        aboutService.getAll(),
        contactService.getAll(),
        contactDetailService.getAll(),
        journeyService.getAll(),
        projectService.getAll(),
        socialDataService.getAll(),
        technicalSkillService.getAll(),
      ]);

      if (!isMounted) {
        return;
      }

      const nextErrors: Partial<Record<ResourceKey, string>> = {};
      const [
        about,
        contacts,
        contactDetails,
        journeys,
        projects,
        socialData,
        technicalSkills,
      ] = results;

      setData({
        about: resultValue(about, "about", nextErrors) ?? null,
        contacts: resultValue(contacts, "contact", nextErrors) ?? [],
        contactDetails: resultValue(contactDetails, "contactDetail", nextErrors) ?? [],
        journeys: resultValue(journeys, "journey", nextErrors) ?? [],
        projects: resultValue(projects, "project", nextErrors) ?? [],
        socialData: resultValue(socialData, "socialData", nextErrors) ?? [],
        technicalSkills: resultValue(technicalSkills, "technicalSkill", nextErrors) ?? [],
      });
      setErrors(nextErrors);
      setIsLoading(false);
    };

    void fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DataContext.Provider value={{ ...data, errors, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
