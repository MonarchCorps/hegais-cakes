// import { div } from "framer-motion/client";
// import { Check } from "lucide-react";

export const OrderConfirmation = () => (
    // <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
    //     {/* Success Icon */}
    //     <div className="flex justify-center mb-6">
    //         <div className="w-20 h-20 bg-[#0F4C81] rounded-full flex items-center justify-center">
    //             <Check className="w-10 h-10 text-white" />
    //         </div>
    //     </div>

    //     {/* Thank You Message */}
    //     <div className="text-center mb-8">
    //         <h1 className="text-3xl font-bold text-[#0F4C81] mb-2">Thank You For Your Order!</h1>
    //     </div>

    //     {/* Order Summary */}
    //     <div className="max-w-2xl mx-auto">
    //         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Order Summary</h2>

    //         <div className="bg-white border rounded-lg p-6 mb-6">
    //             <div className="flex justify-between items-start mb-6">
    //                 <div>
    //                     <h3 className="text-lg font-medium text-gray-800">Product</h3>
    //                 </div>
    //                 <div>
    //                     <h3 className="text-lg font-medium text-gray-800">Subtotal</h3>
    //                 </div>
    //             </div>

    //             <div className="flex justify-between items-start mb-4">
    //                 <div>
    //                     <p className="text-gray-700">Taster Box (PRE-ORDER) ×{3}</p>
    //                     <p className="text-sm text-gray-500 mt-1">Add a lovely gift note (optional):</p>
    //                     <p className="text-sm text-gray-500">Pick any four (4) flavours:</p>
    //                 </div>
    //                 <div>
    //                     <p className="text-lg font-semibold">£{(30).toFixed(2)}</p>
    //                 </div>
    //             </div>

    //             <hr className="border-gray-200 my-4" />

    //             <div className="space-y-3">
    //                 <div className="flex justify-between">
    //                     <span className="text-gray-700">Subtotal</span>
    //                     <span className="font-semibold">£{(30).toFixed(2)}</span>
    //                 </div>

    //                 <div className="flex justify-between">
    //                     <span className="text-gray-700">Shipping</span>
    //                     <span className="font-semibold">Flat Rate: £{(200).toFixed(2)}</span>
    //                 </div>

    //                 <hr className="border-gray-200 my-4" />

    //                 <div className="flex justify-between text-xl font-bold">
    //                     <span>Total</span>
    //                     <span>£{(40).toFixed(2)}</span>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* Confirmation Email */}
    //         <div className="text-center mb-8">
    //             <p className="text-[#0F4C81] font-medium">
    //                 A confirmation email has been sent to example@email.com
    //             </p>
    //         </div>

    //         {/* Return to Home Button */}
    //         <div className="text-center">
    //             <button
    //                 // onClick={handleReturnToHome}
    //                 className="bg-[#0F4C81] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 text-lg"
    //             >
    //                 Return To Home
    //             </button>
    //         </div>
    //     </div>
    // </div>
    <div className="max-w-[36rem] mx-auto pt-10 pb-7 flex flex-col gap-y-6">
        <img
            src="/images/check.png"
            alt="Order Confirmation"
            className="size-32 self-center"
        />
        <h1 className="text-2xl font-bold text-[#0F4C81] self-center max-[530px]:text-xl">Thank You For Your Order!</h1>
        <p className="text-2xl font-bold text-[#333333] self-center max-[530px]:text-xl">Order Summary</p>
        <div className="mt-5">
            <div className="flex items-center justify-between pb-5 border-b border-[#D9D9D9]">
                <h1 className="text-xl font-bold max-[530px]:text-lg">Product</h1>
                <h1 className="text-xl font-bold max-[530px]:text-lg">Subtotal</h1>
            </div>
            <div className="flex items-center justify-between pt-5 pb-5 border-b border-[#D9D9D9]">
                <div>
                    <h1 className="text-xl font-medium mb-3 max-[530px]:text-lg">Taster Box (PRE-ORDER) x1</h1>
                    <p className="text-base text-gray-500 mb-2 ml-5 max-[530px]:text-sm">Add a lovely gift note (optional):</p>
                    <p className="text-base text-gray-500 ml-5 max-[530px]:text-sm">Pick any four (4) flavours:</p>
                </div>
                <h1 className="text-xl font-bold max-[530px]:text-lg">£40.00</h1>
            </div>
            <div className="flex items-center justify-between pt-5 pb-5 border-b border-[#D9D9D9]">
                <h1 className="text-xl font-bold max-[530px]:text-lg">Subtotal</h1>
                <h1 className="text-xl font-bold max-[530px]:text-lg">£40.00</h1>
            </div>
            <div className="flex items-center justify-between pt-5 pb-5 border-b border-[#D9D9D9]">
                <h1 className="text-xl font-bold max-[530px]:text-lg">Shipping</h1>
                <h1 className="text-xl font-bold max-[530px]:text-lg">Flat Rate: £200.00</h1>
            </div>
            <div className="flex items-center justify-between pt-5 pb-5">
                <h1 className="text-xl font-bold max-[530px]:text-lg">Total</h1>
                <h1 className="text-xl font-bold max-[530px]:text-lg">£240.00</h1>
            </div>
        </div>
        <p className="text-base text-[#0F4C81] self-center font-600">A confirmation email has been sent to example@email.com</p>
        <button className="cursor-pointer bg-[#0F4C81] text-white px-8 py-3 rounded-full text-xl font-normal">Return To Home</button>
    </div>
);
