import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {activeLink} from "../store/navigationActiveSlice";

const Navigation = () => {

    const links = useSelector((state) => state.arrayNavigationLink.arrayNavigationLink);
    const dispatch = useDispatch();

    return (
        <nav className={'flex justify-around'}>
            {
                links.map(link => {
                    return (
                        <Link
                            to={link.link}
                            key={link.id}
                            className={
                                link.active === true ?
                                    'cursor-pointer relative text-xl font-bold px-2 text-black underline underline-offset-[36px] decoration-4 decoration-green'
                                    :
                                    'cursor-pointer text-xl px-2 text-black hover:text-green transition duration-300'
                            }
                            onClick={() => dispatch(activeLink({id: link.id}))}
                        >
                            {link.text}
                        </Link>
                    )
                })
            }
        </nav>
    );
};

export default Navigation;