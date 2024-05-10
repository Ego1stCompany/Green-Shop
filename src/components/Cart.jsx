import React from 'react';

const Cart = ({image,title,coin}) => {
    return (
        <div className={'flex flex-col p-4 max-w-[100%] w-[250px]'}>
            <img src={image} alt={image}/>

            <div className={'flex flex-col justify-start'}>
                <h4 className={'text-xl'}>{title}</h4>
                <span className={'text-xl text-green font-medium'}>${coin}.00</span>
            </div>
        </div>
    );
};

export default Cart;