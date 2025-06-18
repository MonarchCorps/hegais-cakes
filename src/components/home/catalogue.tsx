"use client";

import { ArrowRight } from "lucide-react";

import { berkshireSwash } from "@/lib/fonts";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Catalogue() {
    return (
        <section>
            <div className="relative bg-[#A7C7E7] py-8 overflow-hidden">

                {/* center images */}

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[30deg] left-1/2 -translate-x-1/2 -top-16 size-[15rem] object-contain max-[1061px]:size-[10rem]"
                />

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[30deg] left-1/2 -translate-x-1/2 -bottom-16 size-[15rem] object-contain max-[1061px]:size-[10rem]"
                />


                {/* top images */}

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[2deg] top-[-3%] -right-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[38deg] top-[-3%] -left-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />


                {/* middle  images */}

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[38deg] top-[32%] -right-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[-2deg] top-[32%] -left-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />


                {/* bottom images */}

                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[-3deg] -bottom-14 -right-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />
                <img
                    src="/images/cupcake-blue.png"
                    alt="Cupcake Blue"
                    className="absolute rotate-[40deg] -bottom-14 -left-16 size-[13rem] object-contain max-[1061px]:size-[10rem] max-[711px]:size-[7rem]"
                />


                <div className="relative py-12 max-w-[95%] mx-auto">
                    <div className="relative mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                            Our Cake Catalogue
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="text-center mt-1 text-[#0F4C81] max-w-[35rem] mx-auto">
                        Your dream cake, one click away! Find the perfect treat for birthdays, weddings, and every sweet tooth in between.
                    </motion.p>
                    <div className="flex items-center gap-x-4 gap-y-4 mt-10 mb-10 overflow-x-scroll scrollbar-hide">
                        {[
                            { src: "/images/cake-2.webp", alt: "Cake 2" },
                            { src: "/images/cake-3.webp", alt: "Cake 3" },
                            { src: "/images/cake-4.webp", alt: "Cake 4" },
                            { src: "/images/cake-5.webp", alt: "Cake 5" },
                        ].map((cake, idx) => (
                            <motion.img
                                key={cake.alt}
                                src={cake.src}
                                alt={cake.alt}
                                className="object-cover min-w-[18rem] min-h-[20rem]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                viewport={{ once: true, amount: 0.25 }}
                            />
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}>
                        <Link href="/shop" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit mx-auto">
                            Order Now
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}