"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "123456") {
      setMessage("✅ Login successful!")
      setShowSignIn(false)
    } else {
      setMessage("❌ Invalid credentials")
    }
    setUsername("")
    setPassword("")
  }

  return (
    <header className="border-b bg-blue-50 sticky top-0 z-50 shadow">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img src="/image.PNG" alt="Logo" className="h-8 w-8 object-contain" />
          <h1 className="text-xl font-bold text-blue-600">Trip Tuner</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
          <Link href="/itinerary" className="text-sm font-medium hover:underline">Itinerary</Link>
          <Link href="/plan-trip" className="text-sm font-medium hover:underline">Plan Trip</Link>
        </nav>

        {/* Sign In + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSignIn(true)}
            className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
          >
            Sign In
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
            <Link href="/itinerary" className="text-sm font-medium hover:underline">Itinerary</Link>
            <Link href="/plan-trip" className="text-sm font-medium hover:underline">Plan Trip</Link>
            <button
              onClick={() => {
                setShowSignIn(true)
                setIsOpen(false)
              }}
              className="text-left text-sm font-medium hover:underline"
            >
              Sign In
            </button>
          </nav>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-80 shadow-lg relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded mb-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Message */}
      {message && (
        <div className="text-center text-sm p-2 bg-gray-100 text-black">
          {message}
        </div>
      )}
    </header>
  )
}
