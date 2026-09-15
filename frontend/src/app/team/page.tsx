import Image from 'next/image';

export default function TeamPage() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50">
      <div className="flex flex-col items-center py-12 text-center">
        <h1 className="text-4xl font-bold text-prussian-blue">Our Team</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy">
          Team team team team team!
        </p>
      </div>

      <section className="w-full flex flex-col min-h-192 items-start px-16 py-12">
        <div className="flex flex-row gap-8 mb-6 w-full">
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-bold text-prussian-blue">Aerodynamics</h1>
            <p className="whitespace-pre-line">
              Our team designs and analyzes the aircraft's wings, tail, and control surfaces. For this, we use the programs XFLR5 and CAD. We also test flight equipment.
              <br></br>
              If you join, you will learn how about airfoil and wing design, aircraft sizing, data analysis, design and software trade studies.
            </p>

            <p className="mt-auto text-center">
              Aerodynamics Leads
            </p>
          </div>
          <div className="w-1/2 shrink-0 relative">
            <Image
              src="/assets/nightowl-biplane-74556-nobg.png"
              alt="SAE Aero's Aerodynamics Team"
              width={0}
              height={0}
              sizes="33vw"
              loading="eager"
              className="w-full h-auto rounded-lg"
            />
            <a
              href="https://pixabay.com/photos/biplane-airplane-plane-oldtimer-74556/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[10px] text-imperial-blue/50 hover:text-imperial-blue transition-colors"
            >
              Image from nightowl
            </a>
          </div>
        </div>

      </section>

      <section className="w-full flex flex-col min-h-192 items-end px-16 py-12">
        <div className="flex flex-row gap-8 mb-6 w-full">
          <div className="w-1/2 shrink-0 relative">
            <Image
              src="/assets/matias_luge-vought-f4u-corsair-7325996.jpg"
              alt="SAE Aero's Structures Team"
              width={0}
              height={0}
              sizes="33vw"
              className="w-full h-auto rounded-lg"
            />
            <a
              href="https://pixabay.com/photos/vought-f4u-corsair-plane-model-7325996/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2 text-[10px] text-white/50 hover:text-white transition-colors"
            >
              Image from Matias_Luge
            </a>
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-bold text-prussian-blue">Structures</h1>
            <p>
              Info about our structures team. Yay yay yay yay. Yay yay yay yay.
            </p>
            <p className="mt-auto text-center">
              Structures Leads
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col min-h-192 items-start px-16 py-12">
        <div className="flex flex-row gap-8 mb-6 w-full">
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-bold text-prussian-blue">Avionics</h1>
            <p>
              Info about our avionics team. Yay yay yay yay. Yay yay yay yay.
            </p>
            <p className="mt-auto text-center">
              Avionics Leads
            </p>
          </div>
          <div className="w-1/2 shrink-0 relative">
            <Image
              src="/assets/moonzigg-aircraft-3241229.jpg"
              alt="SAE Aero's Avionics Team"
              width={0}
              height={0}
              sizes="33vw"
              className="w-full h-auto rounded-lg"
            />
            <a
              href="https://pixabay.com/photos/aircraft-plane-aviation-engine-3241229/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[10px] text-imperial-blue/50 hover:text-imperial-blue transition-colors"
            >
              Image from Moonzigg
            </a>
          </div>
        </div>
      </section>
{/* 
      <section className="w-full flex flex-col min-h-192 items-end px-16 py-12">
        <div className="flex flex-row gap-8 mb-6 w-full">
          <div className="w-1/2 shrink-0 relative">
            <Image
              src="/assets/publicdomainpictures-bank-15616_1920.jpg"
              alt="SAE Aero's Business Team"
              width={0}
              height={0}
              sizes="33vw"
              className="w-full h-auto rounded-lg"
            />
            <a
              href="https://pixabay.com/photos/bank-banking-banknote-britain-15616/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2 text-[10px] text-black/50 hover:text-imperial-blue transition-colors"
            >
              Image from publicdomainpictures
            </a>
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-bold text-prussian-blue">Business</h1>
            <p>
              Info about our business team. Yay yay yay yay. Yay yay yay yay.
            </p>
            <p className="mt-auto text-center">
              Business Leads
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
}
