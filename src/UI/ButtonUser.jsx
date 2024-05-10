import React from 'react';
//images
import ExitIcon from '../assets/exit.svg?react';

const ButtonUser = ({children}) => {
    return (
        <button
            className={'bg-green rounded-lg font-medium flex gap-2 items-center justify-center px-4 py-2 text-xl text-white hover:bg-black text-black transition-all ease-in-out duration-300'}
        >
            <ExitIcon/>
            {children}
        </button>
    );
};

export default ButtonUser;