import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Coffee, Utensils, Bed, Car } from "lucide-react"

const itineraryData = {
  day1: [
    {
      time: "9:00 AM - 11:00 AM",
      icon: <Car className="h-4 w-4 text-blue-500" />,
      label: "Transportation",
      title: "Arrive at Narita International Airport",
      description: "Clear immigration, collect luggage, and exchange currency if needed.",
      image: "/narita.jpg",
    },
    {
      time: "11:30 AM - 1:00 PM",
      icon: <Car className="h-4 w-4 text-blue-500" />,
      label: "Transportation",
      title: "Transfer to Hotel in Shinjuku",
      description: "Take the Narita Express (N'EX) train to Shinjuku Station (approx. 90 minutes).",
      image: "/nex.jpg",
    },
    {
      time: "1:00 PM - 3:00 PM",
      icon: <Bed className="h-4 w-4 text-blue-500" />,
      label: "Accommodation",
      title: "Check-in at Hotel Century Southern Tower",
      description: "Drop off luggage, freshen up, and rest briefly from the journey.",
      image: "/hotel.jpg",
    },
    {
      time: "3:30 PM - 6:00 PM",
      icon: <MapPin className="h-4 w-4 text-blue-500" />,
      label: "Sightseeing",
      title: "Explore Shinjuku Area",
      description:
        "Visit Shinjuku Gyoen National Garden, walk through the bustling streets of Kabukicho, and see the Godzilla statue.",
      image: "/shinjuku.jpg",
    },
    {
      time: "6:30 PM - 8:30 PM",
      icon: <Utensils className="h-4 w-4 text-blue-500" />,
      label: "Dining",
      title: "Dinner at Omoide Yokocho",
      description:
        "Experience the nostalgic atmosphere of 'Memory Lane' with its tiny yakitori and ramen stalls.",
      image: "/omoide.jpg",
    },
  ],
  day2: [
    {
      time: "8:00 AM - 9:00 AM",
      icon: <Coffee className="h-4 w-4 text-blue-500" />,
      label: "Dining",
      title: "Breakfast at Hotel",
      description: "Enjoy a traditional Japanese breakfast at the hotel restaurant.",
      image: "/omoide.jpg",
    },
    {
      time: "9:30 AM - 12:00 PM",
      icon: <MapPin className="h-4 w-4 text-blue-500" />,
      label: "Sightseeing",
      title: "Asakusa & Senso-ji Temple",
      description: "Visit Tokyo's oldest temple and walk through Nakamise Shopping Street.",
      image: "/asakusa.jpg",
    },
    {
      time: "12:30 PM - 1:30 PM",
      icon: <Utensils className="h-4 w-4 text-blue-500" />,
      label: "Dining",
      title: "Lunch at Asakusa",
      description: "Try local specialties like tempura or monjayaki at a nearby restaurant.",
      image: "/images/tempura.jpg",
    },
  ],
}

export function ItineraryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Japan Adventure: Tokyo & Kyoto</h1>
        <p className="text-gray-500 dark:text-gray-400">10 days • April 15-25, 2025</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="day1">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
              <TabsTrigger value="day4">Day 4</TabsTrigger>
              <TabsTrigger value="day5">Day 5</TabsTrigger>
            </TabsList>

            {["day1", "day2"].map((day) => (
              <TabsContent key={day} value={day} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold capitalize">{day.replace("day", "Day ")} Highlights</h2>
                </div>
                {itineraryData[day].map((activity, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <CardTitle className="text-base">{activity.time}</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                          {activity.icon}
                          <span className="text-sm text-gray-500">{activity.label}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-5 gap-4">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="rounded-lg w-full md:col-span-2 h-full object-cover"
                      />
                      <div className="md:col-span-3">
                        <h3 className="font-medium mb-1">{activity.title}</h3>
                        <CardDescription>{activity.description}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}

            {["day3", "day4", "day5"].map((day) => (
              <TabsContent key={day} value={day}>
                <div className="flex items-center justify-center h-40 border rounded-md">
                  <p className="text-muted-foreground">Itinerary for {day.replace("day", "Day ")} will be added soon</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trip Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Duration</h3>
                <p className="text-sm text-gray-500">10 days (April 15–25, 2025)</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Destinations</h3>
                <p className="text-sm text-gray-500">Tokyo (5 days), Kyoto (5 days)</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Accommodations</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Hotel Century Southern Tower, Tokyo</li>
                  <li>• Kyoto Century Hotel, Kyoto</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-1">Transportation</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• International flights</li>
                  <li>• Shinkansen (bullet train)</li>
                  <li>• Local trains and subway</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Tokyo</p>
                  <p className="text-sm text-gray-500">April 15–20</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">18°C – 22°C</p>
                  <p className="text-sm text-gray-500">Partly Cloudy</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Kyoto</p>
                  <p className="text-sm text-gray-500">April 20–25</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">16°C – 20°C</p>
                  <p className="text-sm text-gray-500">Mostly Sunny</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1">Edit Itinerary</Button>
            <Button variant="outline" className="flex-1">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
