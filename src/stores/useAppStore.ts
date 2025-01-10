import {create} from 'zustand'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'
import { devtools } from 'zustand/middleware'
import { createFavouritesSlice, FavouritesSliceType } from './favouritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

export const useAppStore = create<RecipeSliceType & FavouritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavouritesSlice(...a),
    ...createNotificationSlice(...a),
})))