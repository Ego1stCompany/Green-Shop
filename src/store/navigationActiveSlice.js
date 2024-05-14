import { createSlice } from "@reduxjs/toolkit";

const arrayNavigationLink = [
    {
        id:1,
        text:'Home',
        link:'/',
        active:true,
    },
    {
        id:2,
        text:'Shop',
        link:'/shop',
        active:false,
    },
    {
        id:3,
        text:'Plant Care',
        link:'/plant_care',
        active:false,
    },
    {
        id:4,
        text:'Blogs',
        link:'/blogs',
        active:false,
    }
]

const navigationActiveSlice  = createSlice({
    name: "navigationShopActiveSlice",
    initialState: {
        arrayNavigationLink:arrayNavigationLink,
    },
    reducers:{
        activeLink(state, action){
            state.arrayNavigationLink.map(item => item.id === action.payload.id ? item.active = true : item.active = false);
        }
    }
})

export const {activeLink} = navigationActiveSlice.actions;
export default navigationActiveSlice.reducer
