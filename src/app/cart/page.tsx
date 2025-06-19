"use client";

import { useState } from 'react';
import { Check } from 'lucide-react';
import { CartPage } from './cart';
import { CheckoutPage } from './checkout';
import { OrderConfirmation } from './order-confirmation';

import { LiaAngleRightSolid } from "react-icons/lia";

const ShoppingCart = () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className='max-w-[75rem] mx-auto pt-12 pb-5'>
            <div className='w-fit flex items-center gap-x-8'>
                <button
                    type='button'
                    onClick={() => setCurrentStep(1)}
                    className='cursor-pointer flex items-center gap-x-5 text-white border'>
                    <span className='bg-[#E04F85] size-10 rounded-full flex items-center justify-center'>
                        <Check color='#fff' />
                    </span>
                    <p className='text-[#333333] text-xl font-medium'>My Cart</p>
                    <LiaAngleRightSolid size={20} color='#50555C' />
                </button>
                <button
                    type='button'
                    onClick={() => setCurrentStep(2)}
                    className='cursor-pointer flex items-center gap-x-5 text-white border'>
                    <span className='bg-[#E04F85] size-10 rounded-full flex items-center justify-center'>
                        2
                    </span>
                    <p className='text-[#333333] text-xl font-medium'>Checkout</p>
                    <LiaAngleRightSolid size={20} color='#50555C' />
                </button>
                <button
                    type='button'
                    onClick={() => setCurrentStep(3)}
                    className='cursor-pointer flex items-center gap-x-5 text-[#333333]'>
                    <span className='bg-[#FFF] size-10 rounded-full flex items-center justify-center border border-[#D9D9D9]'>
                        3
                    </span>
                    <p className='text-[#333333] text-xl font-medium'>Order</p>
                </button>
            </div>
            {
                currentStep === 1
                    ? <CartPage setCurrentStep={setCurrentStep} /> : currentStep === 2
                        ? <CheckoutPage setCurrentStep={setCurrentStep} /> : currentStep === 3
                            ? <OrderConfirmation /> : null
            }
        </div>
    )
};

export default ShoppingCart;