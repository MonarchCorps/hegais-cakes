"use client";

import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { berkshireSwash } from "@/lib/fonts";

export default function WeddingCakes() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/wedding-cake.png"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_50%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Wedding Cakes
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    Our Wedding Cakes are designed to reflect your unique love story, blending stunning artistry with mouthwatering flavours.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="flex items-center justify-center">
                                    <Link href="/wedding-cakes/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                        Book a consultation
                                        <Heart size={20} className="size-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative  py-8 overflow-hidden">

                    <div className="relative py-12 max-w-[70rem] mx-auto">

                        <div className="px-3">
                            <div className="relative mb-8">
                                <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                    Exquisite designs, unforgettable taste
                                </h1>
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                            </div>
                            <p className="text-center text-lg max-w-[44rem] mx-auto mb-5 text-[#0F4C81] max-[510px]:text-base">
                                Our Wedding Cakes are designed to reflect your unique love story, blending stunning artistry with mouthwatering flavours.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 items-center max-[983px]:grid-cols-1 justify-items-center max-[983px]:px-5">
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex items-center justify-end pl-5 max-[983px]:justify-center max-[983px]:pl-0"
                            >
                                <img
                                    src="/images/wedding-cake-2.png"
                                    alt="How it works"
                                    className="max-w-[30rem] object-contain max-[983px]:max-w-[25rem] max-[412px]:max-w-[20rem]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                    Features
                                </h1>
                                <ol className="list-disc list-inside space-y-3 mt-6 mb-8">
                                    <li>Fully customized designs based on your preferences</li>
                                    <li>A wide range of flavours, fillings, and decorations</li>
                                    <li>Made with the finest ingredients for a truly indulgent experience</li>
                                    <li>Enjoy FREE Monthly Deliveries - Sit back and let the flavours come to you.</li>
                                </ol>
                                <Link href="/wedding-cakes/catalogue" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    View Catalogue
                                    <ArrowRight size={20} className="size-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 
            <section>
                <div className="relative py-12 px-3">
                    <div className="max-w-[90%] mx-auto">
                        <div className="relative mb-8">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                Exquisite designs, unforgettable taste
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                            </h1>
                        </div>
                        <p className="text-[#0F4C81] max-w-[40rem] mx-auto">
                            Whether your dream is a classic tiered beauty, a floral fantasy, or a bold modern statement, we design cakes that leave a lasting impression.
                        </p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-10 items-center">

                            <img
                                src={"/images/testimonial-2.webp"}
                                alt="Taster Box"
                                className="w-full max-h-[25rem] object-contain"
                            />
                            <div>
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#0F4C81]`}>Features</h1>
                                <ol className="list-decimal list-inside space-y-3 mt-6">
                                    <li>Fully customized designs based on your preferences</li>
                                    <li>A wide range of flavours, fillings, and decorations</li>
                                    <li>Made with the finest ingredients for a truly indulgent experience</li>
                                </ol>
                                <Link href="/wedding-cakes/catalogue" className="mt-10 bg-[#0F4C81] text-white py-3 px-8 rounded-3xl flex items-center gap-x-2 w-fit">
                                    View Catalogue
                                    <ArrowRight size={20} className="size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </main>
    );
}