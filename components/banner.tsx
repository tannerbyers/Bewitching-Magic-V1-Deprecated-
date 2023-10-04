'use client'

import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="flex flex-col justify-between p-3 text-sm shadow-lg bg-slate-800 text-slate-50 md:rounded">
            <div className='inline-flex text-white-500'><span>{`I love you <3`}</span>
              <button className="pl-2 ml-3 border-l border-gray-700 text-slate-500 hover:text-slate-400" onClick={() => setBannerOpen(false)}>
                <span className="sr-only">Close</span>
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                  <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                </svg>
              </button></div>
            <div style={{ width: "100%", height: 0, paddingBottom: "100%", position: "relative" }}><iframe src="https://giphy.com/embed/3oz8xLSmmt0WaMTbX2" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>
          </div>
        </div>
      )}
    </>
  )
}