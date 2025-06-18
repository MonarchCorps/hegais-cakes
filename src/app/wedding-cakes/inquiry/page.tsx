

import { berkshireSwash } from "@/app/layout";
import Image from "next/image";

export default function WeddingCakesInquiry() {
    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[70vh]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/wedding-cake-inquiry.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-top-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Wedding Cake Inquiry
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Every wedding deserves a showstopping cake. Let’s design yours together.
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
                        {/* Wedding Date */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="weddingDate">
                                Wedding Date:
                            </label>
                            <input
                                id="weddingDate"
                                name="weddingDate"
                                type="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Wedding Date"
                            />
                        </div>
                        {/* Wedding Venue */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="weddingVenue">
                                Wedding Venue:
                            </label>
                            <input
                                id="weddingVenue"
                                name="weddingVenue"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Wedding Venue"
                            />
                        </div>
                        {/* Number of Tiers */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="numberOfTiers">
                                Number of Tiers:
                            </label>
                            <input
                                id="numberOfTiers"
                                name="numberOfTiers"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Number of Tiers"
                            />
                        </div>
                        {/* Number of Guests */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="numberOfGuests">
                                Number of Guests (please specify if you would like your cake to serve all your guests):
                            </label>
                            <input
                                id="numberOfGuests"
                                name="numberOfGuests"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Number of Guests"
                            />
                        </div>
                        {/* Cake Flavours */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="cakeFlavours">
                                Cake Flavours:
                            </label>
                            <input
                                id="cakeFlavours"
                                name="cakeFlavours"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Cake Flavours"
                            />
                        </div>
                        {/* Dietary Needs */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1">
                                Dietary Needs:
                            </label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dietaryNeeds"
                                        value="Gluten-Free"
                                        className="accent-[#0F4C81] mr-2"
                                    />
                                    Gluten-Free
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dietaryNeeds"
                                        value="Vegan"
                                        className="accent-[#0F4C81] mr-2"
                                    />
                                    Vegan
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dietaryNeeds"
                                        value="Other"
                                        className="accent-[#0F4C81] mr-2"
                                        id="otherDietaryNeedsCheckbox"
                                        // onChange={(e) => {
                                        //     const input = document.getElementById('otherDietaryNeedsInput') as HTMLInputElement;
                                        //     if (input) input.disabled = !e.target.checked;
                                        // }}
                                    />
                                    Other (Specify)
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="otherDietaryNeedsInput"
                                    name="otherDietaryNeeds"
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    placeholder="If Other, please specify"
                                    disabled
                                />
                            </div>
                            {/* Design Inspiration (Upload any reference photos) */}
                            <div className="mt-5">
                                <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="designInspiration">
                                    Design Inspiration (Upload any reference photos)
                                </label>
                                <input
                                    id="designInspiration"
                                    name="designInspiration"
                                    type="file"
                                    className="block w-full text-sm text-gray-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-[#F3F4F6] file:text-[#0F4C81]
                                        hover:file:bg-[#e0e7ef]"
                                />
                            </div>
                            {/* Couple's Names */}
                            <div className="mt-5">
                                <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="coupleNames">
                                    Couple's Names:
                                </label>
                                <input
                                    id="coupleNames"
                                    name="coupleNames"
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                />
                            </div>
                            {/* Email Address */}
                            <div className="mt-5">
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
                            <div className="mt-5">
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
                            <div className="mt-5">
                                <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="additionalDetails">
                                    Additional Details or Special Requests:
                                </label>
                                <textarea
                                    id="additionalDetails"
                                    name="additionalDetails"
                                    rows={4}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    placeholder="Enter any other details or special requests you have"
                                />
                            </div>
                            {/* Submit Button */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full bg-[#0F4C81] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#0d3a60] transition-colors"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}