import type { TechnicalSkillInterface } from "../interface/technical_skill.interface";
import { api } from "./api";

export const technicalSkillService = {
  async getAll(): Promise<TechnicalSkillInterface[]> {
    const response = await api.get<unknown>("/technical-skill");
    if (!Array.isArray(response.data)) {
      throw new TypeError("Expected /technical-skill to return an array.");
    }
    return response.data;
  },

  async getById(id: string): Promise<TechnicalSkillInterface> {
    const response = await api.get<TechnicalSkillInterface>(`/technical-skill/${encodeURIComponent(id)}`);
    return response.data;
  },
};
