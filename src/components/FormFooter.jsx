import React from 'react';
//components
import ButtonFooter from "../UI/ButtonFooter";

const FormFooter = () => {
    return (
        <div className={'flex flex-col items-start gap-4'}>
            <h1 className={'font-bold text-black text-xl'}>Would you like to join newsletters?</h1>
            <form className={'flex w-full'}>
                <input type="text" placeholder={'enter your email address...'} className={'py-4 px-2 bg-white w-5/6'}/>
               <ButtonFooter/>
            </form>
            <p className={'text-lg text-gray-400'}>
                We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
            </p>
        </div>
    );
};

export default FormFooter;