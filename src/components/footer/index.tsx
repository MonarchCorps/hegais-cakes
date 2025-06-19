import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#A7C7E7] pt-14 pb-8 px-3">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-10 gap-y-8 max-w-[95%] mx-auto max-[487px]:px-4">

                    <div>
                        <div className="relative size-24">
                            <Link href="/">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Hegai Cakes Logo"
                                    fill
                                    className="size-full object-cover"
                                />
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <a href="https://www.instagram.com/hegaicakes?igsh=MWZ4M3BsMXM0cnd5Yw==" className="bg-[#0F4C81] text-white py-2 px-2 rounded-full">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.tiktok.com/@hegaicakes?_t=ZM-8xJGiEmPCYX&_r=1" className="bg-[#0F4C81] text-white py-2 px-2 rounded-full">
                                <BsTiktok size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <h1 className="text-[#0F4C81] font-bold text-xl mb-2.5">Contact Us</h1>
                            <div className="flex items-center gap-x-2 text-[#0F4C81]">
                                <Phone size={16} />
                                <a href="tel:+447721497297">+44 7721 497297</a>
                            </div>
                            <div className="flex items-center gap-x-2 text-[#0F4C81]">
                                <Mail size={16} />
                                <a href="mailto:occasions@hegaicakes.com">occasions@hegaicakes.com</a>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-[#0F4C81] font-bold text-xl mb-2.5">Location</h1>
                            <div className="flex items-center gap-x-2 text-[#0F4C81]">
                                <MapPin size={16} />
                                <p>Ickenham, West London, UK</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-[#0F4C81] font-bold text-xl mb-2.5">Quick Links</h1>
                        <ul className="space-y-2">
                            <li>
                                <a target="_blank" href="https://calendly.com/occasions-hegaicakes/30min" className="text-[#0F4C81]">Book a Consultation</a>
                            </li>
                            <li>
                                <Link href="/shop" className="text-[#0F4C81]">Shop</Link>
                            </li>
                            <li>
                                <Link href="/taster-box/inquiry" className="text-[#0F4C81]">Taster Box Inquiry</Link>
                            </li>
                            <li>
                                <Link href="/shopping-policy" className="text-[#0F4C81]">Shipping & Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-[#0F4C81]">Privacy Policy</Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h1 className="text-[#0F4C81] font-bold text-xl mb-2.5">We accept</h1>
                        <div className="flex items-center gap-x-3">
                            <img
                                src="/images/paypal.png"
                                alt="Paypal"
                                width={50}
                                height={50}
                            />
                            <img
                                src="/images/visa.png"
                                alt="Visa"
                                width={50}
                                height={50}
                            />
                            <img
                                src="/images/mastercard.png"
                                alt="Mastercard"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-[#0F4C81]">
                    <div className="max-w-[95%] mx-auto">
                        <p className="text-[#0F4C81] text-center">
                            Copyright © 2025 Hegai Cakes. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}