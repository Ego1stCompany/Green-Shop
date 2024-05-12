import React from 'react';
import {useSelector} from "react-redux";
//components
import BlogsCart from "./BlogsCart";

const Blogs = () => {

    const arrayBlogs = useSelector(state => state.BlogsCartSlice.BlogsCartArray)

    return (
        <section className={'mt-40 flex flex-col gap-6'}>
            <div className={'flex flex-col gap-2 justify-center items-center'}>
                <h1 className={'font-bold text-4xl text-black'}>
                    Our Blogs Posts
                </h1>

                <p className={'text-gray-500 text-lg'}>
                    We are an online plant shop offering a wide range of cheap and trendy plants.
                </p>
            </div>

            <div className={'grid grid-cols-4 gap-8'}>
                {arrayBlogs.map(item =>  <BlogsCart key={item.id} image={item.image} text={item.text} title={item.title} date={item.date} read={item.read} />)}
            </div>
        </section>
    );
};

export default Blogs;