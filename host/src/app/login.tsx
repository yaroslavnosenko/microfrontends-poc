'use client'

import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 border border-gray-100">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-brand px-4 py-2 text-white hover:opacity-60 focus:outline-none focus:ring-2"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don not have an account?{' '}
            <a href="#" className="text-brand hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}