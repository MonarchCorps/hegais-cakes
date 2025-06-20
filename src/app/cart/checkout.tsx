// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import toast from "react-hot-toast";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { createOrder } from "@/http";
import type { OrderType } from "@/schema";

type CartItem = {
    productId: string;
    name: string;
    price: string;
    quantity: number;
    selectedFlavors: string[];
    timestamp: string;
};

export function CheckoutPage({
    setCurrentStep,
}: {
    setCurrentStep: (step: number) => void;
}) {
    // ---- form state ----
    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        country: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        postcode: "",
        shipToDifferent: false,
        orderNotes: "",
    });

    // ---- cart state ----
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Load cart data on mount
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
        setCart(stored);
    }, []);

    // // ---- validation state ----
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!form.email) errs.email = "Email is required";
        if (!form.firstName) errs.firstName = "First name is required";
        if (!form.lastName) errs.lastName = "Last name is required";
        if (!form.country) errs.country = "Country is required";
        if (!form.address1) errs.address1 = "Street address is required";
        if (!form.city) errs.city = "Town/City is required";
        if (!form.postcode) errs.postcode = "Postcode is required";
        return errs;
    };

    const handlePlaceOrder = async () => {
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (cart.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        setIsLoading(true);

        try {
            // Calculate totals
            const subtotal = cart.reduce(
                (sum, item) => sum + parseFloat(item.price) * item.quantity,
                0
            );
            const shipping = 7;
            const total = subtotal + shipping;

            // Transform cart data to match OrderType schema
            const orderData: OrderType = {
                items: cart.map(item => ({
                    product: item.productId,
                    quantity: item.quantity,
                    price: parseFloat(item.price),
                    flavours: item.selectedFlavors.join(", ") || null,
                    gift_note: null
                })),
                total: total,
                payment_method: "stripe",
                billing: {
                    email: form.email,
                    firstname: form.firstName,
                    lastname: form.lastName,
                    company_name: form.company || null,
                    street_address: form.address1,
                    town: form.city,
                    country: form.country,
                    postal_code: form.postcode,
                    order_notes: form.orderNotes || null
                }
            };

            // Create order
            const result = await createOrder(orderData);

            if (result.success && result.paymentUrl) {
                // Clear cart after successful order creation
                localStorage.setItem("cart", "[]");
                
                // Redirect to payment URL
                window.location.href = result.paymentUrl;
            } else {
                toast.error("Failed to create order. Please try again.");
            }

        } catch (error) {
            console.error("Error creating order:", error);
            toast.error("Failed to create order. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-14">
            <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">Checkout</h1>
            <div className="border-b border-[#D9D9D9] py-4 pb-7 flex items-end gap-x-4 gap-y-3 max-[670px]:flex-col max-[670px]:items-start">
                <div className="flex flex-col gap-y-3 flex-1 max-[670px]:w-full">
                    <label
                        htmlFor="coupon-code"
                        className="font-medium text-[#333333] text-[18px] max-[510px]:text-base"
                    >Enter Coupon Code</label>
                    <input
                        type="text"
                        id="coupon-code"
                        className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-xl font-normal max-[670px]:w-full"
                    />
                </div>
                <button type="button"
                    className="bg-[#0F4C85] text-white px-8 py-3 rounded-full text-xl font-normal max-[670px]:w-full">
                    Apply Coupon
                </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 max-[875]:grid-cols-1">
                <div></div>
                <div>
                    <h1 className="text-2xl font-bold text-[#0F4C81]">Billing Details</h1>
                    <form className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 max-[750px]:flex max-[750px]:flex-col">
                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email Address <span className="text-[#CB0404]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                        <div className="col-span-2 grid grid-cols-2 items-center gap-x-2 gap-y-3 max-[750px]:grid-cols-1">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                                    First Name <span className="text-[#CB0404]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                    value={form.firstName}
                                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                                    Last Name <span className="text-[#CB0404]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                    value={form.lastName}
                                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                                Company Name (optional)
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
                                Country/Region <span className="text-[#CB0404]">*</span>
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.country}
                                onChange={(e) => setForm({ ...form, country: e.target.value })}
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="address1" className="block text-gray-700 font-semibold mb-2">
                                Street Address <span className="text-[#CB0404]">*</span>
                            </label>
                            <input
                                type="text"
                                id="address1"
                                className="mb-2 w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.address1}
                                onChange={(e) => setForm({ ...form, address1: e.target.value })}
                            />
                            <input
                                type="text"
                                id="address2"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.address2}
                                onChange={(e) => setForm({ ...form, address2: e.target.value })}
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                                Town/City <span className="text-[#CB0404]">*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.city}
                                onChange={(e) => setForm({ ...form, city: e.target.value })}
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="county" className="block text-gray-700 font-semibold mb-2">
                                County (optional)
                            </label>
                            <input
                                type="text"
                                id="county"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.county}
                                onChange={(e) => setForm({ ...form, county: e.target.value })}
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="postcode" className="block text-gray-700 font-semibold mb-2">
                                Postcode <span className="text-[#CB0404]">*</span>
                            </label>
                            <input
                                type="text"
                                id="postcode"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal"
                                value={form.postcode}
                                onChange={(e) => setForm({ ...form, postcode: e.target.value })}
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="orderNotes" className="block text-gray-700 font-semibold mb-2">
                                Order Notes (optional)
                            </label>
                            <textarea
                                id="orderNotes"
                                className="w-full px-3 py-2 border border-[#D9D9D9] rounded-md text-base font-normal h-32 resize-none"
                                value={form.orderNotes}
                                onChange={(e) => setForm({ ...form, orderNotes: e.target.value })}
                            />
                        </div>
                        <button type="button"
                            onClick={handlePlaceOrder}
                            disabled={isLoading}
                            className="col-span-2 cursor-pointer bg-[#0F4C81] text-white px-8 py-3 rounded-full text-xl font-normal disabled:opacity-50 disabled:cursor-not-allowed">
                            {isLoading ? "Creating Order..." : "Place Order"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
