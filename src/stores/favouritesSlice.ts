import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { NotificationSliceType } from "./notificationSlice";

export type FavouritesSliceType = {
  favorites: Recipe[];
  handleClickFavourite: (recipe: Recipe) => void;
  favoriteExist: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavouritesSlice: StateCreator<
  FavouritesSliceType & NotificationSliceType,
  [],
  [],
  FavouritesSliceType
> = (set, get) => ({
  favorites: [],

  handleClickFavourite: (recipe) => {
    if (get().favoriteExist(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      get().showNotification({ text: "Se eliminó de favoritos", error: false });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      get().showNotification({ text: "Se agregó a favoritos", error: false });
    }

    const updatedFavorites = get().favorites;
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },

  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
