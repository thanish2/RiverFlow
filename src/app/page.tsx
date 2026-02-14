import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-16">
      {/* Hero section with Magic UI effects */}
      <section>
        <HeroSection />
      </section>

      {/* Latest questions + top contributors */}
      <section className="container mx-auto px-4 grid gap-10 lg:grid-cols-[2fr_1.2fr] items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Latest Questions</h2>
          {/* Server component that fetches questions */}
          {/* @ts-expect-error Async Server Component */}
          <LatestQuestions />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Top Contributors</h2>
          {/* @ts-expect-error Async Server Component */}
          <TopContributers />
        </div>
      </section>

      {/* Footer with Magic UI background */}
      <Footer />
    </main>
  );
}
