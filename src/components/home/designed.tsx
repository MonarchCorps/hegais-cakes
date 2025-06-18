"use client";

import { berkshireSwash } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Designed() {
    return (
        <section>
            <div className="relative pt-12 pb-1 px-3 max-w-[100rem] mx-auto">
                <div className="relative mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                        Designed For Every Occassion
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-1">
                    Indulge in our delicious offerings—from tasting boxes to workshops, we bring your cake dreams to life.
                </motion.p>
                <div className="relative max-w-[64rem] mx-auto grid grid-cols-2 gap-x-16 gap-y-10 mb-20 mt-12 text-center place-content-center max-[1044px]:gap-x-5 max-[650px]:grid-cols-1">

                    <img
                        src={"/images/cake-1.webp"}
                        alt="Cake 1"
                        className="absolute inset-0 w-full h-auto -z-10"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col items-center">
                        <div className="relative w-full h-[30rem] max-[1000px]:h-[20rem]">
                            <Image
                                src={"/images/tasterbox.webp"}
                                alt="Tasterbox"
                                fill
                                className="size-full object-cover  max-[1000px]:object-contain"
                            />
                        </div>
                        <h1 className="text-[#333333] font-700 text-2xl mt-5">Taster Boxes</h1>
                        <p className="text-[#E04F85]">Easy, handy, and perfect for on-the-go moments</p>
                        <Link href="/taster-box" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                            Learn More
                            <ArrowRight size={20} />
                        </Link>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col items-center">
                        <div className="relative w-full h-[30rem] max-[1000px]:h-[20rem]">
                            <Image
                                src={"/images/wedding-cakes.webp"}
                                alt="Wedding Cakes"
                                fill
                                className="size-full object-cover max-[1000px]:object-contain"
                            />
                        </div>
                        <h1 className="text-[#333333] font-700 text-2xl mt-5">Wedding Cakes</h1>
                        <p className="text-[#E04F85]">Exquisite, tailored creations for your big day</p>
                        <Link href="/wedding-cakes" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                            Learn More
                            <ArrowRight size={20} />
                        </Link>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col items-center">
                        <div className="relative w-full h-[30rem] max-[1000px]:h-[20rem]">
                            <Image
                                src={"/images/celebration-cakes.webp"}
                                alt="Celebration Cakes"
                                fill
                                className="size-full object-cover max-[1000px]:object-contain"
                            />
                        </div>
                        <h1 className="text-[#333333] font-700 text-2xl mt-5">Celebration Cakes</h1>
                        <p className="text-[#E04F85]">Custom designs to make your special events unforgettable</p>
                        <Link href="/" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                            Learn More
                            <ArrowRight size={20} />
                        </Link>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="flex flex-col items-center">
                        <div className="relative w-full h-[30rem] max-[1000px]:h-[20rem]">
                            <Image
                                src={"/images/workshops.webp"}
                                alt="Workshops"
                                fill
                                className="size-full object-cover max-[1000px]:object-contain"
                            />
                        </div>
                        <h1 className="text-[#333333] font-700 text-2xl mt-5">Workshops</h1>
                        <p className="text-[#E04F85]">Elevate your team bonding with our engaging baking workshops</p>
                        <Link href="/workshop" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                            Learn More
                            <ArrowRight size={20} />
                        </Link>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}