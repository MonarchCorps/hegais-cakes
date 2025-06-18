"use client";

import { berkshireSwash } from "@/lib/fonts";
import { motion } from "framer-motion";

export default function Flavours() {
    return (
        <section>
            <div className="relative py-12 px-3 max-w-[70%] mx-auto">
                <div className="flex items-center justify-center gap-x-4">
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="w-5 object-contain"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#0F4C81]`}>
                        Flavours of the Month
                    </motion.h1>
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="w-5 object-contain"
                    />
                </div>
                <div className=" border-[3px] border-dashed border-[#F7CAC9] rounded-3xl p-4 mt-10 grid grid-cols-2 gap-x-8 items-center">
                    <img
                        src={"/images/pastry.webp"}
                        alt="Pastry"
                        className="size-full object-contain"
                    />
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#0F4C81]`}
                        >
                            Red Velvet Bliss
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-[#E04F85] leading-[1.6] mt-3 text-start"
                        >
                            Indulge in the luxurious charm of our Red Velvet Bliss; a velvety smooth cake with a hint of cocoa, layered with rich cream cheese frosting. This classic favourite is perfectly flavourful and ideal for celebrations or a little self-pampering.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}