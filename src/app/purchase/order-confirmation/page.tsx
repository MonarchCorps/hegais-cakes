export default function OrderConfirmation() {
    return (
        <div className="max-w-[36rem] mx-auto pt-10 pb-7 flex flex-col gap-y-6 mb-9">
            <img
                src="/images/check.png"
                alt="Order Confirmation"
                className="size-32 self-center"
            />
            <h1 className="text-2xl font-bold text-[#0F4C81] self-center max-[530px]:text-xl">Your Purchase Failed!</h1>
            <p className="text-base text-[#0F4C81] self-center font-600 text-center">
                Your cake dreams are one step closer to reality! Our team will review your request and get in touch within 24 hours.
            </p>
            <button className="cursor-pointer bg-[#0F4C81] text-white px-8 py-3 rounded-full text-xl font-normal">Return To Home</button>
        </div>
    )
}