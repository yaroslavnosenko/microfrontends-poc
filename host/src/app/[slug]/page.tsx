import { HydrateClient } from '~/trpc/server'

export default function Page() {
  return (
    <HydrateClient>
      <div className="p-4">I am generic page from host</div>
    </HydrateClient>
  )
}
