"use client";

import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { berkshireSwash } from "@/lib/fonts";
import { motion } from "framer-motion";

const features = [
    {
        img: "/icon/Illustration 1.png",
        alt: "Replaces repetitive activities",
        title: "Replaces repetitive activities",
        desc: "Say goodbye to the same old team-building exercises with a creative alternative that captivates."
    },
    {
        img: "/icon/Illustration 2.png",
        alt: "A Refreshing break",
        title: "A Refreshing break",
        desc: "Offer candidates and employees a unique, relaxing experience that fosters connection and leaves a lasting impression."
    },
    {
        img: "/icon/Illustration 3.png",
        alt: "Boosts Brand Image",
        title: "Boosts Brand Image",
        desc: "Impress clients and employees with workshops that highlight your commitment to innovation and excellence and a fun work culture."
    }
]

export default function BakingWorkshop() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/baking-workshop.jpg"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_1%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Baking Workshops
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    Discover a unique way to learn, bond, and have fun with our hands-on baking workshops.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="flex items-center justify-center">
                                    <Link href="/workshop/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                        Book a workshop
                                        <Heart size={20} className="size-5" />
                                    </Link>
                                </motion.div>
                            </div>
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

                    <div className="relative py-12 max-w-[60rem] mx-auto">

                        <div className="mb-12 px-2">
                            <div className="relative mb-6">
                                <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                    learn, create, enjoy
                                </h1>
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                            </div>
                            <p className="text-center text-lg text-[#E04F85]">
                                For individuals, corporate teams, or groups celebrating a special occasion, our workshops are designed to inspire creativity, foster collaboration, and create unforgettable memories.
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
                                    src="/images/baking-workshop.png"
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
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#E04F85]`}>Perfect For:</h1>
                                <ol className="list-decimal list-inside space-y-3 mt-6 mb-8">
                                    <li>Corporate team-building sessions</li>
                                    <li>Recruitment agencies and application days</li>
                                    <li>Special events, from birthdays to bridal showers</li>
                                    <li>Friends and family gatherings</li>
                                </ol>
                                <Link href="/workshop/inquiry" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Book a workshop
                                    <ArrowRight size={20} className="size-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div
                    className="relative mt-10"
                >
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="absolute top-0 left-10 w-5 object-contain"
                    />
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="absolute top-[26%] right-6 -translate-x-1/2 w-5 object-contain"
                    />
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="absolute top-[26%] left-6 -translate-x-1/2 w-5 object-contain"
                    />
                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-5 object-contain"
                    />

                    <img
                        src={"/images/star-vector.png"}
                        alt="Star Vector"
                        className="absolute top-16 right-6 -translate-x-1/2 w-5 object-contain"
                    />

                    <div className="relative mb-8">
                        <h1 className={`${berkshireSwash.className} w-full text-center text-3xl leading-tight capitalize text-[#0F4C81] inline-flex items-center justify-center gap-x-2`}>
                            Why It&apos;s Worth It
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                        </h1>
                    </div>
                    <p className="text-center text-lg text-[#0F4C81]">
                        Discover the sweet benefits of our workshops
                    </p>

                    <div className="max-w-[60rem] mx-auto my-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-center justify-center px-5 max-[763px]:grid-cols-1">

                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`flex flex-col items-center justify-center text-center text-[#0F4C81] space-y-3 ${idx === 2 && "col-span-full"}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <img
                                        src={feature.img}
                                        alt={feature.alt}
                                        className="w-30 object-cover"
                                    />
                                    <h1 className="text-3xl font-semibold">{feature.title}</h1>
                                    <p className="leading-[2] max-w-[40rem]">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div>
                    <div className="relative h-[34rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/memories.jpg"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_1%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-4xl leading-tight capitalize text-white mb-3 max-[510px]:text-3xl`}>
                                    Let’s make memories! Join our workshop today.
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life!
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="flex items-center justify-center">
                                    <Link href="/workshop/inquiry" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                        Book a workshop
                                        <Heart size={20} className="size-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}