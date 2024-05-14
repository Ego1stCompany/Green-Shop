import React from 'react';
//components
import ButtonMore from "../UI/buttonMore"

const BlogsCart = ({image,date,read,title,text}) => {
    return (
        <div className={'flex flex-col bg-cart-white items-center gap-2'}>
            <img src={image} alt={image} className={'w-full'}/>

            <div className={'flex flex-col justify-start px-6 gap-2 '}>
                <span className={'text-green text-sm'}>September {date}  I Read in {read} minutes</span>

                <h1 className={'text-xl text-black font-bold'}>
                    {title}
                </h1>
                <p className={'text-gray-500 text-sm'}>
                    {text}
                </p>

                <div className={'w-2/4'}>
                    <ButtonMore title={'Read more'}/>
                </div>
            </div>
        </div>
    );
};

export default BlogsCart;