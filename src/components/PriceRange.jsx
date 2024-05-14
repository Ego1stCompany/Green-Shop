import React from 'react';
import Slider from '@mui/material/Slider';
import ButtonPages from "../UI/ButtonPages";

const PriceRange = () => {

    const CustomSliderStyles = {
        '& .MuiSlider-thumb': {
            color: "#46A358",
            padding: 1,
            borderColor: "white",
            borderWidth: 3,
            borderStyle: "solid",
        },
        '& .MuiSlider-track': {
            color: "#46A358"
        },
        '& .MuiSlider-rail': {
            color: "#46A358",
            opacity: 0.3
        },
        '& .MuiSlider-active': {
            color: "#46A358"
        }
    };

    const minDistance = 10;

    const [valueSlider, setValueSlider] = React.useState([39, 1230]);

    const handleFunction = (active, startValue, endValue) => {
        active === 0 ?
            setValueSlider([Math.min(startValue, 100 - minDistance), Math.min(startValue, 100 - minDistance) + minDistance])
            :
            setValueSlider([Math.max(endValue, minDistance) - minDistance, Math.max(endValue, minDistance)]);
    }

    const handleChange = (event, newValue, activeThumb) => {

        if(!Array.isArray(newValue)) return

        newValue[1] - newValue[0] < minDistance ? handleFunction(activeThumb, newValue[0], newValue[1]) : setValueSlider(newValue)
    }

    return (
        <div className={'flex flex-col gap-2'}>
            <h2 className={'text-2xl font-bold text-black'}>Price Range</h2>

            <Slider
                sx={CustomSliderStyles}
                value={valueSlider}
                min={0}
                max={2000}
                onChange={handleChange}
                disableSwap
            />

            <div className={'flex justify-start items-start gap-1'}>
                <span className={'text-xl text-black'}>Price:</span>
                <span className={'font-bold text-xl text-green'}>{`$${valueSlider[0]} - $${valueSlider[1]}`}</span>
            </div>

            <ButtonPages text={'Filter'} uppercase={false} style={'w-2/4'}/>
        </div>
    );
};

export default PriceRange;