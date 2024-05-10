import {configureStore} from '@reduxjs/toolkit';
import navigationActiveSlice from "./navigationActiveSlice";
import sliderActiveSlice from "./sliderActiveSlice";
import categoriesActiveSlice from "./categoriesActiveSlice";
import sizeSlice from "./sizeSlice";
import navigationShopActiveSlice from "./navigationShopActiveSlice";

export const store = configureStore({
    reducer:{
        arrayNavigationLink:navigationActiveSlice,
        sliderActiveSlice:sliderActiveSlice,
        categoriesActiveSlice:categoriesActiveSlice,
        sizeSlice:sizeSlice,
        navigationShopActiveSlice:navigationShopActiveSlice
    }
})


