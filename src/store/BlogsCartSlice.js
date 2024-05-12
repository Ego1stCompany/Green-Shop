import {createSlice} from '@reduxjs/toolkit';
//images
import flower from '../assets/flower-3.png'

const BlogsCartArray = [
    {
        id: 1,
        image:flower,
        date:12,
        read:6,
        title:'Cactus & Succulent Care Tips',
        text:'Cacti are succulents are easy care plants for any home or patio.'
    },
    {
        id: 2,
        image:flower,
        date:12,
        read:6,
        title:'Cactus & Succulent Care Tips',
        text:'Cacti are succulents are easy care plants for any home or patio.'
    },
    {
        id: 3,
        image:flower,
        date:12,
        read:6,
        title:'Cactus & Succulent Care Tips',
        text:'Cacti are succulents are easy care plants for any home or patio.'
    },
    {
        id: 4,
        image:flower,
        date:12,
        read:6,
        title:'Cactus & Succulent Care Tips',
        text:'Cacti are succulents are easy care plants for any home or patio.'
    }
]


const BlogsCartSlice = createSlice({
    name: 'blogs',
    initialState: {
        BlogsCartArray:BlogsCartArray
    },
    reducers:{}
})

export default BlogsCartSlice.reducer