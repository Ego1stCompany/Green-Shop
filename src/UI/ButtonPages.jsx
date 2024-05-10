import React from 'react';

const ButtonPages = ({text, uppercase, style}) => {
    return (
        <button
            className={`text-white font-bold text-xl bg-green px-4 py-2 rounded-lg 
            ${uppercase ? 'uppercase' : ''} ${style}
            hover:bg-black text-black transition-all ease-in-out duration-300`}
        >
            {text}
        </button>
    );
};

export default ButtonPages;