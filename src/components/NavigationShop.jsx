import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {activeLink} from "../store/navigationShopActiveSlice";
import {Link} from "react-router-dom";

const NavigationShop = () => {

    const dispatch = useDispatch();
    const navigationShopList = useSelector(state => state.navigationShopActiveSlice.navigationShopArray)


    return (
        <nav className={'flex gap-5'}>
            {
                navigationShopList.map(link => {
                    return (
                        <Link
                            to={link.link}
                            key={link.id}
                            className={
                                link.active === true ?
                                    'cursor-pointer relative text-lg font-bold px-2 text-green underline underline-offset-[5px] decoration-4 decoration-green'
                                    :
                                    'cursor-pointer text-lg px-2 text-black hover:text-green transition duration-300'
                            }
                            onClick={() => dispatch(activeLink({id: link.id}))}
                        >
                            {link.text}
                        </Link>
                    )
                })
            }
        </nav>
    );
};

export default NavigationShop;