"use client";

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Plus, Minus } from 'lucide-react';
import { getProducts } from '@/http';
import toast from 'react-hot-toast';
import { stripHtml } from '@/utils';

export type Product = {
    id: string;
    name: string;
    price: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
};

export default function TasterBoxProductDetails({ productId }: { productId: string }) {
    const [product, setProduct] = useState<Product | null>(null);

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number>(1);
    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

    // Fetch product data once
    useEffect(() => {
        (async () => {
            try {
                const fetched = await getProducts();
                const current = fetched.find((p: Product) => p.id === productId);
                if (current) setProduct(current as Product);
            } catch (err) {
                console.error("Failed to load products", err);
            }
        })();
    }, [productId]);

    const images = [
        product?.image1 || "",
        product?.image2 || "",
        product?.image3 || "",
        product?.image4 || ""
    ];

    const flavors = [
        'Dulce de Leche',
        'Coconut & Lime',
        'Almond Sponge',
        'Blueberry & Pistachio',
        'Spiced Chocolate',
        'White Cream cake'
    ];

    const handleFlavorChange = (flavor: string) => {
        if (selectedFlavors.includes(flavor)) {
            setSelectedFlavors((f) => f.filter(x => x !== flavor));
        } else if (selectedFlavors.length < 4) {
            setSelectedFlavors((f) => [...f, flavor]);
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((i) => (i + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((i) => (i - 1 + images.length) % images.length);
    };

    const handleAddToCart = () => {
        if (!product || selectedFlavors.length !== 4) return;

        const cartItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
            selectedFlavors,
            timestamp: new Date().toISOString()
        };

        // read existing cart, append, and save
        const existing = JSON.parse(localStorage.getItem('cart') || '[]');
        existing.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(existing));

        toast.success("Added to cart!");
    };

    return (
        <div className="max-w-6xl mx-auto p-4 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Images */}
                <div className="space-y-4">
                    <div className="relative">
                        <img
                            src={images[currentImageIndex]}
                            alt="HC Taster Box"
                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-2 rounded">
                            <div className="text-2xl font-bold text-purple-600">HC</div>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        {images.map((src, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${currentImageIndex === idx ? 'border-blue-600' : 'border-gray-200'
                                    }`}
                            >
                                <img src={src} alt={`view ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Taster Box (PRE-ORDER)
                        </h1>
                        <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold text-green-600">₦{product?.price}</span>
                            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                                Available
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {stripHtml(product?.description || "")}
                    </p>

                    <div className="text-sm text-gray-600">
                        <p>4 slices, 8 servings</p>
                        <p className="mt-1">PRE-ORDER for delivery on ____</p>
                    </div>

                    {/* Gift Note */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Add a lovely gift note (optional)
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Enter your gift message here..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Flavors */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Pick any four (4) flavours
                        </h3>
                        <div className="space-y-3">
                            {flavors.map((flavor) => (
                                <label key={flavor} className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedFlavors.includes(flavor)}
                                        disabled={!selectedFlavors.includes(flavor) && selectedFlavors.length >= 4}
                                        onChange={() => handleFlavorChange(flavor)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                                    />
                                    <span className={`text-gray-700 ${!selectedFlavors.includes(flavor) && selectedFlavors.length >= 4
                                        ? 'opacity-50' : ''
                                        }`}>
                                        {flavor}
                                    </span>
                                </label>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Selected: {selectedFlavors.length}/4 flavours
                        </p>
                    </div>

                    {/* Quantity & Cart */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 border border-gray-300 rounded-lg">
                            <button
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="p-2 hover:bg-gray-50 rounded-l-lg"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="p-2 hover:bg-gray-50 rounded-r-lg"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={selectedFlavors.length !== 4}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Add To Cart
                        </button>

                        <button
                            onClick={() => setIsWishlisted((w) => !w)}
                            className={`p-3 rounded-lg border transition-colors ${isWishlisted
                                ? 'bg-red-50 border-red-200 text-red-600'
                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Sweet Words from Our Customers
                </h2>
                <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="text-2xl">🧁</div>
                    </div>
                    <p className="text-gray-400 italic">Oopsie! There are no reviews yet.</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Leave A Review
                </button>
            </div>
        </div>
    );
}
