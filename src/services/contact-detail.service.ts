import type { ContactDetailInterface } from "../interface/contact_detail.interface";
import { api } from "./api";

export const contactDetailService = {
  async getAll(): Promise<ContactDetailInterface[]> {
    const response = await api.get<ContactDetailInterface[]>("/contact-detail");
    return response.data;
  },

  async getById(id: string): Promise<ContactDetailInterface> {
    const response = await api.get<ContactDetailInterface>(`/contact-detail/${encodeURIComponent(id)}`);
    return response.data;
  },
};
