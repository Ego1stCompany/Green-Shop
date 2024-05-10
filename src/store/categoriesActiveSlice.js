import {createSlice} from '@reduxjs/toolkit';

const CategoriesArray = [
    {
        id:1,
        text:'House Plants',
        count:33,
        active:true,
    },
    {
        id:2,
        text:'Potter Plants',
        count:12,
        active:false,
    },
    {
        id:3,
        text:'Seeds',
        count:65,
        active:false,
    },
    {
        id:4,
        text:'Small Plants',
        count:39,
        active:false,
    },
    {
        id:5,
        text:'Big Plants',
        count:23,
        active:false,
    },
    {
        id:6,
        text:'Succulents',
        count:17,
        active:false,
    },
    {
        id:7,
        text:'Trerrariums',
        count:19,
        active:false,
    },
    {
        id:8,
        text:'Gardening',
        count:13,
        active:false,
    },
    {
        id:9,
        text:'Accessories',
        count:18,
        active:false,
    }
]

const categoriesActiveSlice = createSlice({
    name: 'CategoriesActiveSlice',
    initialState: {
        CategoriesArray:CategoriesArray
    },
    reducers: {
        activeCategory(state, action) {
            state.CategoriesArray.map(item => item.id === action.payload.id ? item.active = true : item.active = false);
        }
    }
})

export const {activeCategory} = categoriesActiveSlice.actions;

export default categoriesActiveSlice.reducer