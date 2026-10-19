import type { ProjectInterface } from "../interface/project.interface";
import { api } from "./api";

export const projectService = {
  async getAll(): Promise<ProjectInterface[]> {
    const response = await api.get<ProjectInterface[]>("/project");
    return response.data;
  },

  async getById(id: string): Promise<ProjectInterface> {
    const response = await api.get<ProjectInterface>(`/project/${encodeURIComponent(id)}`);
    return response.data;
  },
};
