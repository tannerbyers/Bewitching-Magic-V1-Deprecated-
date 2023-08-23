"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            {/* Rituals */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Rituals</h3>
                <p className="text-xl text-gray-600">
                  Create a symbolic act of release, such as writing down what
                  you wish to let go of and safely burning or burying it,
                  meditate on release and forgiveness, or perform a cleansing
                  ritual with a smudge or other purifying herbs.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Arrange your plants where they can receive moonlight.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Light a green or white candle to symbolize growth and
                    vitality.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Gently water your plants, speaking words of care and
                    nurturing. As you water, visualize the plants absorbing the
                    moon's energy and turning it into nourishment.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Sprinkle a bit of moon-charged water on the soil.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Place a small crystal near your plants to enhance their
                    energy.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Meditate on the growth and vitality you're cultivating.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Snuff out the candle with gratitude.
                  </div>
                </div>
              </div>
            </div>
            {/* Items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Items</h3>
                <p className="text-xl text-gray-600">
                  As you gather these items, infuse them with your own intention
                  and energy, aligning them with the nurturing essence of the
                  waxing crescent moon. Through this ritual, you'll not only
                  provide care for your plants but also cultivate a deeper
                  connection to nature's cycles and energies.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Green or White Candle.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Moon-Charged Water.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Plant Care Tools.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Herbs or Plant Essences.
                  </div>
                </div>
                <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Small Clear Quartz or Green Aventurine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
