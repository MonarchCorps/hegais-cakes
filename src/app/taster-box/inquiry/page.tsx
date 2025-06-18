"use client";

import { berkshireSwash } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { tasterboxInquirySchema } from "@/schema";
import toast from "react-hot-toast";
import { createTasteBoxInquiry } from "@/http";

export default function TasterBoxInquiry() {
    const [loading, setLoading] = useState(false);

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
                                    Every cake is as unique as the occasion it celebrates. Let&apos;s craft yours together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <form onSubmit={formik.handleSubmit} className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6">
                    <div className="py-4 px-2">
                        <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">
                            Inquiry Form
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* Event Type */}
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
                        {/* Event Date */}
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
                        {/* Event Venue */}
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
                        {/* Delivery Time */}
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
                        {/* Number of Taster Boxes */}
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
                        {/* Flavours */}
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
                        {/* Dietary Needs */}
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
                        {/* Company Name */}
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
                        {/* Contact Name */}
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
                        {/* Email Address */}
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
                        {/* Phone Number */}
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
                        {/* Additional Details or Special Requests */}
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

                </form>
            </section>

        </main>
    );
}