import Footer from "@/components/Footer"
import StatsPreviewCard from "@/components/StatsPreviewCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 gap-16">
      <StatsPreviewCard />
      <Footer />
    </main>
  )
}
