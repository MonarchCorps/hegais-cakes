"use client";

import { berkshireSwash } from "@/lib/fonts";
import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section>
            <div className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/50 size-full"></div>
                <img
                    src={"/images/hero_image.webp"}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="relative grid grid-cols-[1fr_500px] size-full place-content-center px-10 z-50 max-[1125px]:grid-cols-[1fr_400px] max-[830px]:grid-cols-1 max-[510px]:px-4 max-[510px]:text-center">
                    <div className="space-y-3 text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`${berkshireSwash.className} text-5xl leading-tight capitalize text-white max-[510px]:text-[37px]`}>
                            “...because cake deserves its own moment”
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-lg">Discover luxury cakes, handcrafted to celebrate life&apos;s sweetest moments</motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-[510px]:flex max-[510px]:items-center max-[510px]:justify-center"
                        >
                            <Link href="/taster-box/inquiry" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Order now
                                <Heart size={20} className="size-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="relative flex items-center justify-center max-[830px]:hidden">
                        <img
                            src={"/images/hero_image_2.webp"}
                            alt="Hero Image 2"
                            className="absolute -bottom-16 left-1 size-[28rem] object-contain max-[1259px]:size-[22rem] max-[1125px]:w-[18rem] max-[1125px]:left-20"
                        />
                        <img
                            src={"/images/hero_image_3.webp"}
                            alt="Hero Image 3"
                            className="absolute top-[30%] -right-14 size-[24rem] object-contain max-[1259px]:size-[22rem]"
                        />
                    </div>

                </div>
            </div>
        </section>

    );
}