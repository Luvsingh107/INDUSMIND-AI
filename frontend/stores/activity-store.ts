import { create } from "zustand";

export interface Activity {
  id: string;
  type: string;
  description: string;
  time: string;
}

interface ActivityStore {
  activities: Activity[];
  addActivity: (activity: Omit<Activity, "id" | "time">) => void;
  clearActivities: () => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],

  addActivity: (activity) =>
    set((state) => ({
      activities: [
        {
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString(),
          ...activity,
        },
        ...state.activities,
      ].slice(0, 100),
    })),

  clearActivities: () =>
    set({
      activities: [],
    }),
}));