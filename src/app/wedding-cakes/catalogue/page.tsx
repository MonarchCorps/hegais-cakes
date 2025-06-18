import { berkshireSwash } from "@/app/layout";
import { Banana, Carrot, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const catalogue = [
//     {
//         name: "A & A",
//         flavours: ["Salted Caramel", "Mango Passionfruit", "Lemon Poppyseed"],
//         photography: "Lucy Long Photography",
//         venue: "Bisham Abbey"
//     },
//     {
//         name: "A & C",
//         flavours: ["Strawberries & Cream"],
//         photography: "Boslens Studios",
//         venue: "-"
//     },
//     {
//         name: "T & E",
//         flavours: ["Red Velvet", "Carrot w/nuts", "Salted Caramel", "Chocolate Fruitcake"],
//         photography: "-",
//         venue: "Holiday Inn Basildon"
//     },
//     {
//         name: "M & W",
//         flavours: ["Red Velvet", "Mango Passionfruit", "Carrot w/out nuts", "Strawberry", "Banana"],
//         photography: "-",
//         venue: "De Vere Grand Connaught Rooms"
//     },
//     {
//         name: "J & S",
//         flavours: ["Vanilla", "Red Velvet", "Mango Passionfruit"],
//         photography: "Zeal Photography",
//         venue: "North Mymms Park"
//     },
//     {
//         name: "E & I",
//         flavours: ["Vanilla", "Red Velvet"],
//         photography: "Prestige Photography IRL",
//         venue: "The Glencarn Hotel Ireland"
//     }
// ]


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
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Wedding Cake Catalogue
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    A showcase of our past clients’ dream cake- the flavours, photographers & venues that made their day special
                                </p>
                                <Link href="/wedding-cakes/inquiry" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Book a consultation
                                    <Heart size={20} className="size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative py-12 px-3">
                    <div className="max-w-[70%] mx-auto">
                        <div className="relative mb-8">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                What’s Your Dream wedding cake
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                            </h1>
                        </div>
                        <p className="text-[#E04F85] max-w-[40rem] mx-auto">
                            Every couple’s cake is a reflection of their unique story. Let our wedding cake catalogue inspire your own dream creation.
                        </p>
                        <div className="grid grid-cols-2 gap-x-20 gap-y-4 mt-10 items-center">

                            <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">

                                <img src="/images/catalogue-2.webp"
                                    alt="Our Mission"
                                    className="w-full max-h-[25rem] object-cover"
                                />
                                <div className="p-4 text-[#E04F85]">
                                    <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>Our Mission</h1>
                                    <p className="leading-[1.6] text-lg">
                                        <span className="font-bold ">Flavours</span>: Salted Caramel | Mango Passionfruit | Lemon Poppyseed
                                    </p>
                                    <p className="leading-[1.6] text-lg">
                                        <span className="font-bold text-[#E04F85]">Photography</span>: Lucy Long Photography
                                    </p>
                                    <p className="leading-[1.6] text-lg">
                                        <span className="font-bold text-[#E04F85]">Venue</span>: Bisham Abbey
                                    </p>
                                </div>
                            </div>

                            <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
                                <img src="/images/catalogue-1.webp"
                                    alt="Our Vision"
                                    className="w-full max-h-[25rem] object-cover"
                                />
                                <div className="p-4">
                                    <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>A & A</h1>
                                    <p className="leading-[1.6] text-lg">
                                        To become a household name in the UK, known for the finest luxury cakes in taste, design and services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}