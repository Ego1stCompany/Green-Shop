import React from 'react';
//components
import ButtonPages from "../UI/ButtonPages";

const SliderItem = ({image, active}) => {
    return (
        <div className={`grid grid-cols-2 gap-1 px-8 items-center ${active === true ? '' : 'hidden'}`}>
            <div className={'flex flex-col gap-2 items-start'}>
                <span className={'text-lg text-black uppercase'}>Welcome to GreenShop</span>
                <h1 className={'text-7xl font-bold uppercase text-black'}>Let’s Make a Better <span
                    className={'text-7xl uppercase text-green'}>Planet</span></h1>
                <p className={'text-sm text-black w-5/6'}>We are an online plant shop offering a wide range of cheap and
                    trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>

                <div className={'pt-5'}>
                    <ButtonPages text='shop now' uppercase={true}/>
                </div>
            </div>

            <div className={'flex justify-end'}>
                <img src={image} alt={image}/>
            </div>
        </div>
    );
};

export default SliderItem;