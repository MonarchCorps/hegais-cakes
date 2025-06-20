import * as Yup from "yup";

export const tasterboxInquirySchema = Yup.object({
    event_type: Yup.string().required("Required"),
    event_date: Yup.string().required("Required"),
    event_venue: Yup.string().required("Required"),
    delivery_time: Yup.string().required("Required"),
    no_of_taster_boxes: Yup.number().required("Required").positive(),
    flavlors_list: Yup.string().required("Required"),
    dietary_needs: Yup.string().nullable(),
    company_name: Yup.string().required("Required"),
    contact_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone_number: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type TasterBoxInquiryType = Yup.InferType<typeof tasterboxInquirySchema>;

export const weddingCakeInquirySchema = Yup.object({
    wedding_date: Yup.string().required("Required"),
    wedding_venue: Yup.string().required("Required"),
    number_of_tiers: Yup.string().required("Required"),
    number_of_guests: Yup.string().required("Required"),
    cake_flavours: Yup.string().required("Required"),
    dietary_needs: Yup.string().nullable(),
    other_dietary_need: Yup.string().nullable(),
    design_inspiration: Yup.mixed().nullable(),
    couple_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone_number: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type WeddingCakeInquiryType = Yup.InferType<typeof weddingCakeInquirySchema>;

export const workshopInquirySchema = Yup.object({
    full_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone_number: Yup.string().required("Required"),
    number_of_participants: Yup.number().required("Required").positive(),
    preferred_date: Yup.string().required("Required"),
    type_and_flavour: Yup.string().required("Required"),
    desired_outcome: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type WorkshopInquiryType = Yup.InferType<typeof workshopInquirySchema>;

export const celebrationCakeInquirySchema = Yup.object({
    birthday: Yup.string().required("Required"),
    event_type: Yup.string().required("Required"),
    event_date: Yup.string().required("Required"),
    event_time: Yup.string().required("Required"),
    theme_or_inspiration: Yup.string().required("Required"),
    number_of_tiers: Yup.string().required("Required"),
    tier_shape: Yup.string().required("Required"),
    size: Yup.string().required("Required"),
    flavours: Yup.string().required("Required"),
    design_inspiration: Yup.mixed().nullable(),
    arrange_collection_ickenham: Yup.string().required("Required"),
    full_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone_number: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
    dietary_needs: Yup.string().nullable(),
    other_dietary_need: Yup.string().nullable()
});

export type CelebrationCakeInquiryType = Yup.InferType<typeof celebrationCakeInquirySchema>;

export const orderSchema = Yup.object({
    items: Yup.array().of(Yup.object({
        product: Yup.string().required("Required"),
        quantity: Yup.number().required("Required").positive(),
        price: Yup.number().required("Required").positive(),
        flavours: Yup.string().nullable(),
        gift_note: Yup.string().nullable(),
    })).required("Required"),
    total: Yup.number().required("Required").positive(),
    payment_method: Yup.string().required("Required"),
    billing: Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        company_name: Yup.string().nullable(),
        street_address: Yup.string().required("Required"),
        town: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        postal_code: Yup.string().required("Required"),
        order_notes: Yup.string().nullable(),
    }).required("Required"),
});

export type OrderType = Yup.InferType<typeof orderSchema>;