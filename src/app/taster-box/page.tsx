import Image from "next/image";

import { berkshireSwash } from "../layout";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function TasterBox() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/taster-box.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-bottom-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Taster Boxes
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Whether you’re indulging personally, gifting, or sharing with a group, our Taster Boxes are designed to bring your flavour dreams to life in every bite
                                </p>
                                <Link href="/" className="bg-[#0F4C81] text-white py-3 px-8 mt-3 rounded-3xl flex items-center gap-x-2 w-fit">
                                    Order now
                                    <Heart size={20} className="size-5" />
                                </Link>
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
                    <div className="max-w-[80%] mx-auto py-12 px-3 grid grid-cols-2 gap-x-8 items-center">

                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/illustration 1.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Easy on-the-go packaging</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Designed for convenience, our packaging guarantees seamless handling and transport,
                                keeping your treats fresh and ready to enjoy wherever you are.</span>
                        </div>

                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/Illustration 2.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Effortless ordering</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Our user-friendly e-commerce platform ensures
                                stress-free ordering and prompt delivery, perfect for busy schedules or last-minute events.</span>
                        </div>

                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/Illustration 3.png"} alt={"illustration3"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Build Your Box</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Imagine it, and we can make it happen. Create a custom selection that perfectly matches your event or personal taste.
                                Each box is filled with 4 slices and 8 servings, offering a delightful assortment to satisfy every preference.</span>
                        </div>
                        <div className={"flex flex-col items-center justify-center text-center lg:w-[400px]"}>
                            <img src={"/icon/Illustration 4.png"} alt={"illustration4"} className={"h-25 w-25"} />
                            <span className={"text-[#0F4C81] font-semibold"}>Event Takeaway</span>
                            <span className={"text-[#0F4C81] font-normal leading-[1.6] mt-2"}>Perfect for weddings, corporate events, or special occasions,
                                our Taster Boxes serve as thoughtful takeaways that guests will remember and savour long after the event..</span>
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
                                <h1 className={`${berkshireSwash.className} text-3xl leading-tight capitalize text-[#E04F85]`}>How it works</h1>
                                <ol className="list-decimal list-inside space-y-3 mt-6">
                                    <li>Click Subscribe Now - Choose your plan</li>
                                    <li>Select Quantity - One box, two, or more?</li>
                                    <li>See Price Update - Your total adjusts instantly based on your selection.</li>
                                    <li>Enter Payment & Delivery Details - Add your details and card for secure recurring billing.</li>
                                    <li>Enjoy FREE Monthly Deliveries - Sit back and let the flavours come to you.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}