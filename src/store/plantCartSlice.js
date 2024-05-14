import {createSlice} from "@reduxjs/toolkit";
//images
import flower from '../assets/flover-2.png'


const cartsArray = [
    {
        id: 1,
        image:flower,
        title:'summer cactus & succulents',
        text:' We are an online plant shop offering a wide range of cheap and trendy plants'
    },
    {
        id: 2,
        image:flower,
        title:'summer cactus & succulents',
        text:' We are an online plant shop offering a wide range of cheap and trendy plants'
    },
]

const plantCartSlice = createSlice({
    name: "plantCart",
    initialState:{
        cartsArray:cartsArray
    },
    reducers:{}
})


export default plantCartSlice.reducer



