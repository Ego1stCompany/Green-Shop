import React from 'react';
import {useSelector} from "react-redux";
import {activeCategory} from "../store/categoriesActiveSlice";

const Size = () => {

    const sizeList = useSelector(state => state.sizeSlice.sizeArray);

    return (
        <div className={'flex flex-col gap-4'}>
            <h2 className={'text-2xl font-bold text-black'}>Size</h2>
            <ul className={'flex flex-col gap-5'}>
                {
                    sizeList.map(category => (
                        <li
                            className={'flex justify-between cursor-pointer'}
                            key={category.id}
                            onClick={() => dispatch(activeCategory({id: category.id}))}
                        >
                            <p className={`text-lg text-black`}>{category.text}</p>
                            <span className={`text-lg 'text-black`}>({category.count})</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Size;