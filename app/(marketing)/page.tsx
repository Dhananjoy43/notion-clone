import { Footer } from "./_components/Footer";
import { Heading } from "./_components/Heading";
import { Hero } from "./_components/Hero";

export default function MarketingPage() {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 gap-y-8 px-6 pb-10">
                <Heading />
                <Hero />
            </div>
            <Footer />
        </div>
    );
}
