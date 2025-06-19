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