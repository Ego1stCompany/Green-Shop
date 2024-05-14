import React, {useReducer} from 'react';
import {useSelector} from "react-redux";
//components
import PlantCart from "./PlantCart";

const PlantCare = () => {

    const cartArray = useSelector(state => state.plantCartSlice.cartsArray)

    return (
        <section className={'grid grid-cols-2 gap-4 mt-40'}>
            {cartArray.map(item => <PlantCart key={item.id} image={item.image} title={item.title} text={item.text}/>)}
        </section>
    );
};

export default PlantCare;