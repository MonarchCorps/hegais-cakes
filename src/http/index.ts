"use server";

import { Product } from "@/app/shop/[productId]/product-details";
import { CelebrationCakeInquiryType, TasterBoxInquiryType, WeddingCakeInquiryType, WorkshopInquiryType, OrderType } from "@/schema";
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

export async function createBespokeCakeInquiry(data: CelebrationCakeInquiryType) {
    try {
        const record = await pb.collection("bespokecakeinquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating bespoke cake inquiry:", error);
        throw error;
    }
}

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

export async function createOrder(data: OrderType) {
    
    try {
        // Step 1: Create cart items for each item in the cart
        const cartItemIds: string[] = [];
        
        for (const item of data.items) {
            const cartItemData = {
                product: item.product,
                quantity: item.quantity,
                price: item.price,
                flavours: item.flavours || "",
                gift_note: item.gift_note || ""
            };
            
            const cartItem = await pb.collection("cartitems").create(cartItemData);
            cartItemIds.push(cartItem.id);
        }

        // Step 2: Create cart with the cart item IDs
        const cartData = {
            items: cartItemIds,
            total: data.total,
            ispaid: false,
            payment_method: data.payment_method
        };
        
        const cart = await pb.collection("cart").create(cartData);

        // Step 3: Create billing info with the cart ID
        const billingData = {
            email: data.billing.email,
            firstname: data.billing.firstname,
            lastname: data.billing.lastname,
            company_name: data.billing.company_name || "",
            street_address: data.billing.street_address,
            town: data.billing.town,
            country: data.billing.country,
            postal_code: data.billing.postal_code,
            order_notes: data.billing.order_notes || "",
            cart: cart.id
        };
        
        await pb.collection("billing").create(billingData);

        // Step 4: Return the payment URL from the cart response
        return {
            success: true,
            paymentUrl: cart.payment_link,
            cartId: cart.id
        };

    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
}