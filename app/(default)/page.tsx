import 'server-only'

export const metadata = {
  title: 'Moon Rituals',
  description: 'Learn moon rituals that change as the moon does.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'

const getData = (async () => {
  const res = await fetch('https://peb00t1115.execute-api.us-east-1.amazonaws.com/prod/')
  return res.json()
})
export default async function Home() {
  const moonPhase = await getData()
  return (
    <>
      {moonPhase &&
        <>
          <Hero />
          <Features />
        </>
      }
    </>
  )
}
