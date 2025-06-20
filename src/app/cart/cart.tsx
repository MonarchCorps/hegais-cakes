import { useEffect, useState, useRef } from "react";
import { getProducts } from '@/http';               // to fetch product images if needed
import type { Product } from "../shop/page";
import { GoTrash } from "react-icons/go";
import { ArrowLeft } from "lucide-react";

type CartItem = {
    productId: string;
    name: string;
    price: string;            // stored as string
    quantity: number;
    selectedFlavors: string[];
    timestamp: string;
};

export const CartPage = ({
    setCurrentStep,
}: {
    setCurrentStep: (step: number) => void;
}) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<Record<string, Product>>({});
    const isInitialMount = useRef(true);

    // 1) Load cart once on mount
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
        setCart(stored);

        // Also fetch products map for images
        (async () => {
            try {
                const fetched = await getProducts();
                const map: Record<string, Product> = {};
                fetched.forEach((p: Product) => {
                    map[p.id] = p as Product;
                });
                setProducts(map);
            } catch (err) {
                console.error("Failed to load products for cart images", err);
            }
        })();
    }, []);

    // 2) Sync cart -> localStorage on every change *after* initial load
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Handlers
    const updateQuantity = (idx: number, newQty: number) => {
        if (newQty < 1) return;
        setCart((c) =>
            c.map((item, i) =>
                i === idx ? { ...item, quantity: newQty } : item
            )
        );
    };

    const removeItem = (idx: number) => {
        setCart((c) => c.filter((_, i) => i !== idx));
    };

    // Order summary
    const subtotal = cart.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
        0
    );
    const shipping = 7;
    const total = subtotal + shipping;

    return (
        <div className="mt-14">
            <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    {
                        cart.map((item, idx) => {
                            const imgSrc =
                                (products[item.productId]?.image1 as string) || "";

                            return (
                                <div key={idx} className="border-y border-[#D9D9D9] py-4 grid grid-cols-[15rem_1fr_auto] gap-x-5 gap-y-5 max-[880px]:grid-cols-[15rem_1fr] max-[572px]:grid-cols-1">
                                    <div className="min-w-full min-h-full">
                                        {imgSrc && imgSrc !== "" && (
                                            <img
                                                src={imgSrc}
                                                alt="Product Image"
                                                className="size-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <h1 className="text-2xl">{item.name}</h1>
                                        <h2 className="text-2xl font-bold text-[#0F4C81]">£ {Number.parseInt(item.price).toLocaleString()}</h2>
                                        <div className="flex items-center gap-x-8 mt-10">
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(idx, item.quantity - 1)}
                                                className="cursor-pointer size-8 rounded-full bg-[#0F4C81] text-white flex items-center justify-center"
                                            >
                                                -
                                            </button>
                                            <span className="text-2xl">{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(idx, item.quantity + 1)}
                                                className="cursor-pointer size-8 rounded-full bg-[#0F4C81] text-white flex items-center justify-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-end text-end max-[880px]:col-span-full">
                                        <div className="mb-5">
                                            <h2 className="text-2xl font-bold text-[#0F4C81]">£ {(Number.parseInt(item.price) * item.quantity).toLocaleString()}</h2>
                                            <p className="text-[#E04F85]">Shipping & Taxes calculated at checkout</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeItem(idx)}
                                            className="cursor-pointer flex items-center gap-x-2 text-lg font-medium"
                                        >
                                            <GoTrash className="text-2xl" />
                                            <span className="border-b border-[#333333]">Remove Order</span>
                                        </button>
                                    </div>

                                </div>
                            );
                        })
                    }
                    <div className="border-b border-[#D9D9D9] py-4 pb-7 flex items-end gap-x-4 gap-y-3 max-[670px]:flex-col max-[670px]:items-start">
                        <div className="flex flex-col gap-y-3 flex-1 max-[670px]:w-full">
                            <label
                                htmlFor="coupon-code"
                                className="font-medium text-[#333333] text-[18px] max-[510px]:text-base"
                            >Enter Coupon Code</label>
                            <input
                                type="text"
                                // id="coupon-code"
                                className="w-full px-3 py-3 border border-[#D9D9D9] rounded-md text-xl font-normal max-[670px]:w-full"
                            />
                        </div>
                        <button type="button"
                            className="bg-[#0F4C85] text-white px-8 py-3 rounded-full text-xl font-normal max-[670px]:w-full">
                            Apply Coupon
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 items-start mt-10 max-[875]:grid-cols-1">
                        <h1 className="flex items-center gap-x-2.5 text-xl font-medium max-[875]:hidden">
                            <ArrowLeft size={20} />
                            Continue Shopping
                        </h1>
                        <div className="max-w-[40rem]">
                            <h1 className="text-[#0F4C81] font-bold text-2xl">Order Summary</h1>
                            <div className="mt-6 pb-5 border-b border-[#D9D9D9] flex items-center justify-between">
                                <h1 className="text-xl font-medium">Subtotal</h1>
                                <h1 className="text-xl font-bold">£ {subtotal.toLocaleString()}</h1>
                            </div>
                            <div className="mt-6 pb-5 border-b border-[#D9D9D9] flex items-center justify-between">
                                <h1 className="text-xl font-medium">Shipping</h1>
                                <div className="text-end">
                                    <h1 className="text-xl font-medium">Flat Rate: <span className="text-xl font-bold">£ {shipping.toLocaleString()}</span></h1>
                                    <p className="text-sm text-gray-500">Shipping options will be updated during checkout</p>
                                </div>
                            </div>
                            <div className="mt-6 pb-5">
                                <div className=" flex items-center justify-between mb-6">
                                    <h1 className="text-xl font-medium">Total</h1>
                                    <h1 className="text-xl font-bold">£ {total.toLocaleString()}</h1>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="cursor-pointer w-full bg-[#0F4C81] text-white px-8 py-3 rounded-full text-xl font-normal transition-all duration-300 border border-transparent hover:border-[#0F4C81] hover:bg-transparent hover:text-[#0F4C81]">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
