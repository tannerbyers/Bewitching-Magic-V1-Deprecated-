import 'server-only'

import fsPromises from 'fs/promises';
import path from 'path'

export const metadata = {
  title: 'Moon Rituals',
  description: 'Learn moon rituals that change as the moon does.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'

export default function Home({moonRitual}: any) {
  return (
    <>
        <Hero moonRitual={moonRitual} />
        <Features moonRitual={moonRitual} />
    </>
  )
}
