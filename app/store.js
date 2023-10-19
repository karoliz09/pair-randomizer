import { create } from 'zustand'

export const useNamesStore = create((set) => ({
  names: 0,
  setNames: (names) => set(names),
}))