import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium"><img src="/image.png" alt="Trip Tuner Logo" className="h-6 w-6" />Trip Tuner</h3>
            <p className="text-sm text-muted-foreground">Plan your next adventure with ease</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/itinerary" className="text-sm hover:underline">
                  Itinerary
                </Link>
              </li>
              <li>
                <Link href="/plan-trip" className="text-sm hover:underline">
                  Plan Trip
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Trip Planner. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
