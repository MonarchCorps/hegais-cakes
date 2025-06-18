import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { berkshireSwash } from "../layout";

export default function BakingWorkshop() {
    return (
        <main>


            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/baking-workshop.jpg"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-bottom-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Baking Workshops
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Discover a unique way to learn, bond, and have fun with our hands-on baking workshops.
                                </p>
                                <Link href="/" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Book a workshop
                                    <Heart size={20} className="size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative py-12 px-3 bg-[#F7CAC9] ">
                    <div className="max-w-[90%] mx-auto">
                        <div className="relative mb-8">
                            <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85]`}>
                                Taster Box subscription
                                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#E04F85]"></span>
                            </h1>
                        </div>
                        <p className="text-[#E04F85] max-w-[40rem] mx-auto">
                            Discover New flavours, and experience perfect bite-sized delights delivered to your doorstep
                        </p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-10 items-center">
                            {/* <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
                                <img src={"/images/taster-box-1.webp"} alt="Taster Box 1" className="w-full max-h-[25rem] object-cover" />
                            </div> */}
                            <img
                                src={"/images/taster-box-2.png"}
                                alt="Taster Box"
                                className="w-full max-h-[25rem] object-contain"
                            />
                            <div>
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#E04F85]`}>Perfect For:</h1>
                                <ol className="list-decimal list-inside space-y-3 mt-6">
                                    <li>Compare team building sessions</li>
                                    <li>Recruitment agencies and application days</li>
                                    <li>Special events, from birthdays to bridal showers</li>
                                    <li>Friends and family gatherings</li>
                                    <Link href="/" className="bg-[#E04F85] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                        Book A Workshop
                                        <ArrowRight size={20} className="size-5 mt-2" />
                                    </Link>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="mt-10"
                >
                    <div className="relative mb-8">
                        <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#0F4C81]`}>
                            Taster Box Features
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10rem] h-1 bg-[#0F4C81]"></span>
                        </h1>
                    </div>
                    <p className="text-center text-lg text-[#0F4C81]">
                        The perfect bite-sized indulgence
                    </p>
                    <div className="max-w-[80%] mx-auto py-12 px-3 grid grid-cols-2 gap-x-8 gap-y-8 items-center justify-center ">

                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/illustration 1.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Replaces repetitive activities</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Say goodbye to the same old team-building exercises with a creative alternative that captivates.</span>
                        </div>

                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/Illustration 2.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>A Refreshing break</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Offer candidates and employees a unique, relaxing experience that fosters connection and leaves a lasting impression.</span>
                        </div>

                        <div className={"col-span-full flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/Illustration 3.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Boosts Brand Image</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Impress clients and employees with workshops that highlight your commitment to innovation and excellence and a fun work culture..</span>
                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
}