import { create } from "zustand";
import { Repository } from "../hooks/types";
import { persist } from "zustand/middleware";

type favoritesReposIds = {
  favoritesReposIds: Repository["id"][];
  addFavoriteRepo: (id: Repository["id"]) => void;
  removeFavoriteRepo: (id: Repository["id"]) => void;
};

export const useFavoriteReposStore = create(
  persist<favoritesReposIds>(
    (set) => ({
      favoritesReposIds: [],
      addFavoriteRepo: (id: Repository["id"]) => {
        set((state) => ({
          favoritesReposIds: [...state.favoritesReposIds, id],
        }));
      },
      removeFavoriteRepo: (id: Repository["id"]) => {
        set((state) => ({
          favoritesReposIds: state.favoritesReposIds.filter(
            (repoId) => repoId !== id
          ),
        }));
      },
    }),
    {
      name: "favorite-repos",
    }
  )
);
