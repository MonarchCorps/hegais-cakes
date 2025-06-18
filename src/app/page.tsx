import SignupNewsLetter from "./signup-news-letter";
import Hero from "@/components/home/hero";
import Designed from "@/components/home/designed";
import Catalogue from "@/components/home/catalogue";
import Flavours from "@/components/home/flavours";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
    return (
        <main>
            <Hero />
            <Designed />
            <Catalogue />
            <Flavours />
            <Testimonials />
            <SignupNewsLetter />
        </main>
    );
}
