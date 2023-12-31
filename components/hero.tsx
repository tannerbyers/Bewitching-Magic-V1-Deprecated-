
import Image from "next/image";
import plantPic from '@/public/images/plant.png'
export default function Hero({ moonRitual }: any) {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-32 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
            >
              {moonRitual?.name || "No moon rituals currently saved! "}
            </h1>
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-gray-600"
              >
                {moonRitual?.rituals.summary}
              </p>
              <span className="text-8xl" >{moonRitual?.emoji}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
