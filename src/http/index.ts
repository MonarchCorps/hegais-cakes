"use client";

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
        const records = await pb.collection("Shop").getFullList({
            sort: "-created", // or "name" or any field
        });

        return records;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(id: string) {
    try {
        const record = await pb.collection("Shop").getOne(id);
        return record;
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