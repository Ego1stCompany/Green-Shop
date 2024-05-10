import {createSlice} from "@reduxjs/toolkit";

const sizeArray = [
    {
        id:1,
        text:'Small',
        count:119
    },
    {
        id:2,
        text:'Medium',
        count:86
    },
    {
        id:3,
        text:'Large',
        count:78
    }
]

const sizeSlice = createSlice({
    name: 'sizeSlice',
    initialState: {
        sizeArray: sizeArray,
    },
    reducers:{}
})

export default sizeSlice.reducer