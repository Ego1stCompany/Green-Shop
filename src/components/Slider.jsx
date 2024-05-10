import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activePointSlider} from "../store/sliderActiveSlice";
//components
import SliderItem from "./SliderItem";

const Slider = () => {

    const listArray = useSelector((state) => state.sliderActiveSlice.sliderActiveArray);
    const dispatch = useDispatch();

    return (
        <section className={'grid grid-cols-1 gap-1 bg-cart-white py-4 overflow-hidden'}>

            {listArray.map(item => <SliderItem key={item.id} image={item.image} active={item.active}/>)}

            <div className={'flex gap-2 justify-center'}>
                {listArray.map(item =>
                    <span
                        key={item.id}
                        className={`p-2 bg-green rounded-full cursor-pointer ${item.active === true ? '' : 'opacity-20' } hover:bg-black transition-all ease-in-out duration-300`}
                        onClick={() => dispatch(activePointSlider({id:item.id}))}
                    ></span>
                )}
            </div>
        </section>
    );
};

export default Slider;