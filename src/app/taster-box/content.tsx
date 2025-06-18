"use client"

import Image from "next/image";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { berkshireSwash } from "@/lib/fonts";

const features =
    [
        {
            img: "/icon/illustration 1.png",
            alt: "Easy on-the-go packaging",
            title: "Easy on-the-go packaging",
            desc: "Designed for convenience, our packaging guarantees seamless handling and transport, keeping your treats fresh and ready to enjoy wherever you are."
        },
        {
            img: "/icon/Illustration 2.png",
            alt: "Effortless ordering",
            title: "Effortless ordering",
            desc: "Our user-friendly e-commerce platform ensures stress-free ordering and prompt delivery, perfect for busy schedules or last-minute events."
        },
        {
            img: "/icon/Illustration 3.png",
            alt: "Build Your Box",
            title: "Build Your Box",
            desc: "Imagine it, and we can make it happen. Create a custom selection that perfectly matches your event or personal taste."
        },
        {
            img: "/icon/Illustration 4.png",
            alt: "Event Takeaway",
            title: "Event Takeaway",
            desc: "Perfect for weddings, corporate events, or special occasions, our Taster Boxes serve as thoughtful takeaways that guests will remember and savour long after the event."
        }
    ]

export default function TasterBoxContent() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/taster-box.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-bottom-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Taster Boxes
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    Whether you’re indulging personally, gifting, or sharing with a group, our Taster Boxes are designed to bring your flavour dreams to life in every bite
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="flex items-center justify-center">
                                    <Link href="/taster-box/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
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
                            Taster B
                            <span>
                                <img
                                    src={"/images/star-vector.png"}
                                    alt="Star Vector"
                                    className="w-5 object-contain"
                                />
                            </span>
                            x Features
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                        </h1>
                    </div>
                    <p className="text-center text-lg text-[#0F4C81]">
                        The perfect bite-sized indulgence
                    </p>

                    <div className="max-w-[60rem] mx-auto my-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-center justify-center px-5 max-[763px]:grid-cols-1">

                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col items-center justify-center text-center text-[#0F4C81] space-y-3"
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
                                    <p className="leading-[2]">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}

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

                    <div className="relative py-12 max-w-[70rem] mx-auto">

                        <div className="mb-12">
                            <div className="relative mb-6">
                                <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                    Taster Box subscription
                                </h1>
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                            </div>
                            <p className="text-center text-lg text-[#E04F85]">
                                Discover New flavours, and experience perfect bite-sized delights delivered to your doorstep
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
                                    src="/images/how-it-works.png"
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
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#E04F85]`}>How it works</h1>
                                <ol className="list-decimal list-inside space-y-3 mt-6 mb-8">
                                    <li>Click Subscribe Now - Choose your plan</li>
                                    <li>Select Quantity - One box, two, or more?</li>
                                    <li>See Price Update - Your total adjusts instantly based on your selection.</li>
                                    <li>Enter Payment & Delivery Details - Add your details and card for secure recurring billing.</li>
                                    <li>Enjoy FREE Monthly Deliveries - Sit back and let the flavours come to you.</li>
                                </ol>
                                <Link href="#signup-news-letter" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Subscribe Now
                                    <ArrowRight size={20} className="size-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}