import { HydrateClient } from '~/trpc/server'
import { Login } from './login'

export default async function Home() {
  return (
    <HydrateClient>
      <Login />
    </HydrateClient>
  )
}