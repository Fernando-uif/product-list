import { create } from "zustand";
import { persist } from "zustand/middleware";

import { PreviewModal } from "../../interfaces/cart/previewModal.interface";

export const useToggleStore = create<PreviewModal>()(
  persist(
    (set) => ({
      isOpen: false,
      setToggle(active) {
        set({ isOpen: active });
      },
   
    }),

    {
      name: "dessert-cart",
      //   skipHydration: true,
      // evita que tengamos problema de que salga el error, pero tenemos que
    }
  )
);
