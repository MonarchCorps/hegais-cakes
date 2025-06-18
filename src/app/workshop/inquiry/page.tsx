import { berkshireSwash } from "@/app/layout";
import Image from "next/image";

export default function BookWorkshopInquiryPage() {
    return (
        <main>
            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/tasterbox-inquiry.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-top-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Book A Workshop
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Let’s make memories! Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <form className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6 mt-8">
                    <div className="py-2 px-2">
                        <p className="text-[#0F4C81] text-xl font-semibold mb-5">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* Full Name/Company Name */}
                        <div>
                            <label htmlFor="name" className="block text-[#0F4C81] font-medium mb-1">
                                Full Name/Company Name:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-[#0F4C81] font-medium mb-1">
                                Email Address:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-[#0F4C81] font-medium mb-1">
                                Phone Number:
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Number of Participants */}
                        <div>
                            <label htmlFor="participants" className="block text-[#0F4C81] font-medium mb-1">
                                How many participants? (Exact number):
                            </label>
                            <input
                                id="participants"
                                name="participants"
                                type="number"
                                min="1"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Preferred Date */}
                        <div>
                            <label htmlFor="date" className="block text-[#0F4C81] font-medium mb-1">
                                Preferred Date:
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Cake Type/Flavour */}
                        <div>
                            <label htmlFor="cakeType" className="block text-[#0F4C81] font-medium mb-1">
                                What type of cake would you like to bake? (Type/Flavour):
                            </label>
                            <input
                                id="cakeType"
                                name="cakeType"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Desired Outcome */}
                        <div>
                            <label htmlFor="desiredOutcome" className="block text-[#0F4C81] font-medium mb-1">
                                Desired Outcome:
                            </label>
                            <textarea
                                id="desiredOutcome"
                                name="desiredOutcome"
                                rows={3}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] resize-none"
                            />
                        </div>
                        {/* Additional Details or Questions */}
                        <div>
                            <label htmlFor="additionalDetails" className="block text-[#0F4C81] font-medium mb-1">
                                Additional Details or Questions:
                            </label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                rows={3}
                                placeholder="Enter any other details or questions you have"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] resize-none"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#0F4C81] text-white py-2 px-4 rounded-3xl mt-8 font-semibold hover:bg-[#09375a] transition-colors"
                    >
                        Send Inquiry
                    </button>
                </form>
            </section>
        </main>
    );
}