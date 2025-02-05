import Link from 'next/link'
import { HydrateClient } from '~/trpc/server'

export default async function Home() {
  return (
    <HydrateClient>
      <div className="p-4">
        <p>I am main page from host</p>
        <Link className="text-blue-600 underline" href="/generic">
          Generic page
        </Link>
      </div>
    </HydrateClient>
  )
}
