"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, CalendarIcon, Users, Plane, Hotel, Car } from "lucide-react"
import { useState } from "react"

export function PlanTripPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Plan Your Trip</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill in the details to create your perfect itinerary</p>
      </div>

      <Tabs defaultValue="basics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basics">Trip Basics</TabsTrigger>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
              <CardDescription>Enter the basic information about your trip.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="trip-name">Trip Name</Label>
                  <Input id="trip-name" placeholder="Summer Vacation 2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select>
                    <SelectTrigger id="travelers">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <div className="flex items-center border rounded-md p-2">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>{date?.toDateString() || "Pick a date"}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (days)</Label>
                  <Input id="duration" type="number" min="1" placeholder="7" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($)</SelectItem>
                      <SelectItem value="moderate">Moderate ($$)</SelectItem>
                      <SelectItem value="luxury">Luxury ($$$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save & Continue</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Travel Preferences</CardTitle>
              <CardDescription>Tell us about your travel style and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="travel-style">Travel Style</Label>
                  <Select>
                    <SelectTrigger id="travel-style">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relaxed">Relaxed & Easy</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="active">Active & Busy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodation">Preferred Accommodation</Label>
                  <Select>
                    <SelectTrigger id="accommodation">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotels</SelectItem>
                      <SelectItem value="hostel">Hostels</SelectItem>
                      <SelectItem value="rental">Vacation Rentals</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="destinations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Destinations</CardTitle>
              <CardDescription>Add the places you want to visit on your trip.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 border rounded-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Tokyo, Japan</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">5 days • April 15-20, 2023</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Kyoto, Japan</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">5 days • April 20-25, 2023</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="mt-2">
                  Add Destination
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activities & Experiences</CardTitle>
              <CardDescription>Add activities and experiences you want to include in your trip.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-md flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                    <Plane className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sightseeing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Museums, landmarks, attractions</p>
                  </div>
                </div>
                <div className="p-4 border rounded-md flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Cultural Experiences</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Local traditions, workshops</p>
                  </div>
                </div>
                <div className="p-4 border rounded-md flex items-center gap-3">
                  <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-md">
                    <Hotel className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Accommodations</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Hotels, ryokans, rentals</p>
                  </div>
                </div>
                <div className="p-4 border rounded-md flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
                    <Car className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Transportation</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Trains, buses, car rentals</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="mt-2">
                Add Custom Activity
              </Button>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Generate Itinerary</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
