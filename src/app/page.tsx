import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { berkshireSwash } from "./layout";
import Image from "next/image";
import Link from "next/link";
import SignupNewsLetter from "./signup-news-letter";

export default function Home() {
    return (
        <main>

            <section>
                <div className="relative h-[70vh] overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 size-full"></div>
                    <img
                        src={"/images/hero_image.webp"}
                        alt="Hero Image"
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                    />
                    <div className="relative grid grid-cols-2 size-full place-content-center px-10 z-50">
                        <div className="space-y-3 text-white">
                            <h1 className={`${berkshireSwash.className} text-5xl leading-tight capitalize text-white`}>“...because cake deserves its own moment”</h1>
                            <p className="text-lg">Discover luxury cakes, handcrafted to celebrate life&apos;s sweetest moments</p>
                            <Link href="/taster-box/inquiry" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Order now
                                <Heart size={20} className="size-5" />
                            </Link>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <img
                                src={"/images/hero_image_2.webp"}
                                alt="Hero Image 2"
                                className="absolute -bottom-16 left-10 size-[28rem] object-contain"
                            />
                            <img
                                src={"/images/hero_image_3.webp"}
                                alt="Hero Image 3"
                                className="absolute top-5 -right-14 size-[24rem] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative py-12 px-3 max-w-[95%] mx-auto">
                    <div className="relative mb-8">
                        <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                            Designed For Every Occassion
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                        </h1>
                    </div>
                    <p className="text-center mt-1">
                        Indulge in our delicious offerings—from tasting boxes to workshops, we bring your cake dreams to life.
                    </p>
                    <div className="relative max-w-[80%] mx-auto grid grid-cols-2 gap-x-32 gap-y-10 mb-20 mt-12 text-center place-content-center">

                        <img
                            src={"/images/cake-1.webp"}
                            alt="Cake 1"
                            className="absolute inset-0 w-full h-auto -z-10"
                        />
                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[30rem]">
                                <Image
                                    src={"/images/tasterbox.webp"}
                                    alt="Tasterbox"
                                    fill
                                    className="size-full object-cover"
                                />
                            </div>
                            <h1 className="text-[#333333] font-700 text-2xl mt-5">Taster Boxes</h1>
                            <p className="text-[#E04F85]">Easy, handy, and perfect for on-the-go moments</p>
                            <Link href="/taster-box" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Learn More
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[30rem]">
                                <Image
                                    src={"/images/wedding-cakes.webp"}
                                    alt="Wedding Cakes"
                                    fill
                                    className="size-full object-cover"
                                />
                            </div>
                            <h1 className="text-[#333333] font-700 text-2xl mt-5">Wedding Cakes</h1>
                            <p className="text-[#E04F85]">Exquisite, tailored creations for your big day</p>
                            <Link href="/wedding-cakes" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Learn More
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[30rem]">
                                <Image
                                    src={"/images/celebration-cakes.webp"}
                                    alt="Celebration Cakes"
                                    fill
                                    className="size-full object-cover"
                                />
                            </div>
                            <h1 className="text-[#333333] font-700 text-2xl mt-5">Celebration Cakes</h1>
                            <p className="text-[#E04F85]">Custom designs to make your special events unforgettable</p>
                            <Link href="/" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Learn More
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[30rem]">
                                <Image
                                    src={"/images/workshops.webp"}
                                    alt="Workshops"
                                    fill
                                    className="size-full object-cover"
                                />
                            </div>
                            <h1 className="text-[#333333] font-700 text-2xl mt-5">Workshops</h1>
                            <p className="text-[#E04F85]">Elevate your team bonding with our engaging baking workshops</p>
                            <Link href="/workshop" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                Learn More
                                <ArrowRight size={20} />
                            </Link>

                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#A7C7E7] py-8 px-4">
                    <div className="relative py-12 px-3 max-w-[95%] mx-auto">
                        <div className="relative mb-8">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                Our Cake Catalogue
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                            </h1>
                        </div>
                        <p className="text-center mt-1 text-[#0F4C81] max-w-[35rem] mx-auto">
                            Your dream cake, one click away! Find the perfect treat for birthdays, weddings, and every sweet tooth in between.
                        </p>
                        <div className="grid grid-cols-4 gap-x-4 gap-y-4 mt-10 mb-10">
                            <img
                                src={"/images/cake-2.webp"}
                                alt="Cake 2"
                                className="size-full object-cover"
                            />
                            <img
                                src={"/images/cake-3.webp"}
                                alt="Cake 3"
                                className="size-full object-cover"
                            />
                            <img
                                src={"/images/cake-4.webp"}
                                alt="Cake 4"
                                className="size-full object-cover"
                            />
                            <img
                                src={"/images/cake-5.webp"}
                                alt="Cake 5"
                                className="size-full object-cover"
                            />
                        </div>
                        <Link href="/shop" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit mx-auto">
                            Order Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative py-12 px-3 max-w-[70%] mx-auto">
                    <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                        Flavours of the Month
                    </h1>
                    <div className=" border-[3px] border-dashed border-[#F7CAC9] rounded-3xl p-4 mt-10 grid grid-cols-2 gap-x-8 items-center">
                        <img
                            src={"/images/pastry.webp"}
                            alt="Pastry"
                            className="size-full object-contain"
                        />
                        <div>
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>Red Velvet Bliss</h1>
                            <p className="text-[#E04F85] leading-[1.6] mt-3 text-start">
                                Indulge in the luxurious charm of our Red Velvet Bliss; a velvety smooth cake with a hint of cocoa, layered with rich cream cheese frosting. This classic favourite is perfectly flavourful and ideal for celebrations or a little self-pampering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative py-12 px-3 bg-[#A7C7E7] ">
                    <div className="max-w-[90%] mx-auto text-center">
                        <div className="relative mb-8">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                                Trusted by thousands,
                                <span className="text-[#E04F85]">loved by all!</span>
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                            </h1>
                        </div>
                        <p className="text-[#0F4C81] max-w-[40rem] mx-auto">
                            With 800+ events served, hegai cakes is the go-to for luxury cakes and curating indelible experiences.
                        </p>
                        <div className="w-fit mx-auto flex items-center justify-center gap-x-4 mt-10">
                            <button className="bg-[#0F4C81] text-white py-2 px-2 rounded-3xl flex items-center gap-x-2 w-fit">
                                <ArrowLeft size={20} />
                            </button>
                            <p className="flex-1 text-[#0F4C81] max-w-[40rem] mx-auto mt-12 text-center">
                                &ldquo;A pretty cake with great sponge! It was so moist!!! Everyone loved itt! Thank you so much again&ldquo;
                                <span className="font-bold text-[#0F4C81] mt-10">M.K</span>
                            </p>
                            <button className="bg-[#0F4C81] text-white py-2 px-2 rounded-3xl flex items-center gap-x-2 w-fit">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-x-4 gap-y-4 mt-10 overflow-x-scroll">
                            <img src={"/images/testimonial-2.webp"} alt="Testimonial 2" className="size-full object-cover" />
                            <img src={"/images/testimonial-3.webp"} alt="Testimonial 3" className="size-full object-cover" />
                            <img src={"/images/testimonial-4.webp"} alt="Testimonial 4" className="size-full object-cover" />
                            <img src={"/images/testimonial-5.webp"} alt="Testimonial 5" className="size-full object-cover" />
                            <img src={"/images/testimonial-6.webp"} alt="Testimonial 6" className="size-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <SignupNewsLetter />
        </main>
    );
}
