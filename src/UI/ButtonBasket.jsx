import React from 'react';
import BasketIcon from '../assets/basket.svg?react';

const ButtonBasket = () => {
    return (
        <button className={'relative'}>
            <BasketIcon/>
            <div className={'absolute top-[-6px] right-[-12px] bg-white rounded-full p-1'}>
                <span className={'bg-green text-white text-sm font-medium rounded-full flex items-center justify-center  w-4 h-4'}>
                   6
                </span>
            </div>
        </button>
    );
};

export default ButtonBasket;