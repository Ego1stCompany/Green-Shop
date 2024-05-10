import { createSlice } from '@reduxjs/toolkit';

const navigationShopArray = [
    {
        id:1,
        text:'All Plants',
        link:'/',
        active:true,
    },
    {
        id:2,
        text:'New Arrivals',
        link:'/',
        active:false,
    },
    {
        id:3,
        text:'Sale',
        link:'/',
        active:false,
    },
]


const navigationShopActiveSlice = createSlice({
    name: "navigationActiveSlice",
    initialState: {
        navigationShopArray:navigationShopArray,
    },
    reducers:{
        activeLink(state, action){
            state.navigationShopArray.map(item => item.id === action.payload.id ? item.active = true : item.active = false);
        }
    }
})

export const {activeLink} = navigationShopActiveSlice.actions;
export default  navigationShopActiveSlice.reducer