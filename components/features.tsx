"use client";

export default function Features({moonRitual}: any) {

  return (
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            {/* Rituals */}
            <div
              className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6"
              
            >
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="mb-3 h3">Rituals</h3>
                <p className="text-xl text-gray-600">
                  Discover the magic of Magic Rituals. Dive into the cosmic realm and harness lunar energy for personal growth and transformation. Set intentions, meditate, and align with the moon's phases. Embrace this ancient practice today.
                </p>
              </div>
              <div className="mb-8 md:mb-0">
                { 
                   moonRitual?.rituals.tasks.map((ritual: any) => {
                    return (<div className="flex items-center p-5 mb-3 text-lg transition duration-300 ease-in-out bg-white border border-gray-200 rounded shadow-md hover:shadow-lg">
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      {ritual.description}
                    </div>
                  </div>)
                  })  
                }
              </div>
            </div>
            {/* Items */}
            <div
              className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6"
              
            >
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="mb-3 h3">Items</h3>
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
              { 
                   moonRitual?.items.products.map((ritual: any) => {
                    return (<div className="flex items-center p-5 mb-3 text-lg transition duration-300 ease-in-out bg-white border border-gray-200 rounded shadow-md hover:shadow-lg">
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      {ritual}
                    </div>
                  </div>)
                  })  
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
