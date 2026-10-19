import type { SocialDataInterface } from "../interface/social_data.interface";
import { api } from "./api";

export const socialDataService = {
  async getAll(): Promise<SocialDataInterface[]> {
    const response = await api.get<SocialDataInterface[]>("/social-data");
    return response.data;
  },

  async getById(id: string): Promise<SocialDataInterface> {
    const response = await api.get<SocialDataInterface>(`/social-data/${encodeURIComponent(id)}`);
    return response.data;
  },
};
