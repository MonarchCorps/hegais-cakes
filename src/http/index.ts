"use server";

import { Product } from "@/app/shop/[productId]/product-details";
import { TasterBoxInquiryType, WeddingCakeInquiryType, WorkshopInquiryType } from "@/schema";
import pb from "@/services";

export async function createWorkShopBooking(data: WorkshopInquiryType) {
    try {
        const record = await pb.collection("workshopbooking").create(data);
        return record;
    } catch (error) {
        console.error("Error creating consultation booking:", error);
        throw error;
    }
}

export async function createTasteBoxInquiry(data: TasterBoxInquiryType) {
    try {
        const record = await pb.collection("TasterBoxInquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating taste box inquiry:", error);
        throw error;
    }
}

// export async function createBespokeCakeInquiry(data: CreateBespokeCakeInquiryType) {
//     try {
//         const record = await pb.collection("bespokecakeinquiry").create(data);
//         return record;
//     } catch (error) {
//         console.error("Error creating bespoke cake inquiry:", error);
//         throw error;
//     }
// }

export async function createWeddingCakeInquiry(data: WeddingCakeInquiryType) {
    try {
        const record = await pb.collection("weddingcakeinquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating wedding cake inquiry:", error);
        throw error;
    }
}

export async function getProducts() {
    try {
        // Use fetch with Next.js revalidation
        const res = await fetch(
            "https://orca-app-h75k3.ondigitalocean.app/api/collections/Shop/records",
            {
                next: { revalidate: 60 },
            }
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(id: string) {
    try {
        const data = await getProducts();
        const current = data.find((p: Product) => p.id === id);
        return current;
    } catch (error) {
        console.error("Error fetching product by id:", error);
        throw error;
    }
}

export async function subscribeToNewsletter(email: string) {
    try {
        const record = await pb.collection("newsletter").create({ email });
        return record;
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        throw error;
    }
}