"use client";

import { berkshireSwash } from "@/lib/fonts";
import { createWeddingCakeInquiry } from "@/http";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useFormik } from "formik";
import { weddingCakeInquirySchema } from "@/schema";
import { motion } from "framer-motion";

export default function WeddingCakesInquiry() {
    const [loading, setLoading] = useState(false);
    const [dietaryOption, setDietaryOption] = useState("");

    const formik = useFormik({
        initialValues: {
            wedding_date: "",
            wedding_venue: "",
            number_of_tiers: "",
            number_of_guests: "",
            cake_flavours: "",
            dietary_needs: "",
            other_dietary_need: "",
            design_inspiration: null,
            couple_name: "",
            email: "",
            phone_number: "",
            additional_details: "",
        },
        validationSchema: weddingCakeInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createWeddingCakeInquiry(values);
                toast.success("Your wedding cake request has been received.");
                resetForm();
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/wedding-cake-inquiry.webp"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover object-top-right -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Wedding Cake Inquiry
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto max-[510px]:text-base">
                                    Every wedding deserves a showstopping cake. Let&apos;s design yours together.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[55rem] mx-auto py-12 px-3">
                    <div className="border-b-[2px] border-[#D9D9D9] pb-8">
                        <h1 className="text-[#0F4C81] font-bold text-3xl">Inquiry Form</h1>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 py-7">
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="wedding_date" className="font-medium text-[#333333] text-[18px]">Wedding Date:</label>
                            <input
                                type="date"
                                id="wedding_date"
                                name="wedding_date"
                                value={formik.values.wedding_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="wedding_venue" className="font-medium text-[#333333] text-[18px]">Wedding Venue:</label>
                            <input
                                type="text"
                                id="wedding_venue"
                                name="wedding_venue"
                                value={formik.values.wedding_venue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="number_of_tiers" className="font-medium text-[#333333] text-[18px]">Number of Tiers:</label>
                            <input
                                type="text"
                                id="number_of_tiers"
                                name="number_of_tiers"
                                value={formik.values.number_of_tiers}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="number_of_guests" className="font-medium text-[#333333] text-[18px]">Number of Guests:</label>
                            <input
                                type="text"
                                id="number_of_guests"
                                name="number_of_guests"
                                value={formik.values.number_of_guests}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="dietary_needs" className="font-medium text-[#333333] text-[18px]">Dietary Needs:</label>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center gap-x-2">
                                    <input
                                        type="radio"
                                        id="gluten_free"
                                        name="dietary_option"
                                        className="size-5"
                                        checked={dietaryOption === "Gluten-Free"}
                                        onChange={() => {
                                            setDietaryOption("Gluten-Free");
                                            formik.setFieldValue("dietary_needs", "Gluten-Free");
                                        }}
                                    />
                                    <label htmlFor="gluten_free" className="font-medium text-[#333333] text-[18px]">Gluten-Free</label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input
                                        type="radio"
                                        id="vegan"
                                        name="dietary_option"
                                        className="size-5"
                                        checked={dietaryOption === "Vegan"}
                                        onChange={() => {
                                            setDietaryOption("Vegan");
                                            formik.setFieldValue("dietary_needs", "Vegan");
                                        }}
                                    />
                                    <label htmlFor="vegan" className="font-medium text-[#333333] text-[18px]">Vegan</label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input
                                        type="radio"
                                        id="other"
                                        name="dietary_option"
                                        className="size-5"
                                        checked={dietaryOption === "Other"}
                                        onChange={() => {
                                            setDietaryOption("Other");
                                            formik.setFieldValue("dietary_needs", "");
                                        }}
                                    />
                                    <label htmlFor="other" className="font-medium text-[#333333] text-[18px]">Other (Please Specify)</label>
                                </div>
                            </div>
                            {dietaryOption === "Other" && (
                                <input
                                    type="text"
                                    id="dietary_needs"
                                    name="dietary_needs"
                                    value={formik.values.dietary_needs}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                                    required
                                    placeholder="Please specify dietary need"
                                />
                            )}
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="cake_flavours" className="font-medium text-[#333333] text-[18px]">Cake Flavours:</label>
                            <input
                                type="text"
                                id="cake_flavours"
                                name="cake_flavours"
                                value={formik.values.cake_flavours}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>


                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="design_inspiration" className="font-medium text-[#333333] text-[18px]">Design Inspiration (Upload any reference photos)</label>
                            <input
                                type="file"
                                id="design_inspiration"
                                name="design_inspiration"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="couple_name" className="font-medium text-[#333333] text-[18px]">Couples&apos; Names:</label>
                            <input
                                type="text"
                                id="couple_name"
                                name="couple_name"
                                value={formik.values.couple_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="email" className="font-medium text-[#333333] text-[18px]">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="phone_number" className="font-medium text-[#333333] text-[18px]">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                value={formik.values.phone_number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="additional_details" className="font-medium text-[#333333] text-[18px]">Additional Details or Special Requests:</label>
                            <textarea
                                id="additional_details"
                                name="additional_details"
                                value={formik.values.additional_details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter any other details or special requests you have"
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium h-60 resize-none"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="cursor-pointer w-full bg-[#0F4C81] text-white py-4 px-3 rounded-full font-semibold text-lg border-2 border-current hover:bg-transparent hover:text-[#0F4C81] hover:border-[#0F4C81] transition-all duration-300"
                            >
                                {loading ? "Sending..." : "Send Inquiry"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </main>
    );
}