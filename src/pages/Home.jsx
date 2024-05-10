import React from 'react';
import Slider from "../components/Slider";
import ShopList from "../components/ShopList";

const Home = () => {
    return (
        <main className={'container m-auto mt-4'}>
            <Slider/>
            <ShopList/>
        </main>
    );
};

export default Home;