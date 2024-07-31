import { create } from "zustand";
import { persist } from "zustand/middleware";

import { PreviewModal } from "../../interfaces/cart/previewModal.interface";

export const useToggleStore = create<PreviewModal>()(
  persist(
    (set, get) => ({
      isOther: false,

      setToggle(active) {
        set({ isOther: active });
      },
      getIsOpen() {
        const { isOther } = get();
        return isOther;
      },
    }),

    {
      name: "dessert-cart",
      //   skipHydration: true,
      // evita que tengamos problema de que salga el error, pero tenemos que
    }
  )
);
