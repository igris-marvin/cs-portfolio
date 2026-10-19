import type { ContactMessageInterface } from "../interface/contact.interface";
import { api } from "./api";

export const contactService = {
  async getAll(): Promise<ContactMessageInterface[]> {
    const response = await api.get<ContactMessageInterface[]>("/contact");
    return response.data;
  },

  async getById(id: string): Promise<ContactMessageInterface> {
    const response = await api.get<ContactMessageInterface>(`/contact/${encodeURIComponent(id)}`);
    return response.data;
  },
};
