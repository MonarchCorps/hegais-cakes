"use client";

import { berkshireSwash } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { workshopInquirySchema } from "@/schema";
import toast from "react-hot-toast";
import { createWorkShopBooking } from "@/http";

export default function BookWorkshopInquiryPage() {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone_number: "",
            number_of_participants: 1,
            preferred_date: "",
            type_and_flavour: "",
            desired_outcome: "",
            additional_details: "",
        },
        validationSchema: workshopInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createWorkShopBooking(values);
                toast.success("Yay! Your workshop inquiry was sent 🎂");
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
                                    Book A Workshop
                                </h1>
                                <p className="text-white text-center text-lg max-w-[44rem] mx-auto">
                                    Let&apos;s make memories! Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <form className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6 mt-8" onSubmit={formik.handleSubmit}>
                    <div className="py-2 px-2">
                        <p className="text-[#0F4C81] text-xl font-semibold mb-5">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* Full Name/Company Name */}
                        <div>
                            <label htmlFor="full_name" className="block text-[#0F4C81] font-medium mb-1">
                                Full Name/Company Name:
                            </label>
                            <input
                                id="full_name"
                                name="full_name"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.full_name}
                                disabled={loading}
                            />
                            {formik.touched.full_name && formik.errors.full_name && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.full_name}</div>
                            )}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                disabled={loading}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>
                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone_number" className="block text-[#0F4C81] font-medium mb-1">
                                Phone Number:
                            </label>
                            <input
                                id="phone_number"
                                name="phone_number"
                                type="tel"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone_number}
                                disabled={loading}
                            />
                            {formik.touched.phone_number && formik.errors.phone_number && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone_number}</div>
                            )}
                        </div>
                        {/* Number of Participants */}
                        <div>
                            <label htmlFor="number_of_participants" className="block text-[#0F4C81] font-medium mb-1">
                                How many participants? (Exact number):
                            </label>
                            <input
                                id="number_of_participants"
                                name="number_of_participants"
                                type="number"
                                min="1"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number_of_participants}
                                disabled={loading}
                            />
                            {formik.touched.number_of_participants && formik.errors.number_of_participants && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.number_of_participants}</div>
                            )}
                        </div>
                        {/* Preferred Date */}
                        <div>
                            <label htmlFor="preferred_date" className="block text-[#0F4C81] font-medium mb-1">
                                Preferred Date:
                            </label>
                            <input
                                id="preferred_date"
                                name="preferred_date"
                                type="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.preferred_date}
                                disabled={loading}
                            />
                            {formik.touched.preferred_date && formik.errors.preferred_date && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.preferred_date}</div>
                            )}
                        </div>
                        {/* Cake Type/Flavour */}
                        <div>
                            <label htmlFor="type_and_flavour" className="block text-[#0F4C81] font-medium mb-1">
                                What type of cake would you like to bake? (Type/Flavour):
                            </label>
                            <input
                                id="type_and_flavour"
                                name="type_and_flavour"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.type_and_flavour}
                                disabled={loading}
                            />
                            {formik.touched.type_and_flavour && formik.errors.type_and_flavour && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.type_and_flavour}</div>
                            )}
                        </div>
                        {/* Desired Outcome */}
                        <div>
                            <label htmlFor="desired_outcome" className="block text-[#0F4C81] font-medium mb-1">
                                Desired Outcome:
                            </label>
                            <textarea
                                id="desired_outcome"
                                name="desired_outcome"
                                rows={3}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] resize-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.desired_outcome}
                                disabled={loading}
                            />
                            {formik.touched.desired_outcome && formik.errors.desired_outcome && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.desired_outcome}</div>
                            )}
                        </div>
                        {/* Additional Details or Questions */}
                        <div>
                            <label htmlFor="additional_details" className="block text-[#0F4C81] font-medium mb-1">
                                Additional Details or Questions:
                            </label>
                            <textarea
                                id="additional_details"
                                name="additional_details"
                                rows={3}
                                placeholder="Enter any other details or questions you have"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] resize-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.additional_details}
                                disabled={loading}
                            />
                            {formik.touched.additional_details && formik.errors.additional_details && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.additional_details}</div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#0F4C81] text-white py-2 px-4 rounded-3xl mt-8 font-semibold hover:bg-[#09375a] transition-colors"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Inquiry"}
                    </button>
                </form>
            </section>
        </main>
    );
}