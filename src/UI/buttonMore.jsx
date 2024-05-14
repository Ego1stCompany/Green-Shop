import React from 'react';
import ArrowWhite from "../assets/arrow-white.svg?react";
import ArrowBlack from "../assets/arrow-black.svg?react";
import ArrowGreen from "../assets/arrow-green.svg?react";

const ButtonMore = ({title}) => {

    const [hoverIcon, setHoverIcon] = React.useState(false);

    let style = ''
    let nameButton = ''
    let iconButton;


    switch (title) {
        case 'Find more':
            nameButton = title;
            style = 'flex text-lg items-center justify-center px-6 py-3 bg-green rounded-lg text-white hover:bg-black text-black transition-all ease-in-out duration-300'
            iconButton = <ArrowWhite/>
            break
        case 'Read more':
            nameButton = title;
            style = `flex gap-2 font-bold items-center text-sm hover:text-green`
            hoverIcon === false ? iconButton = <ArrowBlack/> : iconButton = <ArrowGreen/>
            break
    }

    return (
        <button className={style}
                onMouseEnter={() => setHoverIcon(true)}
                onMouseLeave={() => setHoverIcon(false)}
        >
            {title}
            {iconButton}
        </button>
    );
};

export default ButtonMore;