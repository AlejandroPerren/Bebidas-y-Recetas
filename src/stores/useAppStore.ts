import {create} from 'zustand'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { createFavouritesSlice, FavouritesSliceType } from './favouritesSlice'

export const useAppStore = create<RecipeSliceType & FavouritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavouritesSlice(...a),
})))