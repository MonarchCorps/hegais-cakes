"use client";

import { berkshireSwash } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { tasterboxInquirySchema } from "@/schema";
import toast from "react-hot-toast";
import { createTasteBoxInquiry } from "@/http";
import { motion } from "framer-motion";

export default function TasterBoxInquiry() {
    const [loading, setLoading] = useState(false);
    const [dietaryOption, setDietaryOption] = useState("");

    const formik = useFormik({
        initialValues: {
            event_type: "",
            event_date: "",
            event_venue: "",
            delivery_time: "",
            no_of_taster_boxes: 1,
            flavlors_list: "",
            dietary_needs: "",
            company_name: "",
            contact_name: "",
            email: "",
            phone_number: "",
            additional_details: "",
        },
        validationSchema: tasterboxInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createTasteBoxInquiry(values);
                toast.success("Yay! Your inquiry has been received 🍰");
                resetForm();
            } catch (err) {
                console.error(err);
                toast.error("Oops! Something went wrong 💔");
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
                                src={"/images/tasterbox-inquiry.webp"}
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
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white`}>
                                    Taster Box Inquiry
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto">
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
                            <label htmlFor="event_venue" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Event Venue:</label>
                            <input
                                type="text"
                                id="event_venue"
                                name="event_venue"
                                value={formik.values.event_venue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="delivery_time" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Delivery Time:</label>
                            <input
                                type="text"
                                id="delivery_time"
                                name="delivery_time"
                                value={formik.values.delivery_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="no_of_taster_boxes" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Number of Taster Boxes:</label>
                            <input
                                type="number"
                                id="no_of_taster_boxes"
                                name="no_of_taster_boxes"
                                value={formik.values.no_of_taster_boxes}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="flavlors_list" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Flavours (List four flavours):</label>
                            <input
                                type="text"
                                id="flavlors_list"
                                name="flavlors_list"
                                value={formik.values.flavlors_list}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="dietary_needs" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Dietary Needs:</label>
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
                            <label htmlFor="company_name" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Company Name:</label>
                            <input
                                type="text"
                                id="company_name"
                                name="company_name"
                                value={formik.values.company_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="contact_name" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Contact Name:</label>
                            <input
                                type="text"
                                id="contact_name"
                                name="contact_name"
                                value={formik.values.contact_name}
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

        </main >
    );
}