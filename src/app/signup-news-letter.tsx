"use client";
import { useState } from "react";
import { subscribeToNewsletter } from "@/http";
import { berkshireSwash } from "@/lib/fonts";

export default function SignupNewsLetter() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterLoading, setNewsletterLoading] = useState(false);
    const [newsletterMessage, setNewsletterMessage] = useState<string | null>(null);

    return (
        <section>
            <div className="max-w-[50rem] mx-auto py-12 px-7">
                <h1 className={`${berkshireSwash.className} text-center text-3xl leading-tight capitalize text-[#E04F85] max-[510px]:text-2xl`}>
                    Get sweet deals and updates!
                </h1>
                <p className="text-[#0F4C81] max-w-[40rem] mx-auto mt-3 text-center max-[510px]:text-sm">
                    Be the first to know about new products, discounts and what&apos;s happening in Hegai Cakes
                </p>
                <form
                    className="flex items-center mt-10 max-[510px]:flex-col max-[510px]:gap-y-3"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        setNewsletterLoading(true);
                        setNewsletterMessage(null);
                        try {
                            await subscribeToNewsletter(newsletterEmail);
                            setNewsletterMessage("Subscribed successfully! 🎉");
                            setNewsletterEmail("");
                        } catch  {
                            setNewsletterMessage("Subscription failed. Please try again.");
                        } finally {
                            setNewsletterLoading(false);
                        }
                    }}
                >
                    <input
                        type="email"
                        name="newsletter-email"
                        id="newsletter-email"
                        placeholder="Enter your email"
                        className="w-full p-2 rounded-l-3xl rounded-r-none border border-[#0F4C81] max-[510px]:rounded-r-3xl"
                        value={newsletterEmail}
                        onChange={e => setNewsletterEmail(e.target.value)}
                        required
                        disabled={newsletterLoading}
                    />
                    <button
                        type="submit"
                        className="bg-[#0F4C81] text-white py-[9px] px-8 rounded-r-3xl max-[510px]:rounded-l-3xl"
                        disabled={newsletterLoading}
                    >
                        {newsletterLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>
                {newsletterMessage && (
                    <p className="text-center mt-3 text-[#E04F85]">{newsletterMessage}</p>
                )}
            </div>
        </section>
    );
}