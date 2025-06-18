"use client"

import { berkshireSwash } from "@/lib/fonts";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const catalogue = [
    {
        name: "A & A",
        flavours: ["Salted Caramel", "Mango Passionfruit", "Lemon Poppyseed"],
        photography: "lucy Long Photography",
        venue: "Bisham Abbey",
        mainImage: "/images/catalogue-1-main.jpg",
        subImage: "/images/catalogue-1-sub.jpg",
    },
    {
        name: "A & C",
        flavours: ["Strawberries & Cream"],
        photography: "Boslens Studios",
        venue: "-",
        mainImage: "/images/catalogue-2-main.png",
        subImage: "/images/catalogue-2-sub.png",
    },
    {
        name: "T & E",
        flavours: ["Red Velvet", "Carrot w/nuts", "Salted Caramel", "Chocolate Fruitcake"],
        photography: "",
        venue: "Holiday Inn Basildon",
        mainImage: "/images/catalogue-3-main.jpg",
        subImage: "/images/catalogue-3-sub.jpg",
    },
    {
        name: "M & W",
        flavours: ["Red Velvet", "Carrot w/nuts", "Salted Caramel", "Strawberry", "Banana"],
        photography: "",
        venue: "De Vere Grand Connaught Rooms",
        mainImage: "/images/catalogue-4-main.jpg",
        subImage: "/images/catalogue-4-sub.jpg",
    },
    {
        name: "J & S",
        flavours: ["Vanilla", "Red Velvet", "Mango Passionfruit"],
        photography: "Prestige Photography IRL",
        venue: "The Glencarn Hotel Ireland",
        mainImage: "/images/catalogue-5-main.jpg",
        subImage: "/images/catalogue-5-sub.jpg",
    },
    {
        name: "E & I",
        flavours: ["Vanilla", "Red Velvet"],
        photography: "Zeal Photography",
        venue: "North Mymms Park",
        mainImage: "/images/catalogue-6-main.jpg",
        subImage: "/images/catalogue-6-sub.jpg",
    },
    {
        name: "T & F",
        flavours: ["White Chocolate", "Salted Caramel", "Vanilla"],
        photography: "Bigg Ayo",
        venue: "Warbrook House",
        mainImage: "/images/catalogue-7-main.jpg",
        subImage: "/images/catalogue-7-sub.jpg",
    },
    {
        name: "O & J",
        flavours: ["Chocolate", "Lemon Poppyseed", "Salted Caramel"],
        photography: "",
        venue: "Hedsor House",
        mainImage: "/images/catalogue-8-main.jpg",
    },
    {
        name: "C & F",
        flavours: ["Ginger Rum cake w/ pralines & marzipan", "Champagne Vanilla w/ pralines & marzipan"],
        photography: "JJP Studios",
        venue: "Kimpton Fitzroy London",
        mainImage: "/images/catalogue-9-main.jpg",
    },
    {
        name: "O & G",
        flavours: ["Gingerbread cake w/ chocolate cream cheese frosting & caramelised...", "Champagne Vanilla w/ pralines & marzipan"],
        photography: "Emmanuel Photography",
        venue: "The Glencarn Hotel Ireland",
        mainImage: "/images/catalogue-10-main.jpg",
        subImage: "/images/catalogue-10-sub.jpg",
    },
    {
        name: "T & C",
        flavours: ["Cappuccino", "Lemon & White Velvet", "Salted Caramel"],
        photography: "Noris Nyamekye",
        venue: "Quendon Hall",
        mainImage: "/images/catalogue-11-main.jpg",
        subImage: "/images/catalogue-11-sub.jpg",
    },
    {
        name: "T & Y",
        flavours: ["Black Forest", "Red Velvet", "Oreo Sponge", "Butterscotch", "Vegan Oreo"],
        photography: "Dudu Weddings",
        venue: "Hilton London Croydon",
        mainImage: "/images/catalogue-12-main.jpg",
    },
    {
        name: "F & F",
        flavours: ["Vanilla", "Chocolate", "Red Velvet", "White Chocolate"],
        photography: "",
        mainImage: "/images/catalogue-13-main.jpg",
    },
    {
        name: "Z & K",
        flavours: ["Cookies & Cream", "Red Velvet", "Fruitcake"],
        photography: "",
        mainImage: "/images/catalogue-14-main.jpg",
    },
    {
        name: "O & M",
        flavours: ["Red Velvet", "Vanilla", "Salted Caramel", "Oreo Sponge", "Coffee", "Chocolate", "White Chocolate"],
        photography: "",
        venue: "The Bailey’s Hotel (Traditional) | Grange Wellington Hotel (White Wedding)",
        mainImage: "/images/catalogue-15-main.jpg",
        subImage: "/images/catalogue-15-sub.jpg",
    },
    {
        name: "D & D",
        flavours: ["Vanilla", "Salted Caramel", "Red Velvet", "Oreo Sponge"],
        photography: "",
        venue: "The Bailey’s Hotel (Traditional) | Grange Wellington Hotel (White Wedding)",
        mainImage: "/images/catalogue-16-main.jpg",
    }
]


export default function WeddingCakesCatalogue() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/wedding-cake.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-bottom-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-1">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white max-[835px]:text-5xl mb-3`}>
                                    Wedding Cake Catalogue
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto max-[835px]:text-base mb-2">
                                    A showcase of our past clients’ dream cake- the flavours, photographers & venues that made their day special
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
                <div className="relative py-12 px-3">
                    <div className="max-w-[65rem] mx-auto">
                        <div className="max-w-[40rem] mx-auto text-center">
                            <div className="relative mb-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                    What’s Your Dream wedding cake
                                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                                </motion.h1>
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                transition={{ duration: 0.8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#E04F85]">
                                Every couple’s cake is a reflection of their unique story. Let our wedding cake catalogue inspire your own dream creation.
                            </motion.p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-20 gap-y-10 mt-10 items-center max-[1063px]:gap-x-5 max-[835px]:grid-cols-1">

                            {catalogue.map((cake, idx) => (
                                <div key={idx} className="border border-[#D9D9D9] flex flex-col rounded-3xl overflow-hidden">
                                    <div className="w-full h-[27rem] relative">
                                        <img
                                            src={cake.mainImage}
                                            alt={cake.name}
                                            className="size-full object-cover"
                                        />
                                        {cake?.subImage && (
                                            <div className="absolute bottom-5 right-2 size-[12rem] border-2 border-white bg-white">
                                                <img
                                                    src={cake.subImage}
                                                    alt={cake.name}
                                                    className="size-full object-cover border-3 border-white "
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-5 px-5">
                                        <h1 className={`${berkshireSwash.className} text-3xl font-bold text-[#0F4C81]`}>{cake.name}</h1>
                                        <div>
                                            <ul className="text-[#E04F85] mt-3 space-y-4">
                                                <li className="space-x-2">
                                                    <span className="font-bold text-xl">Flavours:</span>
                                                    <span className="text-xl">
                                                        {cake.flavours.join(" | ")}
                                                    </span>
                                                </li>
                                                <li className="space-x-2">
                                                    <span className="font-bold text-xl">Photography:</span>
                                                    <span className="text-xl">
                                                        {cake.photography}
                                                    </span>
                                                </li>
                                                <li className="space-x-2">
                                                    <span className="font-bold text-xl">Venue:</span>
                                                    <span className="text-xl">
                                                        {cake.venue}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}