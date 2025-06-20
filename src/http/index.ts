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

    // cartitems --- {
    //     "product": "9gp8t9o2e7j2s9f",
    //     "quantity": 2,
    //     "price": 5.99,
    //     "flavours": "Dark, Milk",
    //     "gift_note": "Happy Birthday!"
    //   }

// cart items response - {
    // {
    //     "collectionId": "pbc_938835959",
    //     "collectionName": "cartitems",
    //     "created": "2025-06-20 22:05:54.075Z",
    //     "flavours": "Dark, Milk",
    //     "gift_note": "Happy Birthday!",
    //     "id": "vw6282uu063o7iu",
    //     "price": 5.99,
    //     "product": "9gp8t9o2e7j2s9f",
    //     "quantiy": 0,
    //     "updated": "2025-06-20 22:05:54.075Z"
    // }
// }


    // cart---{
    //     "items": [
    //         "vw6282uu063o7iu"
    //     ],
    //     "total": 123,
    //     "ispaid": true,
    //     "payment_method": "stripe"
    // }

//cart response --{
    // {
    //     "collectionId": "pbc_749661959",
    //     "collectionName": "cart",
    //     "created": "2025-06-20 22:12:34.460Z",
    //     "id": "s1a336ua799tg09",
    //     "ispaid": true,
    //     "items": [
    //         "vw6282uu063o7iu"
    //     ],
    //     "payment_link": "https://checkout.stripe.com/c/pay/cs_live_a1OlGttrCHAhxXESEqLjxZQ26tr52MjROjlFoqI1bNUStDyV4exgxGvUZd#fidkdWxOYHwnPyd1blppbHNgWjA0VF1UT2RAaXV0fHJWTkJXcVBpMWx%2FMGFhMzNpTXR0dTJIQWw2S2s0f3NgYlZON0dsNnJLR2NAdl0xQnRwZ0dQd39uZGAxT382UUhrNU1qYzU9Nld0REI2NTV2b2NxT0tzVCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
    //     "payment_method": "stripe",
    //     "shipping": 0,
    //     "subtotal": 0,
    //     "total": 123,
    //     "updated": "2025-06-20 22:12:34.460Z"
    // }
// }

// billing info --{
    // {
    //     "email": "customer@example.com",
    //     "firstname": "Jane",
    //     "lastname": "Doe",
    //     "company_name": "Doe Cakes",
    //     "street_address": "123 Sweet Lane",
    //     "town": "Lagos",
    //     "country": "Nigeria",
    //     "postal_code": "100001",
    //     "order_notes": "Ring the doorbell twice",
    //     "cart": "s1a336ua799tg09"    
    //   }

    // billing info response --{
        // {
        //     "cart": "s1a336ua799tg09",
        //     "collectionId": "pbc_2104570688",
        //     "collectionName": "billing",
        //     "company_name": "Doe Cakes",
        //     "country": "Nigeria",
        //     "created": "2025-06-20 22:25:29.301Z",
        //     "email": "customer@example.com",
        //     "firstname": "Jane",
        //     "id": "e80630j42oe64t8",
        //     "lastname": "Doe",
        //     "order_notes": "Ring the doorbell twice",
        //     "postal_code": "100001",
        //     "street_address": "123 Sweet Lane",
        //     "town": "Lagos",
        //     "updated": "2025-06-20 22:25:29.301Z"
        // }
    // }

    // first we need to create a cartItems for each items in the cart
    // save the id of all cartItems in an array
    // create an order/cart with the cartItems ids
    // save the order id
    // create a billing info

    
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