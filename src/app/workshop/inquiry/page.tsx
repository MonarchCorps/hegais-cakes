"use client";

import { berkshireSwash } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { workshopInquirySchema } from "@/schema";
import toast from "react-hot-toast";
import { createWorkShopBooking } from "@/http";
import { motion } from "framer-motion";

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
                    <div className="relative h-[40rem]">
                        <div className="absolute inset-0 size-full bg-black/50"></div>
                        <div className="relative size-full">
                            <Image
                                src={"/images/workshop-inquiry.jpg"}
                                alt="Workshop Inquiry"
                                fill
                                className="absolute inset-0 size-full object-cover -z-10 object-[50%_5%]"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className={`${berkshireSwash.className} text-center text-7xl leading-tight capitalize text-white mb-3 max-[510px]:text-5xl`}>
                                    Book A Workshop
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="text-white text-center text-lg max-w-[44rem] mx-auto mb-5 max-[510px]:text-base">
                                    Let&apos;s make memories! Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[55rem] mx-auto py-12 px-5">
                    <div className="border-b-[2px] border-[#D9D9D9] pb-8">
                        <h1 className="text-[#0F4C81] font-bold text-3xl">Contact Us</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 py-7">
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="full_name" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Full Name/Company Name:</label>
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
                            <label htmlFor="number_of_participants" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">How many participants? (Exact number):</label>
                            <input
                                type="number"
                                id="number_of_participants"
                                name="number_of_participants"
                                value={formik.values.number_of_participants}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="preferred_date" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Preferred Date:</label>
                            <input
                                type="date"
                                id="preferred_date"
                                name="preferred_date"
                                value={formik.values.preferred_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="type_and_flavour" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">What type of cake would you like to bake? (Type/Flavour):</label>
                            <input
                                type="text"
                                id="type_and_flavour"
                                name="type_and_flavour"
                                value={formik.values.type_and_flavour}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="desired_outcome" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Desired Outcome:</label>
                            <textarea
                                id="desired_outcome"
                                name="desired_outcome"
                                value={formik.values.desired_outcome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border border-[#D9D9D9] py-2.5 px-3 rounded-md font-medium h-60 resize-none"
                                placeholder="Enter any other details or special requests you have"
                            />
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label htmlFor="additional_details" className="font-medium text-[#333333] text-[18px] max-[510px]:text-base">Additional Details or Questions:</label>
                            <textarea
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
                            className="cursor-pointer w-full bg-[#0F4C81] text-white py-4 px-3 rounded-full font-semibold text-lg border-2 border-current hover:bg-transparent hover:text-[#0F4C81] hover:border-[#0F4C81] transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Inquiry"}
                        </button>
                    </form>
                </div>
            </section>

        </main>
    );
}