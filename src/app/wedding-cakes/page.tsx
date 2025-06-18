import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { berkshireSwash } from "../layout";

export default function WeddingCakes() {
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
                                    Wedding Cakes
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Our Wedding Cakes are designed to reflect your unique love story, blending stunning artistry with mouthwatering flavours.
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
                            {/* <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
                                <img src={"/images/taster-box-1.webp"} alt="Taster Box 1" className="w-full max-h-[25rem] object-cover" />
                            </div> */}
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
            </section>

        </main>
    );
}