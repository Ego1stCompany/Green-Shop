import React from 'react';
//components
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Size from "./Size";
import NavigationShop from "./NavigationShop";
import CartList from "./CartList";
import ButtonList from "./ButtonList";

const ShopList = () => {
    return (
        <section className={'mt-12 grid grid-cols-5 gap-10'}>
            <div className={'bg-cart-white p-4 gap-10 flex flex-col'}>
                <Categories/>
                <PriceRange/>
                <Size/>
            </div>

            <div className={'col-span-4 gap-4 flex flex-col'}>
                <NavigationShop/>
                <CartList/>
                <ButtonList/>
            </div>
        </section>
    );
};

export default ShopList;