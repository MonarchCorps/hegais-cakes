"use client";

import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header>
            <div className="py-4 text-center w-full bg-[#0F4C81] text-white font-medium">Order Your Taster Boxes! ♡</div>
            <div className="flex items-center justify-between max-w-[95%] mx-auto">

                {/* logo */}
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

                {/* nav */}
                <nav>
                    <ul className="flex items-center gap-x-10">
                        <li className="relative w-fit">
                            <Link href="/" className="text-[#0F4C81]">Home</Link>
                            {pathname === "/" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                        <li className="relative w-fit">
                            <Link href="/our-story" className="text-[#0F4C81]">Our Story</Link>
                            {pathname === "/our-story" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                        <li className="relative w-fit">
                            <Link href="/taster-box" className="text-[#0F4C81]">Taster Boxes</Link>
                            {pathname === "/taster-box" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                        <li className="relative w-fit">
                            <Link href="/wedding-cakes" className="text-[#0F4C81]">Cakes</Link>
                            {pathname === "/wedding-cakes" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                        <li className="relative w-fit">
                            <Link href="/workshop" className="text-[#0F4C81]">Workshops</Link>
                            {pathname === "/workshop" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                        <li className="relative w-fit">
                            <Link href="/shop" className="text-[#0F4C81]">Shop</Link>
                            {pathname === "/shop" && <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>}
                        </li>
                    </ul>
                </nav>

                {/* actions */}
                <div className="flex items-center gap-x-4">
                    <Link href="/" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <Heart size={20} />
                    </Link>
                    <Link href="/" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <ShoppingCart size={20} />
                    </Link>
                    <Link href="/" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <Search size={20} />
                    </Link>
                </div>

            </div>
        </header>
    );
}