import { HydrateClient } from '~/trpc/server'
import {PatientProfile} from './patient'

export default function Page() {
  return (
    <HydrateClient>
     <PatientProfile/>
    </HydrateClient>
  )
}
