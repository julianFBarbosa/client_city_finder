import { create } from "zustand";

export const useStateStore = create((set) => ({
  state: "",
  updateState: (state) => set(() => ({ state: state })),
}));
