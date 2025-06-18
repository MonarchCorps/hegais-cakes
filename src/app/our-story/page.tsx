import Image from "next/image";
import { berkshireSwash } from "../layout";

export default function OurStory() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/testimonial-2.webp"}
                                alt="Our Story"
                                fill
                                className="absolute inset-0 size-full object-cover object-top -z-10"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    The Hegai Cakes Story
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#A7C7E7]">
                    <div className="max-w-[80%] mx-auto py-12 px-3 grid grid-cols-2 gap-x-8 items-center">
                        <img
                            src={"/images/our-story.webp"}
                            alt="Our Story"
                            className="w-full max-h-[40rem] object-cover"
                        />
                        <div>
                            <h1 className={`${berkshireSwash.className} mb-5 text-4xl leading-tight capitalize text-[#0F4C81]`}>How The founder got here</h1>
                            <p className="text-white leading-[1.6] text-lg">
                                Studying to become a Chemical Engineer meant that processes were part and parcel of how I viewed things. On the flip side, being a major sweet tooth with a natural flair for working with my hands, I landed at the Skills Fair hosted by the Blaze Student Society at The University of Manchester. Fast-forward to today, in Year 10 since the conception of Hegai Cakes, I love exciting the tastebuds of my clients through a well of flavours, not without feeding their eyes with designs that live on. Best part of it all - we’re just getting started! Strap up!≈
                            </p>
                            <p className="text-end text-[#E04F85] mt-4">~Olaoyin</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[70%] mx-auto grid grid-cols-2 gap-x-20 py-12">
                    <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
                        <img src="/images/testimonial-2.webp"
                            alt="Our Mission"
                            className="w-full max-h-[25rem] object-cover"
                        />
                        <div className="p-4">
                            <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>Our Mission</h1>
                            <p className="leading-[1.6] text-lg">
                                To deliver unforgettable cake products and services to each customer, leaning on our pillars of Premium Quality and Excellent Customer Service.
                            </p>
                        </div>
                    </div>
                    <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
                        <img src="/images/testimonial-3.webp"
                            alt="Our Vision"
                            className="w-full max-h-[25rem] object-cover"
                        />
                        <div className="p-4">
                            <h1 className={`${berkshireSwash.className} mb-2 text-4xl leading-tight capitalize text-[#0F4C81]`}>Our Vision</h1>
                            <p className="leading-[1.6] text-lg">
                                To become a household name in the UK, known for the finest luxury cakes in taste, design and services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}