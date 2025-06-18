"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { berkshireSwash } from "@/lib/fonts";

export default function OurStoryContent() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/our-story.jpg"}
                                alt="Our Story"
                                fill
                                className="absolute inset-0 size-full object-cover object-[70%_30%] -z-10"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white max-[940px]:text-5xl max-[510px]:text-4xl`}>
                                    The Hegai Cakes Story
                                </motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#A7C7E7]">
                    <div className="max-w-[60rem] mx-auto py-12 px-5 grid grid-cols-2 gap-x-8 gap-y-8 items-center max-[770px]:grid-cols-1">
                        <motion.img
                            src={"/images/our-story.webp"}
                            alt="Our Story"
                            className="w-full max-h-[40rem] object-cover"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h1 className={`${berkshireSwash.className} mb-5 text-4xl leading-tight capitalize text-[#0F4C81]`}>How The founder got here</h1>
                            <p className="text-white leading-[1.6] text-lg">
                                Studying to become a Chemical Engineer meant that processes were part and parcel of how I viewed things. On the flip side, being a major sweet tooth with a natural flair for working with my hands, I landed at the Skills Fair hosted by the Blaze Student Society at The University of Manchester. Fast-forward to today, in Year 10 since the conception of Hegai Cakes, I love exciting the tastebuds of my clients through a well of flavours, not without feeding their eyes with designs that live on. Best part of it all - we’re just getting started! Strap up!≈
                            </p>
                            <p className="text-end text-[#E04F85] mt-4">~Olaoyin</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[60rem] mx-auto grid grid-cols-2 gap-x-20 gap-y-10 py-12 px-7 max-[980px]:gap-x-5 max-[680px]:grid-cols-1 max-[490px]:px-3">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="border border-[#D9D9D9] rounded-xl overflow-hidden max-h-[40rem] flex flex-col justify-between"
                    >
                        <img src="/images/our-story.jpg"
                            alt="Our Mission"
                            className="w-full max-h-[25rem] object-cover flex-1"
                        />
                        <div className="p-4">
                            <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>Our Mission</h1>
                            <p className="leading-[1.6] text-lg">
                                To deliver unforgettable cake products and services to each customer, leaning on our pillars of Premium Quality and Excellent Customer Service.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="border border-[#D9D9D9] rounded-xl overflow-hidden max-h-[40rem] flex flex-col justify-between"
                    >
                        <img src="/images/testimonial-3.webp"
                            alt="Our Vision"
                            className="w-full max-h-[25rem] object-cover flex-1"
                        />
                        <div className="p-4">
                            <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>Our Vision</h1>
                            <p className="leading-[1.6] text-lg">
                                To become a household name in the UK, known for the finest luxury cakes in taste, design and services.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}