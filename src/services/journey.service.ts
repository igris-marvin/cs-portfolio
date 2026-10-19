import type { JourneyInterface } from "../interface/journey.interface";
import { api } from "./api";

export const journeyService = {
  async getAll(): Promise<JourneyInterface[]> {
    const response = await api.get<JourneyInterface[]>("/journey");
    return response.data;
  },

  async getById(id: string): Promise<JourneyInterface> {
    const response = await api.get<JourneyInterface>(`/journey/${encodeURIComponent(id)}`);
    return response.data;
  },
};
