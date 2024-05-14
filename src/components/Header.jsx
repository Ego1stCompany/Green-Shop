import React from 'react';
//images
import LogoIcon from '../assets/logo.svg?react';
//components
import Navigation from "./Navigation";
//buttons
import ButtonUser from "../UI/ButtonUser";
import ButtonSearch from "../UI/ButtonSearch";
import ButtonBasket from "../UI/ButtonBasket";

const Header = () => {
    return (
        <header className={'container grid grid-cols-3 items-center gap-2 mt-5 m-auto pt-2 pb-6 border-b-2 border-solid border-[rgba(70,163,80,0.2)]'}>
            <LogoIcon/>

            <Navigation/>

            <div className={'flex justify-end gap-6 items-center'}>
                <ButtonSearch/>
                <ButtonBasket/>
                <ButtonUser children={'Login'}/>
            </div>
        </header>
    );
};

export default Header;