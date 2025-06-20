"use client";

import { useEffect, useState } from 'react';
import { getProducts } from '@/http';
import type { Product } from '../shop/[productId]/product-details';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { stripHtml } from '@/utils';
import Link from 'next/link';

export default function WishlistPage() {
    const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadWishlistProducts = async () => {
            try {
                const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');

                if (wishlistIds.length === 0) {
                    setWishlistProducts([]);
                    setIsLoading(false);
                    return;
                }

                const allProducts = await getProducts();
                const filteredProducts = allProducts.filter((product: Product) =>
                    wishlistIds.includes(product.id)
                );

                setWishlistProducts(filteredProducts);
            } catch (error) {
                console.error('Error loading wishlist products:', error);
                toast.error('Failed to load wishlist products');
            } finally {
                setIsLoading(false);
            }
        };

        loadWishlistProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="max-w-[75rem] mx-auto pt-12 pb-5 px-7 max-[530px]:px-4">
                <div className="mt-14">
                    <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Wishlist</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-lg text-gray-500">Loading...</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[75rem] mx-auto pt-12 pb-5 px-7 max-[530px]:px-4">
            <div className="mt-14">
                <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Wishlist</h1>

                {wishlistProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-6">Start adding your favorite products to your wishlist!</p>
                        <Link
                            href="/shop"
                            className="inline-block bg-[#0F4C81] text-white px-6 py-3 rounded-full hover:bg-[#0F4C85] transition-colors"
                        >
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistProducts.map((product) => (
                            <Link href={`/shop/${product.id}`} key={product.id} className="flex flex-col gap-2">
                                <img
                                    src={product.image1}
                                    alt={product.name}
                                    className="h-[400px] w-full object-cover rounded-md"
                                />
                                <span className="text-2xl font-semibold">{product.name}</span>
                                <span className="text-xl text-[#50555C] line-clamp-2">{stripHtml(product.description)}</span>
                                <span className="text-2xl text-[#0F4C81] font-bold mt-3">£{product.price}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 