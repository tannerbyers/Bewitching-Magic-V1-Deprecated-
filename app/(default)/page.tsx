import 'server-only'

import fsPromises from 'fs/promises';
import path from 'path'

export const metadata = {
  title: 'Bewitching Magic',
  description: 'Learn wonderful magic rituals and spells to bring more joy into your life..',
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
