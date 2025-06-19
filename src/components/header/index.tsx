"use client";

import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { startTransition, useState, useEffect } from "react";

const mobileNavLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Our Story",
        href: "/our-story"
    },
    {
        label: "Taster Boxes",
        href: "/taster-box"
    },
    {
        label: "Wedding Cakes",
        href: "/wedding-cakes",
        isDropdown: true
    },
    {
        label: "Celebration Cakes",
        href: "/celebration-cakes"
    },
    {
        label: "Workshops",
        href: "/workshop"
    },
    {
        label: "Shop",
        href: "/shop"
    }
]

export default function Header() {
    const [mobileLinks, setMobileLinks] = useState(mobileNavLinks);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [showCakesDropdown, setShowCakesDropdown] = useState(false);
    const pathname = usePathname();
    const [searchFilter, setSearchFilter] = useState("");

    // Close mobile nav on route change
    useEffect(() => {
        setIsMobileNavOpen(false);
    }, [pathname]);

    const handleFilterSearchNav = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchFilter(value);
        startTransition(() => {
            const filteredLinks = mobileNavLinks.filter((link) =>
                link.label.toLowerCase().includes(value.toLowerCase())
            );
            setMobileLinks(filteredLinks);
        });
    };

    useEffect(() => {
        setShowCakesDropdown(false);
    }, [pathname]);

    return (
        <header className="relative max-[943px]:bg-[#A7C7E7]">
            <div className="py-4 text-center w-full bg-[#0F4C81] text-white font-medium">Order Your Taster Boxes! ♡</div>
            <div className="flex items-center justify-between max-w-[95%] mx-auto">

                {/* mobile nav */}
                <div className="hidden max-[943px]:block flex-shrink-0">
                    <Link href="/cart" className="block text-white bg-[#0F4C81] py-2 px-2 rounded-full">
                        <ShoppingCart size={20} />
                    </Link>

                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 z-[1000] transition-all duration-300 ${isMobileNavOpen ? 'bg-black/95 pointer-events-auto' : 'bg-black/0 pointer-events-none'}`}
                        onClick={() => setIsMobileNavOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Sliding Nav */}
                    <div
                        className={`fixed left-0 right-0 bottom-0 z-[1010] transition-transform duration-400 ease-in-out ${isMobileNavOpen ? 'translate-y-0' : 'translate-y-full'} w-full h-[93%] bg-white rounded-t-4xl px-4 py-6 shadow-2xl`}
                        style={{ willChange: 'transform' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <div className="relative size-24 max-[510px]:size-20">
                                <Link href="/">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="Hegai Cakes Logo"
                                        fill className="size-full object-cover"
                                    />
                                </Link>
                            </div>
                            <button
                                type="button"
                                className="cursor-pointer"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                <RxCross2 size={30} />
                            </button>
                        </div>
                        <div className="mt-5 relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border border-[#E04F85] py-3 px-4 pl-14 rounded-full text-[#E04F85] placeholder:text-[#E04F85] focus:outline-[2px] focus:outline-[#E04F85]"
                                onChange={handleFilterSearchNav}
                                value={searchFilter}
                            />
                            <GoSearch size={24} color="#E04F85" className="absolute left-4 top-1/2 -translate-y-1/2" />
                        </div>
                        <nav className="mt-10">
                            <ul className="flex flex-col gap-y-6.5 items-center font-medium text-2xl">
                                {mobileLinks.length > 0 ? (
                                    mobileLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))
                                ) : (
                                    <li className="font-medium text-base mt-2 opacity-70">No Links Found for your query</li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* logo */}
                <div className="relative size-24 max-[510px]:size-20">
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
                <nav className="max-[943px]:hidden">
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
                        <li className="relative w-fit group">
                            <button
                                type="button"
                                className="cursor-pointer text-[#0F4C81] focus:outline-none"
                                onClick={() => setShowCakesDropdown((prev) => !prev)}
                                onBlur={() => setTimeout(() => setShowCakesDropdown(false), 100)}
                                aria-haspopup="true"
                                aria-expanded={showCakesDropdown ? "true" : "false"}
                            >
                                Cakes
                            </button>
                            <ul
                                className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-[400] transition-all duration-300 ease-out
                                    ${showCakesDropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                            >
                                <li>
                                    <Link
                                        href="/celebration-cakes"
                                        className="block px-4 py-2 text-[#0F4C81] hover:bg-gray-100"
                                    >
                                        Celebration Cakes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/wedding-cakes"
                                        className="block px-4 py-2 text-[#0F4C81] hover:bg-gray-100"
                                    >
                                        Wedding Cakes
                                    </Link>
                                </li>
                            </ul>
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
                <div className="flex items-center gap-x-4 max-[943px]:hidden">
                    <Link href="/" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <Heart size={20} />
                    </Link>
                    <Link href="/cart" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <ShoppingCart size={20} />
                    </Link>
                    <Link href="/" className="text-[#0F4C81] bg-[#A7C7E7] py-2 px-2 rounded-full">
                        <Search size={20} />
                    </Link>
                </div>

                {/* mobile nav button */}
                <div className="hidden max-[943px]:block flex-shrink-0">
                    <button
                        type="button"
                        className="cursor-pointer text-[#0F4C81]"
                        onClick={() => setIsMobileNavOpen(true)}
                    >
                        <RiMenu4Line size={30} />
                    </button>
                </div>

            </div>
        </header>
    );
}