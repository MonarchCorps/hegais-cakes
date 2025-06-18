import Image from "next/image";
import Link from "next/link";
import { berkshireSwash } from "../layout";
import { ArrowRight } from "lucide-react";
import { getProducts } from "@/http";
import { stripHtml } from "@/utils";

interface Product {
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    id: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    name: string;
    price: string;
    updated: string;
}

export default async function ShopPage() {
    const products: Product[] = await getProducts();
    
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

            <div className="py-12 px-6 lg:px-24 flex flex-col gap-8">
                <h1 className="text-2xl font-semibold text-[#0F4C81]">All Cakes</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product: Product) => (
                        <Link href={`/shop/${product.id}`} key={product.id} className="flex flex-col gap-2">
                            <img
                                src={product.image1}
                                alt={product.name}
                                className="h-[400px] w-full object-cover rounded-md shadow-md"
                            />
                            <span className="text-lg font-semibold">{product.name}</span>
                            <span className="text-sm text-gray-700 line-clamp-2">{stripHtml(product.description)}</span>
                            <span className="text-base text-[#0F4C81] font-bold">₦{product.price}</span>
                        </Link>
                    ))}
                </div>
            </div>

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
                                    Let&apos;s bring your cake dreams to life with a personalized design and flavor journey.
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