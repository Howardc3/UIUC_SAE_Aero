import Image from 'next/image';
import Link from 'next/link';
import PlaneScroll from '@/components/plane_scroll';

import SubBoxes from '@/components/sub_boxes';

const RULES_PDF = '/assets/pdfs/26-27_SAEAero_Rules_SUMMARIZED.pdf'

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero / Slideshow */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-afterburner uppercase tracking-[0.2em] text-4xl mb-4">University of Illinois Urbana-Champaign</p>
        <h1 className="text-6xl font-bold text-prussian-blue mb-6">SAE <span className="text-afterburner">Aero</span></h1>
        <p className="text-imperial-blue text-xl max-w-xl mb-10">
          We design planes for the SAE Aero Design competition!
        </p>

        {/* Slideshow placeholder */}
        <div className="absolute inset-0 -z-10 flex items-center bg-white justify-center opacity-5">
          <span className="text-prussian-blue" style={{ fontSize: '20rem' }}>✈</span>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-ice-blue px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-5">

          {/* Left column: description + pictures */}
          <div className="flex flex-col gap-6 lg:col-span-2">

            {/* Description */}
            <div className="flex-1 rounded-lg border border-imperial-blue bg-zinc-50 p-6">
              <h2 className="text-3xl font-bold text-prussian-blue mb-4">About SAE Aero</h2>
              <p className="text-imperial-blue text-lg">
                {/* TODO: description copy */}
              </p>
            </div>

            {/* Misc pictures */}
            <div className="flex-1 flex items-center justify-center rounded-lg border border-dashed border-imperial-blue bg-zinc-50 p-6 min-h-48">
              {/* TODO: swap for a gallery / Image components */}
              <span className="text-imperial-blue/60 text-lg">Misc pictures TBD</span>
            </div>

          </div>

          {/* Right column: competition rules PDF */}
          <div className="flex flex-col lg:col-span-3">
            <h2 className="text-3xl font-bold text-prussian-blue mb-4">Summarized Rules for 26-27</h2>
            <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-imperial-blue">
              <div className="flex items-center justify-between bg-prussian-blue px-4 py-2">
                <span className="text-frosted-blue text-sm font-medium"></span>
                <a
                  href={RULES_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-frosted-blue/70 hover:text-frosted-blue transition-colors"
                >
                  Open in new tab ↗
                </a>
              </div>
              <iframe
                src={RULES_PDF}
                className="w-full"
                style={{ height: '700px' }}
                title="SAE Aero Design 26-27 Rules"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Join the Team */}
      <section className="relative bg-ice-blue py-24 px-6 overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row">

          {/* Left half: content sits against the centre line */}
          <div className="flex w-full justify-center lg:flex-1 lg:justify-end">
            <div className="border border-imperial-blue rounded-lg p-8 text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold text-prussian-blue mb-4">Our Team</h2>
              <p className="text-imperial-blue text-xl max-w-lg mb-10">
                Left jab right hook Counter Counter
              </p>
              <div className="flex gap-4 mb-8">
                <Link
                  href="/recruitment"
                  className="px-8 py-3 min-w-48 bg-cornflower-ocean text-white font-semibold rounded-full hover:bg-imperial-blue transition-colors"
                >
                  Join Us
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border min-w-48 border-imperial-blue text-imperial-blue font-semibold rounded-full hover:bg-imperial-blue hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <SubBoxes
                  title="Executives"
                  body_text="Meet the current SAE Aero leads"
                  link_text="To Execs →"
                  href="/exec"
                  bg="bg-zinc-50"
                />
                <SubBoxes
                  title="Involvement"
                  body_text="Interested in getting involved or supporting us?"
                  link_text=" Get Involved →"
                  href="/involvement"
                  bg="bg-zinc-50"
                />
              </div>
            </div>
          </div>

          {/* Right half: image sits against the centre line */}
          <div className="flex w-full justify-center lg:flex-1 lg:justify-start">
            <Image
              src="/assets/nightowl-biplane-74556-nobg.png"
              alt="Plane from https://pixabay.com/photos/biplane-airplane-plane-oldtimer-74556/"
              width={560}
              height={180}
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>

        </div>

        
        <a
          href="https://pixabay.com/photos/biplane-airplane-plane-oldtimer-74556/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-imperial-blue/50 hover:text-imperial-blue transition-colors"
        >
          Image from nightowl
        </a>
      </section>

      {/* Plane scroll section */}
      <div className="h-[200vh]">
        <PlaneScroll />
      </div>

    </div>
  );
}
