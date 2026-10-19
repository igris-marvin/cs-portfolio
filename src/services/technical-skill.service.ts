import type { TechnicalSkillInterface } from "../interface/technical_skill.interface";
import { api } from "./api";

export const technicalSkillService = {
  async getAll(): Promise<TechnicalSkillInterface[]> {
    const response = await api.get<TechnicalSkillInterface[]>("/technical-skill");
    return response.data;
  },

  async getById(id: string): Promise<TechnicalSkillInterface> {
    const response = await api.get<TechnicalSkillInterface>(`/technical-skill/${encodeURIComponent(id)}`);
    return response.data;
  },
};
