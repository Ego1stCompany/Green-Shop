import React from 'react';

const FooterMainCart = ({component,text}) => {
    return (
        <div className={'flex items-center gap-2'}>
            {component}
            <p className={'text-lg text-black'}>
                {text}
            </p>
        </div>
    );
};

export default FooterMainCart;