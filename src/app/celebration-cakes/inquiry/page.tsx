"use client";

import { createBespokeCakeInquiry } from "@/http";
import { berkshireSwash } from "@/lib/fonts";
import { celebrationCakeInquirySchema } from "@/schema";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CelebrationCakesInquiry() {
    const [loading, setLoading] = useState(false);
    const [dietaryOption, setDietaryOption] = useState("");

    const formik = useFormik({
        initialValues: {
            birthday: "",
            event_type: "",
            event_date: "",
            event_time: "",
            theme_or_inspiration: "",
            number_of_tiers: "",
            tier_shape: "",
            size: "",
            flavours: "",
            design_inspiration: null,
            arrange_collection_ickenham: "",
            full_name: "",
            email: "",
            phone_number: "",
            additional_details: "",
            dietary_needs: "",
            other_dietary_need: "",
        },
        validationSchema: celebrationCakeInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createBespokeCakeInquiry(values);
                toast.success("Yay! Your inquiry has been received 🍰");
                resetForm();
            } catch (error) {
                console.error("Error creating bespoke cake inquiry:", error);
                throw error;
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <main>

            <section>
                <div>
                    <div className="relative h-[30rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/bespoke-cake-inquiry.jpg"}
                                alt="Taster Box"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Bespoke Cake Inquiry
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto max-[510px]:text-base">
                                    Every cake is as unique as the occasion it celebrates. Let&apos;s craft yours together.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[55rem] mx-auto py-12 px-5">
                    <div className="border-b-[2px] border-[#D9D9D9] pb-8">
                        <h1 className="text-[#0F4C81] font-bold text-3xl">Inquiry Form</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 py-7">
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="birthday" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Birthday:</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={formik.values.birthday}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="event_type" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Event Type:</label>
                            <input
                                type="text"
                                id="event_type"
                                name="event_type"
                                value={formik.values.event_type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="event_date" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Event Date:</label>
                            <input
                                type="date"
                                id="event_date"
                                name="event_date"
                                value={formik.values.event_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="event_time" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Event Time:</label>
                            <input
                                type="time"
                                id="event_time"
                                name="event_time"
                                value={formik.values.event_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="theme_or_inspiration" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Theme or Inspiration:</label>
                            <input
                                type="text"
                                id="theme_or_inspiration"
                                name="theme_or_inspiration"
                                value={formik.values.theme_or_inspiration}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="number_of_tiers" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Number of Tiers:</label>
                            <input
                                type="number"
                                id="number_of_tiers"
                                name="number_of_tiers"
                                value={formik.values.number_of_tiers}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                min={1}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="tier_shape" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Tier Shape:</label>
                            <input
                                type="text"
                                id="tier_shape"
                                name="tier_shape"
                                value={formik.values.tier_shape}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="size" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Size:</label>
                            <input
                                type="text"
                                id="size"
                                name="size"
                                value={formik.values.size}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="flavours" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Flavours:</label>
                            <input
                                type="text"
                                id="flavours"
                                name="flavours"
                                value={formik.values.flavours}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Dietary Needs:</label>
                            <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
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
                                            formik.setFieldValue("other_dietary_need", "");
                                        }}
                                    />
                                    <label htmlFor="gluten_free" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Gluten-Free</label>
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
                                            formik.setFieldValue("other_dietary_need", "");
                                        }}
                                    />
                                    <label htmlFor="vegan" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Vegan</label>
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
                                    <label htmlFor="other" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Other (Please Specify)</label>
                                </div>
                            </div>
                            {dietaryOption === "Other" && (
                                <input
                                    type="text"
                                    id="other_dietary_need"
                                    name="other_dietary_need"
                                    value={formik.values.other_dietary_need}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                                    required
                                    placeholder="Please specify dietary need"
                                />
                            )}
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="design_inspiration" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Design Inspiration (Upload Image):</label>
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
                            <label htmlFor="arrange_collection_ickenham" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Arrange Collection (Ickenham):</label>
                            <input
                                type="text"
                                id="arrange_collection_ickenham"
                                name="arrange_collection_ickenham"
                                value={formik.values.arrange_collection_ickenham}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="full_name" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Full Name:</label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                value={formik.values.full_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="email" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Email Address:</label>
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
                            <label htmlFor="phone_number" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Phone Number:</label>
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
                            <label htmlFor="additional_details" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Additional Details or Special Requests:</label>
                            <textarea
                                rows={4}
                                id="additional_details"
                                name="additional_details"
                                value={formik.values.additional_details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium h-60 resize-none"
                                placeholder="Enter any other details or special requests you have"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer w-full bg-[#0F4C81] text-white py-4 px-3 rounded-full font-semibold text-lg border-2 border-current hover:bg-transparent hover:text-[#0F4C81] hover:border-[#0F4C81] transition-all duration-300"
                        >
                            {loading ? "Sending..." : "Send Inquiry"}
                        </button>
                    </form>
                </div>
            </section>

        </main>
    )
}