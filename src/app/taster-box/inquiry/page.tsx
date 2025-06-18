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
                <div className="max-w-[55rem] mx-auto py-12 px-3">
                    <div className="border-b-[2px] border-[#D9D9D9] pb-8">
                        <h1 className="text-[#0F4C81] font-bold text-3xl">Inquiry Form</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 py-7">
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="event_type" className="font-medium text-[#333333] text-[18px]">Event Type:</label>
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
                            <label htmlFor="event_date" className="font-medium text-[#333333] text-[18px]">Event Date:</label>
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
                            <label htmlFor="event_venue" className="font-medium text-[#333333] text-[18px]">Event Venue:</label>
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
                            <label htmlFor="delivery_time" className="font-medium text-[#333333] text-[18px]">Delivery Time:</label>
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
                            <label htmlFor="no_of_taster_boxes" className="font-medium text-[#333333] text-[18px]">Number of Taster Boxes:</label>
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
                            <label htmlFor="flavlors_list" className="font-medium text-[#333333] text-[18px]">Flavours (List four flavours):</label>
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
                            <label htmlFor="company_name" className="font-medium text-[#333333] text-[18px]">Company Name:</label>
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
                            <label htmlFor="contact_name" className="font-medium text-[#333333] text-[18px]">Contact Name:</label>
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
                            className="w-full bg-[#0F4C81] text-white py-4 px-3 rounded-full font-semibold text-lg"
                        >
                            {loading ? "Sending..." : "Send Inquiry"}
                        </button>

                    </form>
                </div>
            </section>

            {/* <section>
                <form onSubmit={formik.handleSubmit} className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6">
                        <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">
                            Inquiry Form
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="event_type">
                                Event Type:
                            </label>
                            <input
                                id="event_type"
                                name="event_type"
                                type="text"
                                value={formik.values.event_type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. Birthday, Wedding, Corporate"
                            />
                            {formik.touched.event_type && formik.errors.event_type && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.event_type}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="event_date">
                                Event Date:
                            </label>
                            <input
                                id="event_date"
                                name="event_date"
                                type="date"
                                value={formik.values.event_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.event_date && formik.errors.event_date && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.event_date}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="event_venue">
                                Event Venue:
                            </label>
                            <input
                                id="event_venue"
                                name="event_venue"
                                type="text"
                                value={formik.values.event_venue}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Venue address or location"
                            />
                            {formik.touched.event_venue && formik.errors.event_venue && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.event_venue}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="delivery_time">
                                Delivery Time:
                            </label>
                            <input
                                id="delivery_time"
                                name="delivery_time"
                                type="text"
                                value={formik.values.delivery_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. 2:00 PM"
                            />
                            {formik.touched.delivery_time && formik.errors.delivery_time && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.delivery_time}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="no_of_taster_boxes">
                                Number of Taster Boxes:
                            </label>
                            <input
                                id="no_of_taster_boxes"
                                name="no_of_taster_boxes"
                                type="number"
                                min={1}
                                value={formik.values.no_of_taster_boxes}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. 5"
                            />
                            {formik.touched.no_of_taster_boxes && formik.errors.no_of_taster_boxes && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.no_of_taster_boxes}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="flavlors_list">
                                Flavours (List four flavours):
                            </label>
                            <input
                                id="flavlors_list"
                                name="flavlors_list"
                                type="text"
                                value={formik.values.flavlors_list}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. Chocolate, Vanilla, Red Velvet, Lemon"
                            />
                            {formik.touched.flavlors_list && formik.errors.flavlors_list && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.flavlors_list}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="dietary_needs">
                                Dietary Needs:
                            </label>
                            <input
                                id="dietary_needs"
                                name="dietary_needs"
                                type="text"
                                value={formik.values.dietary_needs}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="e.g. Gluten-Free, Vegan, None"
                            />
                            {formik.touched.dietary_needs && formik.errors.dietary_needs && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.dietary_needs}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="company_name">
                                Company Name:
                            </label>
                            <input
                                id="company_name"
                                name="company_name"
                                type="text"
                                value={formik.values.company_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.company_name && formik.errors.company_name && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.company_name}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="contact_name">
                                Contact Name:
                            </label>
                            <input
                                id="contact_name"
                                name="contact_name"
                                type="text"
                                value={formik.values.contact_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.contact_name && formik.errors.contact_name && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.contact_name}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="email">
                                Email Address:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="phone_number">
                                Phone Number:
                            </label>
                            <input
                                id="phone_number"
                                name="phone_number"
                                type="tel"
                                value={formik.values.phone_number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.phone_number && formik.errors.phone_number && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone_number}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="additional_details">
                                Additional Details or Special Requests:
                            </label>
                            <textarea
                                id="additional_details"
                                name="additional_details"
                                rows={4}
                                value={formik.values.additional_details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                            />
                            {formik.touched.additional_details && formik.errors.additional_details && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.additional_details}</div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0F4C81] text-white py-2 px-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Inquiry"}
                        </button>
                    </div>

                </form >
            </section > */}

        </main >
    );
}