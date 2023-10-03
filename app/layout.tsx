'server-only'

import { Suspense, useEffect } from 'react'

import fsPromises from 'fs/promises';
import path from 'path'

import Footer from '@/components/ui/footer'
import './css/style.css'
import Header from '@/components/ui/header'
import Home from './(default)/page';
import Loading from './(default)/loading';
import Banner from '@/components/banner';

const getMoonPhase = (async () => {
  const res = await fetch('https://peb00t1115.execute-api.us-east-1.amazonaws.com/prod/')
  return res.json()
})

const getMoonPhaseData = (async (currentMoonPhase: string) => {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'content/moonPhases.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData.toString());

  // todo
  // we'll filter it here but it really I should just get it by the object key and not store as array. 
  const filteredMoonPhase = objectData.moonPhases.filter((moonPhase: { name: string }) => moonPhase.name == currentMoonPhase)
  return filteredMoonPhase[0]
})


export default async function DefaultLayout() {

  const currentMoonPhase = await getMoonPhase()
  const moonRitualData = await getMoonPhaseData(currentMoonPhase)

  return (
    <html>
      <body>
          <Suspense fallback={<Loading/>}>
            <Header moonRitual={moonRitualData} />
            <Banner/>
            <main className="grow">
              <Home moonRitual={moonRitualData} />
            </main>
            <Footer />
          </Suspense>
        
      </body>
    </html>
  )
}
