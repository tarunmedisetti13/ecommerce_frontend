import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleNavigate = () => {
        if (location.pathname !== "/products") {
            navigate("/products");
        }
    }
    return (
        <div className='flex justify-evenly fixed top-0 left-0 w-full z-50 bg-blue-500 py-4 text-white font-semibold items-center '>
            <h3 className='font-bold hidden sm:block cursor-pointer' onClick={handleNavigate} >Ecommerce</h3>
            <div className='flex relative h-10 items-center'>
                <GoSearch className='cursor-pointer text-2xl absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
                <input type="text" placeholder='Search for Products' className='border border-gray-400 w-52 text-black font-normal bg-gray-100 sm:w-80 md:w-116  rounded-3xl h-full  pl-12 outline-none' />
            </div>
            <div className=' hidden sm:flex sm:gap-2 sm:items-center cursor-pointer  '>
                <FaShoppingCart />
                <p>Cart</p>
            </div>
            <div className='sm:flex items-center gap-2 cursor-pointer hidden'>
                <FaRegHeart />
                <p>Wishlist</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <p className='hidden sm:block'>Profile</p>
                <CgProfile size="18" />
            </div>

        </div>
    )
}

export default Navbar
