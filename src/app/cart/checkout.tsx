import { useState } from "react";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

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
        country: "United Kingdom (UK)",
        address1: "",
        address2: "",
        city: "",
        county: "",
        postcode: "",
        shipToDifferent: false,
        orderNotes: "",
    });

    // ---- validation state ----
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

    const handlePlaceOrder = () => {
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            toast.error("Please fill in all required fields");
            return;
        }
        // all good → proceed
        setCurrentStep(3);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white min-h-screen">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

            {/* Coupon */}
            <div>
                <label className="block text-gray-700 font-medium mb-3">
                    Enter Coupon Code
                </label>
                <div className="w-full flex gap-3">
                    <input
                        type="text"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=""
                    />
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium whitespace-nowrap">
                        Apply Coupon
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
                {/* Payment Method */}
                <div className="flex items-center gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
                        Pay With Stripe
                    </button>
                    <span className="text-gray-500 ml-3">or</span>
                </div>

                {/* Billing Details */}
                <div>
                    <h2 className="text-xl font-bold text-blue-600 mb-6">
                        Billing Details
                    </h2>

                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.firstName}
                                    onChange={(e) => setForm(f => ({ ...f, firstName: e.target.value }))}
                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.lastName}
                                    onChange={(e) => setForm(f => ({ ...f, lastName: e.target.value }))}
                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Company Name (optional)
                            </label>
                            <input
                                type="text"
                                value={form.company}
                                onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Country/Region <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    value={form.country}
                                    onChange={(e) => setForm(f => ({ ...f, country: e.target.value }))}
                                    className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.country ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option>United Kingdom (UK)</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Australia</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                            </div>
                            {errors.country && (
                                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                            )}
                        </div>

                        {/* Street Address */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Street Address <span className="text-red-500">*</span>
                            </label>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="House number and street name"
                                    value={form.address1}
                                    onChange={(e) => setForm(f => ({ ...f, address1: e.target.value }))}
                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address1 ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.address1 && (
                                    <p className="text-red-500 text-sm">{errors.address1}</p>
                                )}
                                <input
                                    type="text"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    value={form.address2}
                                    onChange={(e) => setForm(f => ({ ...f, address2: e.target.value }))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Town/City <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={form.city}
                                onChange={(e) => setForm(f => ({ ...f, city: e.target.value }))}
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.city ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                            )}
                        </div>

                        {/* County */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                County (optional)
                            </label>
                            <input
                                type="text"
                                value={form.county}
                                onChange={(e) => setForm(f => ({ ...f, county: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Postcode */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Postcode <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={form.postcode}
                                onChange={(e) => setForm(f => ({ ...f, postcode: e.target.value }))}
                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.postcode ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.postcode && (
                                <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>
                            )}
                        </div>

                        {/* Ship to different address */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="shipToDifferent"
                                checked={form.shipToDifferent}
                                onChange={(e) => setForm(f => ({ ...f, shipToDifferent: e.target.checked }))}
                                className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="shipToDifferent" className="text-gray-700">
                                Ship to a different address?
                            </label>
                        </div>

                        {/* Order Notes */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Order Notes (optional)
                            </label>
                            <textarea
                                placeholder="Special notes for delivery"
                                rows={4}
                                value={form.orderNotes}
                                onChange={(e) => setForm(f => ({ ...f, orderNotes: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                        </div>
                    </div>

                    {/* Order Summary & Place Order */}
                    <div className="max-w-md mx-auto bg-white py-6">
                        {/* … (your existing summary markup here) … */}

                        <button
                            onClick={handlePlaceOrder}
                            className="w-full bg-blue-700 text-white py-4 rounded-full font-medium hover:bg-blue-800 text-lg transition-colors"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
