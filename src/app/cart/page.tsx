"use client";

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { CartPage } from './cart';
import { CheckoutPage } from './checkout';

import { LiaAngleRightSolid } from "react-icons/lia";
import clsx from 'clsx';

const ShoppingCart = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [thereIsCart, setThereIsCart] = useState(false);
    
    useEffect(() => {
        const cart = localStorage.getItem("cart");
        setThereIsCart(Boolean(cart && cart !== "[]" && cart !== "null"));
    }, []);
    
    return (
        <div className='max-w-[75rem] mx-auto pt-12 pb-5 px-7 max-[530px]:px-4'>
            <div className='w-full flex gap-x-8 overflow-x-scroll scrollbar-hide'>
                <button
                    type='button'
                    onClick={() => setCurrentStep(1)}
                    className='cursor-pointer flex items-center gap-x-5 text-white border whitespace-nowrap'>
                    <span className={clsx('size-10 rounded-full flex items-center justify-center max-[572px]:size-8', {
                        'bg-[#E04F85] text-white': thereIsCart,
                        'bg-[#FFF] border border-[#D9D9D9] text-[#333333]': !thereIsCart
                    })}>
                        {thereIsCart ? <Check /> : 1}
                    </span>
                    <p className='text-[#333333] text-xl font-medium max-[572px]:text-lg'>My Cart</p>
                    <LiaAngleRightSolid size={20} color='#50555C' />
                </button>
                <button
                    type='button'
                    onClick={() => setCurrentStep(2)}
                    disabled={!thereIsCart}
                    className='cursor-pointer flex items-center gap-x-5 text-white border whitespace-nowrap'>
                    <span className={clsx('size-10 rounded-full flex items-center justify-center max-[572px]:size-8', {
                        'bg-[#E04F85] text-white': thereIsCart,
                        'bg-[#FFF] border border-[#D9D9D9] text-[#333333]': !thereIsCart
                    })}>
                        2
                    </span>
                    <p className='text-[#333333] text-xl font-medium max-[572px]:text-lg'>Checkout</p>
                    <LiaAngleRightSolid size={20} color='#50555C' />
                </button>
                <button
                    type='button'
                    disabled={!thereIsCart}
                    className='cursor-pointer flex items-center gap-x-5 text-[#333333] whitespace-nowrap'>
                    <span className='bg-[#FFF] size-10 rounded-full flex items-center justify-center border border-[#D9D9D9] max-[572px]:size-8'>
                        3
                    </span>
                    <p className='text-[#333333] text-xl font-medium max-[572px]:text-lg'>Order</p>
                </button>
            </div>
            {
                currentStep === 1
                    ? <CartPage setCurrentStep={setCurrentStep} /> : currentStep === 2
                        ? <CheckoutPage /> : null
            }
        </div>
    )
};

export default ShoppingCart;