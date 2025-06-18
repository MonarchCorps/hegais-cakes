import Image from "next/image";
import Link from "next/link";
import { berkshireSwash } from "../layout";
import { ArrowRight } from "lucide-react";

export default function ShopPage() {
    return (
        <main>
            {/* Header Section */}

            <section>
                <div>
                    <div className="relative h-[50vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/baking-workshop.jpg"}
                                alt="Baking Shop"
                                fill
                                className="absolute inset-0 size-full object-cover object-top-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Shop
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div className="relative h-[50vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/shop.webp"}
                                alt="Shop"
                                fill
                                className="absolute inset-0 size-full object-cover object-top-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-5xl leading-tight capitalize text-white`}>
                                    Need something custom? Book a Consultation!
                                </h1>
                                <p className="mb-6 text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Let’s bring your cake dreams to life with a personalized design and flavor journey.
                                </p>
                                <Link href="/workshop/inquiry" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Book A Consultation
                                    <ArrowRight size={20} className="size-5 mt-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}