import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Compass, Trophy, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-orange-500 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">AmsterdamGo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Locations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Download
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canals-of-Amsterdam-2048x1380-sBEuVDmiUDMk4M10rIVOFD6PG6LpM0.jpg"
            alt="Amsterdam Canal"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                  Explore Amsterdam Like Never Before
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-xl drop-shadow-lg">
                  Turn your city tour into an exciting adventure. Discover hidden gems, solve puzzles, and earn points as you explore the beautiful city of Amsterdam.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-orange-500 text-white hover:bg-orange-600">Download Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-orange-500">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-orange-800">Game Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <MapPin className="w-12 h-12 text-orange-500" />
                  <h3 className="text-2xl font-bold text-center text-orange-800">Location-based Challenges</h3>
                  <p className="text-orange-700 text-center">Unlock unique challenges as you explore different parts of Amsterdam.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Trophy className="w-12 h-12 text-orange-500" />
                  <h3 className="text-2xl font-bold text-center text-orange-800">Points and Rewards</h3>
                  <p className="text-orange-700 text-center">Earn points for completing tasks and redeem them for real-world discounts.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Smartphone className="w-12 h-12 text-orange-500" />
                  <h3 className="text-2xl font-bold text-center text-orange-800">Augmented Reality</h3>
                  <p className="text-orange-700 text-center">Experience the city's history and culture through interactive AR features.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-orange-800">Popular Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Rijksmuseum", "Anne Frank House", "Van Gogh Museum"].map((location) => (
                <Card key={location} className="bg-white">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={location}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-orange-800">{location}</h3>
                      <p className="text-orange-700">Discover the secrets of {location} with our interactive challenges.</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Start Your Adventure?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl">
                  Download AmsterdamGo now and transform your city exploration into an unforgettable experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-orange-500 hover:bg-orange-100">
                  Download for iOS
                </Button>
                <Button className="bg-white text-orange-500 hover:bg-orange-100">
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-orange-100">
        <p className="text-xs text-orange-800">© 2023 AmsterdamGo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-orange-800" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-orange-800" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}