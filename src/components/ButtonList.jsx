import React from 'react';
//images
import arrow from '../assets/arrow.png'

const ButtonList = () => {
    return (
        <div className={'flex gap-2 justify-end mt-5'}>
            <button
                className={' w-10 h-10 p-2 text-center rounded-lg bg-green text-white text-lg flex items-center justify-center'}>
                1
            </button>
            <button
                className={'w-10 h-10 p-2 text-center rounded-lg border border-black border-solid bg-cart-white text-black text-lg flex items-center justify-center'}>
                2
            </button>
            <button
                className={'w-10 h-10 p-2 text-center rounded-lg border border-black border-solid bg-cart-white text-black text-lg flex items-center justify-center'}>
                <img src={arrow} alt={arrow}/>
            </button>
        </div>
    );
};

export default ButtonList;