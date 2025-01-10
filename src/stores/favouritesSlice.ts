import {StateCreator} from 'zustand'
import { Recipe } from '../types'

export type FavouritesSliceType = {
    favorites: Recipe[],
    handleClickFavourite: (recipe: Recipe) => void,
    favoriteExist: (id: Recipe['idDrink']) => boolean,
    loadFromStorage : () => void
}

export const createFavouritesSlice: StateCreator<FavouritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavourite: (recipe) =>{
        if(get().favoriteExist(recipe.idDrink)){
            set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            })
        }else {
            set({
                favorites:[...get().favorites, recipe]
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }

})