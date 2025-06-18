import { berkshireSwash } from "@/app/layout";
import Image from "next/image";

export default function TasterBoxInquiry() {
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
                                    Taster Box Inquiry
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Every cake is as unique as the occasion it celebrates. Let’s craft yours together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <form className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6">
                    <div className="py-4 px-2">
                        <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">
                            Inquiry Form
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* Event Type */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="eventType">
                                Event Type:
                            </label>
                            <input
                                id="eventType"
                                name="eventType"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. Birthday, Wedding, Corporate"
                            />
                        </div>
                        {/* Event Date */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="eventDate">
                                Event Date:
                            </label>
                            <input
                                id="eventDate"
                                name="eventDate"
                                type="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Event Venue */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="eventVenue">
                                Event Venue:
                            </label>
                            <input
                                id="eventVenue"
                                name="eventVenue"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Venue address or location"
                            />
                        </div>
                        {/* Delivery Time */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="deliveryTime">
                                Delivery Time:
                            </label>
                            <input
                                id="deliveryTime"
                                name="deliveryTime"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. 2:00 PM"
                            />
                        </div>
                        {/* Number of Taster Boxes */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="numBoxes">
                                Number of Taster Boxes:
                            </label>
                            <input
                                id="numBoxes"
                                name="numBoxes"
                                type="number"
                                min={1}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. 5"
                            />
                        </div>
                        {/* Flavours */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="flavours">
                                Flavours (List four flavours):
                            </label>
                            <input
                                id="flavours"
                                name="flavours"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. Chocolate, Vanilla, Red Velvet, Lemon"
                            />
                        </div>
                        {/* Dietary Needs */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1">
                                Dietary Needs:
                            </label>
                            <div className="flex flex-wrap gap-4 items-center">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="dietaryNeeds" value="Gluten-Free" className="accent-[#0F4C81]" />
                                    <span className="ml-2 text-[#0F4C81]">Gluten-Free</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="dietaryNeeds" value="Vegan" className="accent-[#0F4C81]" />
                                    <span className="ml-2 text-[#0F4C81]">Vegan</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" name="dietaryNeeds" value="Other" className="accent-[#0F4C81]" />
                                    <span className="ml-2 text-[#0F4C81]">Other (Specify)</span>
                                </label>
                            </div>
                            {/* If Other, please specify */}
                            <input
                                type="text"
                                name="otherDietary"
                                className="mt-2 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="If Other, please specify"
                            />
                        </div>
                        {/* Company Name */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="companyName">
                                Company Name:
                            </label>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Contact Name */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="contactName">
                                Contact Name:
                            </label>
                            <input
                                id="contactName"
                                name="contactName"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Email Address */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="email">
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
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="phone">
                                Phone Number:
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                        {/* Additional Details or Special Requests */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="additionalDetails">
                                Additional Details or Special Requests:
                            </label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                rows={4}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="w-full bg-[#0F4C81] text-white py-2 px-4 rounded-full">
                            Send Inquiry
                        </button>
                    </div>

                </form>
            </section>

        </main>
    );
}