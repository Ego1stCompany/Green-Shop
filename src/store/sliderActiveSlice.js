import {createSlice} from "@reduxjs/toolkit";
//images
import FlowersIcon from '../assets/flovers-slider.svg'

const sliderActiveArray = [
    {
        id: 1,
        image: FlowersIcon,
        active: false,
    },
    {
        id: 2,
        image: FlowersIcon,
        active: true,
    },
    {
        id: 3,
        image: FlowersIcon,
        active: false,
    }
]

const sliderActiveSlice = createSlice({
    name: "sliderActive",
    initialState: {
        sliderActiveArray: sliderActiveArray
    },
    reducers: {
        activePointSlider(state, action) {
            state.sliderActiveArray.map(item => item.id === action.payload.id ? item.active = true : item.active = false);
        }
    }
})

export const {activePointSlider} = sliderActiveSlice.actions;
export default sliderActiveSlice.reducer;