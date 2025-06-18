import { useEffect, useState, useRef } from "react";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { getProducts } from '@/http';               // to fetch product images if needed
import type { Product } from "../shop/page";

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
    const shipping = 200; // flat
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
                <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Cart</h1>
                <p className="text-center text-gray-500">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
            <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                cart.map((item, idx) => {
                    const imgSrc =
                        (products[item.productId]?.image1 as string) || "";

                    return (
                        <div
                            key={idx}
                            className="bg-white border rounded-lg p-6 mb-6 shadow-sm"
                        >
                            <div className="flex gap-6">
                                {/* Image */}
                                <div className="w-48 h-36 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={imgSrc}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-1">
                                                Flavours: {item.selectedFlavors.join(", ")}
                                            </p>
                                            <p className="text-2xl font-bold text-[#0F4C81]">
                                                £{parseFloat(item.price).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-gray-800">
                                                £{(parseFloat(item.price) * item.quantity).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-pink-500 mt-1">
                                                Shipping & Taxes calculated at checkout
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quantity & Remove */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(idx, item.quantity - 1)
                                                }
                                                className="w-8 h-8 flex items-center justify-center bg-[#0F4C81] text-white rounded-full hover:bg-blue-700"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="px-6 py-2 font-medium text-lg">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(idx, item.quantity + 1)
                                                }
                                                className="w-8 h-8 flex items-center justify-center bg-[#0F4C81] text-white rounded-full hover:bg-blue-700"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(idx)}
                                            className="flex items-center text-gray-600 hover:text-red-600 text-sm border border-gray-300 px-4 py-2 rounded-md"
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Remove Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}

            {/* Coupon */}
            <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3">
                    Enter Coupon Code
                </label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                        placeholder="Coupon code"
                    />
                    <button className="px-8 py-3 bg-[#0F4C81] text-white rounded-md hover:bg-blue-700 font-medium">
                        Apply Coupon
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex max-[600px]:flex-col justify-between items-start gap-x-3 gap-y-3">
                <button
                    onClick={() => setCurrentStep(0)}
                    className="flex items-center text-gray-600 hover:text-[#0F4C81] font-medium"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Continue Shopping
                </button>

                {/* Order Summary */}
                <div className="w-80 max-[600px]:w-full">
                    <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-lg">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold">£{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-lg">
                            <span className="text-gray-600">Shipping</span>
                            <div className="text-right">
                                <div className="font-bold">Flat Rate: £{shipping.toFixed(2)}</div>
                                <div className="text-sm text-gray-500 mt-1 max-w-48">
                                    Shipping options will be updated during checkout
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-300 my-4" />

                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>£{total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setCurrentStep(2);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full bg-[#0F4C81] text-white py-4 rounded-md font-medium hover:bg-blue-700 mb-4 text-lg"
                    >
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
