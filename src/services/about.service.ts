import type { AboutInterface } from "../interface/about.interface";
import { api } from "./api";

export const aboutService = {
  async getAll(): Promise<AboutInterface | null> {
    const response = await api.get<{ response: AboutInterface[] }>("/about");
    return response.data.response[0] ?? null;
  },

  async getById(id: string): Promise<AboutInterface> {
    const response = await api.get<AboutInterface>(`/about/${encodeURIComponent(id)}`);
    return response.data;
  },
};
