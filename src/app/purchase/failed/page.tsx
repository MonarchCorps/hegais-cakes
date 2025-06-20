export default function FailedPurchase() {
    return (
        <div className="max-w-[36rem] mx-auto pt-10 pb-7 flex flex-col gap-y-6 mb-9">
            <img
                src="/images/cake-5.png"
                alt="Order Confirmation"
                className="size-32 self-center"
            />
            <h1 className="text-2xl font-bold text-[#0F4C81] self-center max-[530px]:text-xl">Your Purchase Failed!</h1>
            <p className="text-base text-[#0F4C81] self-center font-600 text-center">
                We got your order, but something went wrong. Please try again.
            </p>
            <button className="cursor-pointer bg-[#0F4C81] text-white px-8 py-3 rounded-full text-xl font-normal">Return To Home</button>
        </div>
    )
}