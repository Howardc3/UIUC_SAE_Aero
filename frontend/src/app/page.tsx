import Image from 'next/image';
import Link from 'next/link';
import PlaneScroll from '@/components/plane_scroll';

import SubBoxes from '@/components/sub_boxes';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero / Slideshow */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-afterburner uppercase tracking-[0.3em] text-sm mb-4">University of Illinois Urbana-Champaign</p>
        <h1 className="text-6xl font-bold text-prussian-blue mb-6">SAE <span className="text-afterburner">Aero</span></h1>
        <p className="text-imperial-blue text-xl max-w-xl mb-10">
          Plane Plane Plane!!! Plane plane plane
        </p>

        {/* Slideshow placeholder */}
        <div className="absolute inset-0 -z-10 flex items-center bg-white justify-center opacity-5">
          <span className="text-prussian-blue" style={{ fontSize: '20rem' }}>✈</span>
        </div>
      </section>

      {/* Join the Team */}
      <section className="relative bg-ice-blue py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <Image src="/assets/nightowl-biplane-74556-nobg.png" alt="Plane from https://pixabay.com/photos/biplane-airplane-plane-oldtimer-74556/" width={560} height={180} className="absolute left-0 top-1/2 -translate-y-1/2 object-contain scale-x-[-1]" />
        <Image src="/assets/nightowl-biplane-74556-nobg.png" alt="Plane from https://pixabay.com/photos/biplane-airplane-plane-oldtimer-74556/" width={560} height={180} className="absolute right-0 top-1/2 -translate-y-1/2 object-contain" />
        <h2 className="text-4xl font-bold text-prussian-blue mb-4">Our Team</h2>
        <p className="text-imperial-blue text-xl max-w-lg mb-10">
          Left jab right hook Counter Counter
        </p>
        <div className="flex gap-4 mb-16">
          <Link
            href="/recruitment"
            className="px-8 py-3 bg-cornflower-ocean text-white font-semibold rounded-full hover:bg-imperial-blue transition-colors"
          >
            Join Us
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border border-imperial-blue text-imperial-blue font-semibold rounded-full hover:bg-imperial-blue hover:text-white transition-colors"
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
