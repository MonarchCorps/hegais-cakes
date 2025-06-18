"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from 'react';

import { berkshireSwash } from "@/lib/fonts";
import { motion } from "framer-motion";

const testimonialImages = [
    { src: "/images/testimonial-2.webp", alt: "Testimonial 2" },
    { src: "/images/testimonial-3.webp", alt: "Testimonial 3" },
    { src: "/images/testimonial-4.webp", alt: "Testimonial 4" },
    { src: "/images/testimonial-5.webp", alt: "Testimonial 5" },
    { src: "/images/testimonial-6.webp", alt: "Testimonial 6" },
];

export default function Testimonials() {
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
        }
    };

    return (
        <section>
            <div className="relative py-12 bg-[#A7C7E7] ">
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
                            Trusted by thousands,
                            <span className="text-[#E04F85]">loved by all!</span>
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="text-[#0F4C81] max-w-[40rem] mx-auto">
                        With 800+ events served, hegai cakes is the go-to for luxury cakes and curating indelible experiences.
                    </motion.p>

                    <div className="w-fit mx-auto flex items-center justify-center gap-x-4 mt-3">
                        {/* Hide buttons on <=555px */}
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
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.7 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            className="flex-1 text-[#0F4C81] max-w-[40rem] mx-auto mt-12 text-center">
                            &ldquo;A pretty cake with great sponge! It was so moist!!! Everyone loved itt! Thank you so much again&ldquo;
                            <p className="font-bold text-[#0F4C81] mt-7">M.K</p>
                        </motion.h1>
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

                    {/* Dots for mobile */}
                    <div className="flex justify-center items-center gap-3 mt-4 min-[556px]:hidden">
                        {testimonialImages.map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-4 h-4 rounded-full border-2 border-[#0F4C81] transition-all duration-200 ${activeIdx === idx ? 'bg-[#0F4C81]' : 'bg-white'}`}
                                onClick={() => handleDotClick(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
                <div
                    ref={scrollRef}
                    className="testimonial-scroll flex items-center gap-x-4 gap-y-4 mt-10 overflow-x-scroll scrollbar-hide px-1"
                >
                    {testimonialImages.map((img, idx) => (
                        <motion.img
                            key={img.alt}
                            src={img.src}
                            alt={img.alt}
                            className="min-w-[18rem] min-h-[20rem] object-cover"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: idx * 0.12 }}
                            viewport={{ once: true, amount: 0.25 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}