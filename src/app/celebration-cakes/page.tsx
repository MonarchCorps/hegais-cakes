"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { berkshireSwash } from "@/lib/fonts";
import { useEffect, useRef, useState } from "react";

const standardFlavours = [
    "African Cherry “Agbalumo”",
    "Chocolate",
    "Red Velvet",
    "Bacon Maple",
    "Coffee (w/ or w/out walnuts)",
    "Salted Caramel",
    "Banana",
    "Lemon",
    "Strawberry",
    "Black Forest",
    "Mango Passionfruit",
    "Vanilla",
    "Blueberry",
    "Oreo Sponge",
    "Victoria Sponge",
    "Carrot (w/ or w/out nuts)",
    "Raspberry Ripple",
    "White Chocolate",
]

const standardPricing = [
    `5": £106.25`,
    `9": £189.85`,
    `6": £126.56`,
    `10": £210.94`,
    `14": £295.31`,
    `7": £147.66`,
    `11": £232.04`,
    `15": £316.41`,
    `8": £168.75`,
    `12": £253.13`,
    `16": £337.50`,
]

const celebrationCakeImages = [
    "/images/celebration-cake-1.jpg",
    "/images/celebration-cake-2.jpg",
    "/images/celebration-cake-3.jpg",
    "/images/celebration-cake-4.jpg",
    "/images/celebration-cake-5.jpg",
]

export default function CelebrationCakes() {

    const [activeIdx, setActiveIdx] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Update activeIdx on scroll
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        const handleScroll = () => {
            const children = Array.from(scrollContainer.children);
            const scrollLeft = scrollContainer.scrollLeft;
            let minDiff = Infinity;
            let idx = 0;
            children.forEach((child, i) => {
                const el = child as HTMLElement;
                const diff = Math.abs(el.offsetLeft - scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    idx = i;
                }
            });
            setActiveIdx(idx);
        };
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to image when dot is clicked
    const handleDotClick = (idx: number) => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        const child = scrollContainer.children[idx] as HTMLElement;
        if (child) {
            scrollContainer.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
            setActiveIdx(idx);
        }
    };

    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/celebration-cakes.jpg"}
                                alt="Celebration Cakes"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_30%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Celebration Cakes
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    At Hegai Cakes, we specialize in custom Celebration Cakes that match your theme, style, and taste.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="flex items-center justify-center">
                                    <Link href="/celebration-cakes/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                        Order now
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
                                    src="/images/celebration-cake-feature.png"
                                    alt="Celebration Cakes Features"
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
                                    <li>Tailored designs for birthdays, anniversaries, corporate events, and more</li>
                                    <li>Endless flavour options and artistic decorations to suit your theme</li>
                                    <li>Freshly baked using premium ingredients to ensure every slice is a delight</li>
                                </ol>
                                <Link href="/celebration-cakes/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Order Your Bespoke Cake
                                    <ArrowRight size={20} className="size-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <div className="relative bg-[#F7CAC9] py-8 overflow-hidden">
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

                    <div className="relative py-12 max-w-[70rem] mx-auto space-y-12 px-4">

                        <div className="mb-12">
                            <div className="relative mb-6">
                                <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                    Our Standard Flavours
                                </h1>
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                            </div>
                            <p className="text-center text-lg text-[#E04F85]">
                                Delicious classics to make every celebration memorable..
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-x-4 gap-y-5 max-[1040px]:grid-cols-3 max-[780px]:grid-cols-2 max-[555px]:grid-cols-1">
                            {standardFlavours.map((flavour, index) => (
                                <div key={index} className="flex items-center gap-x-3 max-[555px]:justify-center">
                                    <img
                                        src="/images/cake.png"
                                        alt={flavour}
                                        className="size-10 object-contain"
                                    />
                                    <p>{flavour}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mb-12">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                Pricing starts from...
                            </h1>
                        </div>

                        <div className="grid grid-cols-4 gap-x-4 gap-y-5 max-[1040px]:grid-cols-3 max-[780px]:grid-cols-2 max-[555px]:grid-cols-1">
                            {standardPricing.map((pricing, index) => (
                                <div key={index} className="flex items-center gap-x-3 max-[555px]:justify-center">
                                    <img
                                        src="/images/cake.png"
                                        alt={pricing}
                                        className="size-10 object-contain"
                                    />
                                    <p>{pricing}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="relative py-12">
                    <div className="relative max-w-[90%] mx-auto text-center overflow-hidden">

                        <img
                            src="/images/cupcake-blue.png"
                            alt="Cupcake Blue"
                            className="absolute rotate-[40deg] top-[12%] left-[-12%] size-[15rem] object-contain max-[510px]:size-[8rem]"
                        />

                        <img
                            src="/images/slice-cake.png"
                            alt="Cupcake Blue"
                            className="absolute rotate-[-1deg] left-1/2 -translate-x-1/2 top-[34%] size-[5rem] object-contain max-[510px]:size-[8rem]"
                        />

                        <img
                            src="/images/slice-cake.png"
                            alt="Cupcake Blue"
                            className="absolute rotate-[20deg] top-[-18%] -right-16 size-[8rem] object-contain max-[510px]:size-[8rem]"
                        />

                        <div className="relative mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.7 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                Custom Cake Carousel
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            className="text-[#0F4C81] max-w-[40rem] mx-auto">
                            Swipe through a world of possibilities, and let&apos;s design your perfect cake together
                        </motion.p>

                    </div>
                    <div
                        ref={scrollRef}
                        className="testimonial-scroll flex items-center gap-x-4 gap-y-4 mt-10 overflow-x-scroll scrollbar-hide px-1"
                    >
                        {celebrationCakeImages.map((img, idx) => (
                            <motion.img
                                key={img}
                                src={img}
                                alt={img}
                                className="min-w-[18rem] min-h-[20rem] object-cover"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.12 }}
                                viewport={{ once: true, amount: 0.25 }}
                            />
                        ))}
                    </div>

                    <div className="w-fit mx-auto flex items-start justify-center gap-x-4 mt-16">
                        <motion.button
                            initial={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            onClick={() => {
                                const scrollContainer = scrollRef.current;
                                if (scrollContainer) {
                                    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
                                }
                            }}
                            className="cursor-pointer bg-[#0F4C81] text-white py-2 px-2 rounded-3xl flex items-center gap-x-2 w-fit max-[555px]:hidden"
                        >
                            <ArrowLeft size={20} />
                        </motion.button>

                        <div className="flex justify-center items-center gap-3 mt-4">
                            {celebrationCakeImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-4 h-4 rounded-full border-2 border-[#0F4C81] transition-all duration-200 ${activeIdx === idx ? 'bg-[#0F4C81]' : 'bg-white'}`}
                                    onClick={() => handleDotClick(idx)}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            onClick={() => {
                                const scrollContainer = scrollRef.current;
                                if (scrollContainer) {
                                    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
                                }
                            }}
                            className="cursor-pointer bg-[#0F4C81] text-white py-2 px-2 rounded-3xl flex items-center gap-x-2 w-fit max-[555px]:hidden"
                        >
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </div>
            </section>

        </main>
    )

}