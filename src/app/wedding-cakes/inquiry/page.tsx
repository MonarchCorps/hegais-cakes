"use client";

import { berkshireSwash } from "@/lib/fonts";
import { createWeddingCakeInquiry } from "@/http";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useFormik } from "formik";
import { weddingCakeInquirySchema } from "@/schema";

export default function WeddingCakesInquiry() {
    const [loading, setLoading] = useState(false);

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
                                    Every wedding deserves a showstopping cake. Let's design yours together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <form className="max-w-[50rem] mx-auto bg-white rounded-lg shadow-none p-6" onSubmit={formik.handleSubmit}>
                    <div className="py-4 px-2">
                        <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">
                            Inquiry Form
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* Wedding Date */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="wedding_date">
                                Wedding Date:
                            </label>
                            <input
                                id="wedding_date"
                                name="wedding_date"
                                type="date"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Wedding Date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.wedding_date}
                                disabled={loading}
                            />
                            {formik.touched.wedding_date && formik.errors.wedding_date && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.wedding_date}</div>
                            )}
                        </div>
                        {/* Wedding Venue */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="wedding_venue">
                                Wedding Venue:
                            </label>
                            <input
                                id="wedding_venue"
                                name="wedding_venue"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Wedding Venue"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.wedding_venue}
                                disabled={loading}
                            />
                            {formik.touched.wedding_venue && formik.errors.wedding_venue && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.wedding_venue}</div>
                            )}
                        </div>
                        {/* Number of Tiers */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="number_of_tiers">
                                Number of Tiers:
                            </label>
                            <input
                                id="number_of_tiers"
                                name="number_of_tiers"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Number of Tiers"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number_of_tiers}
                                disabled={loading}
                            />
                            {formik.touched.number_of_tiers && formik.errors.number_of_tiers && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.number_of_tiers}</div>
                            )}
                        </div>
                        {/* Number of Guests */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="number_of_guests">
                                Number of Guests (please specify if you would like your cake to serve all your guests):
                            </label>
                            <input
                                id="number_of_guests"
                                name="number_of_guests"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Number of Guests"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number_of_guests}
                                disabled={loading}
                            />
                            {formik.touched.number_of_guests && formik.errors.number_of_guests && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.number_of_guests}</div>
                            )}
                        </div>
                        {/* Cake Flavours */}
                        <div>
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="cake_flavours">
                                Cake Flavours:
                            </label>
                            <input
                                id="cake_flavours"
                                name="cake_flavours"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Cake Flavours"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cake_flavours}
                                disabled={loading}
                            />
                            {formik.touched.cake_flavours && formik.errors.cake_flavours && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.cake_flavours}</div>
                            )}
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
                                        name="dietary_needs"
                                        value="Gluten-Free"
                                        className="accent-[#0F4C81] mr-2"
                                        checked={formik.values.dietary_needs?.includes("Gluten-Free")}
                                        onChange={e => {
                                            const { checked, value } = e.target;
                                            let arr = formik.values.dietary_needs ? formik.values.dietary_needs.split(",") : [];
                                            if (checked) {
                                                arr.push(value);
                                            } else {
                                                arr = arr.filter(v => v !== value);
                                            }
                                            formik.setFieldValue("dietary_needs", arr.join(","));
                                        }}
                                        disabled={loading}
                                    />
                                    Gluten-Free
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dietary_needs"
                                        value="Vegan"
                                        className="accent-[#0F4C81] mr-2"
                                        checked={formik.values.dietary_needs?.includes("Vegan")}
                                        onChange={e => {
                                            const { checked, value } = e.target;
                                            let arr = formik.values.dietary_needs ? formik.values.dietary_needs.split(",") : [];
                                            if (checked) {
                                                arr.push(value);
                                            } else {
                                                arr = arr.filter(v => v !== value);
                                            }
                                            formik.setFieldValue("dietary_needs", arr.join(","));
                                        }}
                                        disabled={loading}
                                    />
                                    Vegan
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="dietary_needs"
                                        value="Other"
                                        className="accent-[#0F4C81] mr-2"
                                        checked={formik.values.dietary_needs?.includes("Other")}
                                        onChange={e => {
                                            const { checked, value } = e.target;
                                            let arr = formik.values.dietary_needs ? formik.values.dietary_needs.split(",") : [];
                                            if (checked) {
                                                arr.push(value);
                                            } else {
                                                arr = arr.filter(v => v !== value);
                                            }
                                            formik.setFieldValue("dietary_needs", arr.join(","));
                                        }}
                                        disabled={loading}
                                    />
                                    Other (Specify)
                                </label>
                            </div>
                            {formik.touched.dietary_needs && formik.errors.dietary_needs && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.dietary_needs}</div>
                            )}
                            <div className="mt-2">
                                <input
                                    id="other_dietary_need"
                                    name="other_dietary_need"
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                    placeholder="If Other, please specify"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.other_dietary_need}
                                    disabled={!formik.values.dietary_needs?.includes("Other") || loading}
                                />
                                {formik.touched.other_dietary_need && formik.errors.other_dietary_need && (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.other_dietary_need}</div>
                                )}
                            </div>
                        </div>
                        {/* Design Inspiration (Upload any reference photos) */}
                        <div className="mt-5">
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="design_inspiration">
                                Design Inspiration (Upload any reference photos)
                            </label>
                            <input
                                id="design_inspiration"
                                name="design_inspiration"
                                type="file"
                                className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-[#F3F4F6] file:text-[#0F4C81]
                                    hover:file:bg-[#e0e7ef]"
                                onChange={event => {
                                    formik.setFieldValue("design_inspiration", event.currentTarget.files?.[0] || null);
                                }}
                                disabled={loading}
                            />
                            {formik.touched.design_inspiration && formik.errors.design_inspiration && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.design_inspiration}</div>
                            )}
                        </div>
                        {/* Couple's Names */}
                        <div className="mt-5">
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="couple_name">
                                Couple's Names:
                            </label>
                            <input
                                id="couple_name"
                                name="couple_name"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.couple_name}
                                disabled={loading}
                            />
                            {formik.touched.couple_name && formik.errors.couple_name && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.couple_name}</div>
                            )}
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
                        <div className="mt-5">
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="phone_number">
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
                        {/* Additional Details or Special Requests */}
                        <div className="mt-5">
                            <label className="block text-[#0F4C81] font-medium mb-1" htmlFor="additional_details">
                                Additional Details or Special Requests:
                            </label>
                            <textarea
                                id="additional_details"
                                name="additional_details"
                                rows={4}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                                placeholder="Enter any other details or special requests you have"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.additional_details}
                                disabled={loading}
                            />
                            {formik.touched.additional_details && formik.errors.additional_details && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.additional_details}</div>
                            )}
                        </div>
                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                className="w-full bg-[#0F4C81] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#0d3a60] transition-colors"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Inquiry"}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}