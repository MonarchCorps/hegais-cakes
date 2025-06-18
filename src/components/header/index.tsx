import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="py-4 text-center w-full bg-[#0F4C81] text-white font-medium">Order Your Taster Boxes! ♡</div>
            <div className="flex items-center justify-between max-w-[95%] mx-auto">

                {/* logo */}
                <div className="relative size-24">
                    <Image
                        src="/images/logo.webp"
                        alt="Hegai Cakes Logo"
                        fill
                        className="size-full object-cover"
                    />
                </div>

                {/* nav */}
                <nav>
                    <ul className="flex items-center gap-x-10">
                        <li className="relative w-fit">
                            <Link href="/" className="text-[#0F4C81]">Home</Link>
                            <div className="absolute w-full h-[1px] bg-[#0F4C81]"></div>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Taster Boxes</Link>
                        </li>
                        <li>
                            <Link href="/">Cakes</Link>
                        </li>
                        <li>
                            <Link href="/">Workshops</Link>
                        </li>
                        <li>
                            <Link href="/">Shop</Link>
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