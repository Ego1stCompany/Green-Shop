import React from 'react';

const FooterHeaderCart = ({component,title,text,length,id}) => {
    return (
        <div className={`flex flex-col items-start p-4 gap-2 ${length  === id ? '' : 'border-r-2 border-solid border-[rgba(70,163,80,0.2)]'}`}>
            {component}
            <h1 className={'font-bold text-black text-xl'}>{title}</h1>
            <p className={'text-gray-400 text-lg w-5/6'}>
                {text}
            </p>
        </div>
    );
};

export default FooterHeaderCart;