import React from 'react';
//images
import CactusIcon_1 from '../assets/footer-cactus-1.svg?react'
import CactusIcon_2 from '../assets/footer-cactus-2.svg?react'
import CactusIcon_3 from '../assets/footer-cactus-3.svg?react'
import LogoIcon from '../assets/logo.svg?react';
import MapIcon from '../assets/map.svg?react';
import MailIcon from '../assets/mail.svg?react';
import PhoneIcon from '../assets/phone.svg?react';
import FacebookIcon from '../assets/Facebook.svg?react';
import InstagramIcon from '../assets/Instagram.svg?react';
import TwitterIcon from '../assets/Twitter.svg?react';
import LinkedinIcon from '../assets/Linkedin.svg?react';
import UnionIcon from '../assets/Union.svg?react';
import Wallet from '../assets/wallet.svg?react'
//components
import FooterHeaderCart from "./FooterHeaderCart";
import FormFooter from "./FormFooter";
import FooterMainCart from "./FooterMainCart";


const Footer = () => {

    const arrayFooterHeader = [
        {
            id: 1,
            component: <CactusIcon_1/>,
            title: 'Garden Care',
            text: 'We are an online plant shop offering a wide range of cheap and trendy plants.'
        },
        {
            id: 2,
            component: <CactusIcon_2/>,
            title: 'Plant Renovation',
            text: 'We are an online plant shop offering a wide range of cheap and trendy plants.'
        },
        {
            id: 3,
            component: <CactusIcon_3/>,
            title: 'Watering Graden',
            text: 'We are an online plant shop offering a wide range of cheap and trendy plants.'
        },
    ]
    const arrayFooterMain = [
        {
            id: 1,
            component: <MapIcon/>,
            text: '70 West Buckingham Ave.\n Farmingdale, NY 11735'
        },
        {
            id: 2,
            component: <MailIcon/>,
            text: 'contact@greenshop.com'
        },
        {
            id: 3,
            component: <PhoneIcon/>,
            text: '+88 01911 717 490'
        },
    ]
    const arrayFooterLinks_1 = [
        {
            id: 1,
            text: 'My Account'
        },
        {
            id: 2,
            text: 'Our stores'
        },
        {
            id: 3,
            text: 'Contact us'
        },
        {
            id: 4,
            text: 'Career'
        },
        {
            id: 5,
            text: 'Specials'
        }
    ]
    const arrayFooterLinks_2 = [
        {
            id: 1,
            text: 'Help Center'
        },
        {
            id: 2,
            text: 'How to Buy'
        },
        {
            id: 3,
            text: 'Shipping & Delivery'
        },
        {
            id: 4,
            text: 'Product Policy'
        },
        {
            id: 5,
            text: 'How to Return'
        }
    ]
    const arrayFooterLinks_3 = [
        {
            id: 1,
            text: 'House Plants'
        },
        {
            id: 2,
            text: 'Potter Plants'
        },
        {
            id: 3,
            text: 'Seeds'
        },
        {
            id: 4,
            text: 'Small Plants'
        },
        {
            id: 5,
            text: 'Accessories'
        }
    ]
    const buttonsNet = [
        {
            id: 1,
            component:<FacebookIcon/>
        },
        {
            id: 2,
            component:<InstagramIcon/>
        },
        {
            id: 3,
            component:<TwitterIcon/>
        },
        {
            id: 4,
            component:<LinkedinIcon/>
        },
        {
            id: 5,
            component:<UnionIcon/>
        }
    ]

    return (
        <footer className={'mt-40 container m-auto flex flex-col'}>
            <div className={'grid grid-cols-4 bg-cart-white py-6 px-6'}>
                <div className={'grid grid-cols-3 gap-4 col-span-3'}>
                    {arrayFooterHeader.map(item => <FooterHeaderCart
                        key={item.id}
                        id={item.id}
                        length={arrayFooterHeader.length}
                        image={item.image}
                        text={item.text}
                        title={item.title}
                        component={item.component}
                    />)}
                </div>

                <div className={'col-span-1'}>
                    <FormFooter/>
                </div>
            </div>

            <div className={'p-6 grid grid-cols-4 items-center gap-4 bg-[rgba(70,163,80,0.1)] border-y border-solid border-[rgba(70,163,80,0.3)]'}>
                <LogoIcon/>
                {arrayFooterMain.map(item => <FooterMainCart
                    key={item.id}
                    text={item.text}
                    component={item.component}
                />)}
            </div>

            <div className={'grid grid-cols-4 bg-cart-white py-6 px-6 border-b-2 border-solid border-[rgba(70,163,80,0.3)]'}>
                <div className={'grid grid-cols-3 gap-4 col-span-3'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'font-bold text-xl'}>My Account</h1>
                        <ul className={'flex flex-col gap-2'}>
                            {
                                arrayFooterLinks_1.map(item => {
                                    return (
                                        <li className={'text-lg text-black cursor-pointer'} key={item.id}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'font-bold text-xl'}>Help & Guide</h1>
                        <ul className={'flex flex-col gap-2'}>
                            {
                                arrayFooterLinks_2.map(item => {
                                    return (
                                        <li className={'text-lg text-black cursor-pointer'} key={item.id}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'font-bold text-xl'}>Categories</h1>
                        <ul className={'flex flex-col gap-2'}>
                            {
                                arrayFooterLinks_3.map(item => {
                                    return (
                                        <li className={'text-lg text-black cursor-pointer'} key={item.id}>{item.text}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className={'col-span-1 flex flex-col gap-4'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'font-bold text-xl'}>Social Media</h1>
                        <div className={'flex gap-4'}>
                            {
                                buttonsNet.map(item => {
                                    return (
                                        <button key={item.id} className={'flex items-center justify-center w-10 h-10 bg-white border-2 rounded-lg border-solid border-[rgba(70,163,80,0.2)]'}>
                                            {item.component}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'font-bold text-xl'}>We accept</h1>
                        <Wallet/>
                    </div>
                </div>
            </div>

            <div className={'flex items-center justify-center'}>
                <span className={'text-lg text-black py-4'}>© 2024  GreenShop. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;