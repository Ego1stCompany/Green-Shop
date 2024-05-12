import React from 'react';
//images
import ButtonMore from "../UI/buttonMore";

const PlantCart = ({image, title, text}) => {
    return (
        <div className={'flex justify-between items-center bg-white p-10'}>
            <img src={image} alt={image} className={'max-w-[287px]'}/>

            <div className={'flex flex-col items-end gap-6 text-end'}>
                <h1 className={'text-xl text-black font-bold uppercase w-2/3'}>
                    {title}
                </h1>

                <p className={'text-gray-500 text-lg'}>
                    {text}
                </p>

               <ButtonMore title={'Find more'}/>
            </div>
        </div>
    );
};

export default PlantCart;