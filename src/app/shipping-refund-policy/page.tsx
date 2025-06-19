"use client";

import { berkshireSwash } from "@/lib/fonts";
import { motion } from "framer-motion"
import Image from "next/image";

export default function ShippingRefundPolicyPage() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[30rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/shipping-refund-policy.jpg"}
                                alt="Shipping & Refund Policy"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_50%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Shipping & Refund Policy
                                </motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-8 px-6 relative z-10 max-w-[60rem] mx-auto">
                <p className="mb-5">Thank you for choosing us!</p>
                <h2 className="font-bold mb-2">Shipping</h2>
                <p className="mb-4 leading-[1.6]">All taster boxes made for pre-order (direct-to-customer) will be sent by courier such as Royal Mail. Once the boxes have left us, we are not responsible for delays outside of our control, however, we will do our best in keeping tabs on your delivery.</p>
                <h2 className="font-bold mb-2">Refunds</h2>
                <p className="mb-5 leading-[1.6]">We hope that you enjoy your baked goods and that they are the star of the show at your events – minus you of course! <span role="img" aria-label="wink">😉</span></p>
                <p className="mb-2 leading-[1.6]">In the event that something goes wrong and you’re unhappy with the service, please reach out to us by phone or email, and we’ll be happy to rectify things.</p>
                <p className="mb-2 leading-[1.6]"><span className="font-bold">Partial Refunds:</span> In the unlikely nature that your order is incomplete or that you are unsatisfied with our product, we will be happy to offer you a gift credit ahead of a future order. Please note that this will be based on our discretion.</p>
                </div>
            </section>

        </main>
    );
}