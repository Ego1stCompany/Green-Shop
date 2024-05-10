import React from 'react';
import {activeCategory} from "../store/categoriesActiveSlice";
import {useSelector, useDispatch} from "react-redux";

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categoriesActiveSlice.CategoriesArray);

    return (
        <div className={'flex flex-col gap-4'}>
            <h2 className={'text-2xl font-bold text-black'}>Categories</h2>

            <ul className={'flex flex-col gap-5'}>
                {
                    categories.map(category => (
                        <li
                            className={'flex justify-between cursor-pointer'}
                            key={category.id}
                            onClick={() => dispatch(activeCategory({id: category.id}))}
                        >
                            <p className={`text-lg ${category.active === true ? 'font-medium text-green' : 'text-black '}`}>{category.text}</p>
                            <span className={`text-lg ${category.active === true ? 'font-medium text-green' : 'text-black '}`}>({category.count})</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;