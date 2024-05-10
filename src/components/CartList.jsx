import React from 'react';
import image from '../assets/flover.png'
import Cart from "./Cart";

const CartList = () => {

    const arr = [
        {
            id:1,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:2,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:3,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:4,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:5,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:6,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:7,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:8,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:9,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:10,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:11,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
        {
            id:12,
            image:image,
            title:'Barberton Daisy',
            coin:119,
        },
    ]

    return (
        <div className={'grid grid-cols-4 justify-between gap-10 items-center'}>
            {
                arr.map(item => {
                    return <Cart
                        image={item.image}
                        title={item.title}
                        coin={item.coin}
                        key={item.id}
                    />
                })
            }
        </div>
    );
};

export default CartList;