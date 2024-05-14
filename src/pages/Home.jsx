import React from 'react';
import Slider from "../components/Slider";
import ShopList from "../components/ShopList";
import PlantCare from "../components/PlantCare";
import Blogs from "../components/Blogs";

const Home = () => {
    return (
        <main className={'container m-auto mt-4'}>
            <Slider/>
            <ShopList/>
            <PlantCare/>
            <Blogs/>
        </main>
    );
};

export default Home;