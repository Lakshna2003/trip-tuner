import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Compass, Users } from "lucide-react"
export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-blue-50 py-24 overflow-hidden">
  {/* Background Overlay with Image */}
  <div className="absolute inset-0">
    <img
      src="/travel.jpg"
      alt="Travel background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
    
    {/* Text Content */}
    <div className="max-w-xl text-white text-center lg:text-left mb-16 lg:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Your <span className="text-cyan-300">Journey</span>,<br />
        Perfectly <span className="text-green-300">Tuned</span>
      </h1>
      <p className="text-xl mb-8">
        Create personalized travel itineraries with AI-powered recommendations tailored to your preferences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button
          asChild
          size="lg"
          className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-500 hover:text-white transition"
        >
          <Link href="/plan-trip">Start Planning →</Link>
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-white text-green-600 border border-green-600 hover:bg-green-500 hover:text-white transition"
        >
          <Link href="/itinerary">Learn More</Link>
        </Button>
      </div>
    </div>
{/* Search Section */}
<section className="py-12">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-8 text-white">Where to?</h2>

    {/* Tabs */}
    <div className="flex justify-center space-x-8 mb-6 text-white text-sm font-medium border-b border-white/30 pb-4">
      <button className="flex items-center gap-2 border-b-2 border-white text-white">
        <i className="fas fa-home" /> Search All
      </button>
      <button className="flex items-center gap-2 hover:text-cyan-300">
        <i className="fas fa-bed" /> Hotels
      </button>
      <button className="flex items-center gap-2 hover:text-cyan-300">
        <i className="fas fa-camera" /> Things to Do
      </button>
      <button className="flex items-center gap-2 hover:text-cyan-300">
        <i className="fas fa-utensils" /> Restaurants
      </button>
      <button className="flex items-center gap-2 hover:text-cyan-300">
        <i className="fas fa-plane" /> Flights
      </button>
      <button className="flex items-center gap-2 hover:text-cyan-300">
        <i className="fas fa-home" /> Holiday Homes
      </button>
    </div>

    {/* Search Box */}
    <div className="flex items-center justify-center">
      <div className="flex items-center w-full max-w-3xl rounded-full border px-6 py-3 shadow-lg bg-white/10 backdrop-blur-md">
        <i className="fas fa-search text-white/70 mr-3" />
        <input
          type="text"
          placeholder="Places to go, things to do, hotels..."
          className="flex-grow bg-transparent focus:outline-none text-white placeholder-white/70"
        />
        <button className="bg-green-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-500">
          Search
        </button>
      </div>
    </div>
  </div>
</section>

    {/* Image Collage */}
    <div className="relative w-full max-w-md flex-shrink-0 hidden lg:block">
      <div className="grid grid-cols-2 gap-4">
        <img
          src="mountain.jpg"
          alt="Mountains"
          className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
        />
        <img
          src="forest.jpg"
          alt="Forest"
          className="mt-12 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
        />
        <img
          src="river.jpg"
          alt="River"
          className="col-span-2 mx-auto w-3/4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  </div>
</section>

       {/* Features Section */}
       <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Trip Tuner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-blue-500" />
                <CardTitle>Discover Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore thousands of destinations worldwide with detailed information and tailored guides.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-10 w-10 text-blue-500" />
                <CardTitle>Create Itineraries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build day-by-day travel plans with activities, accommodations and transportation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Compass className="h-10 w-10 text-blue-500" />
                <CardTitle>Travel Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get personalized recommendations based on your preferences and travel style.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Compass className="h-10 w-10 text-blue-500" />
                <CardTitle>Travel Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plan transportation between destinations with ease.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Compass className="h-10 w-10 text-blue-500" />
                <CardTitle>Cultural Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about local customs and experiences before you arrive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-500" />
                <CardTitle>Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plan trips with friends and family by sharing and editing itineraries together.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10">How TripTuner Works</h2>
        <p className="text-gray-600 mb-12 text-lg">Creating your perfect itinerary is simple with our three-step process</p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div>
            <h3 className="text-5xl text-blue-300 font-bold mb-4">01</h3>
            <h4 className="text-xl font-semibold mb-2">Share Your Preferences</h4>
            <p className="text-gray-600">Tell us where you want to go, for how long, and what you love to do.</p>
          </div>
          <div>
            <h3 className="text-5xl text-blue-300 font-bold mb-4">02</h3>
            <h4 className="text-xl font-semibold mb-2">Get Personalized Itinerary</h4>
            <p className="text-gray-600">Our AI creates a custom day-by-day plan based on your unique preferences.</p>
          </div>
          <div>
            <h3 className="text-5xl text-blue-300 font-bold mb-4">03</h3>
            <h4 className="text-xl font-semibold mb-2">Travel With Confidence</h4>
            <p className="text-gray-600">Access your itinerary anywhere, with maps, bookings, and local tips.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-lg mb-8">Start creating your personalized travel itinerary today.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/plan-trip">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


