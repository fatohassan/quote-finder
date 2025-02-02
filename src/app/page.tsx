import FindQuote from "@/app/components/FindQuote";

export default function Home() {
    return (
        <div
            className="grid items-center justify-items-center mb-36 p-8 pb-20 gap-2 text-2xl font-[family-name:var(--font-geist-sans)]">
            <header>
                Your Favourite Quote Finder
            </header>
            <FindQuote/>
        </div>
    );
}
