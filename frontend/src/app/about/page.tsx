


import Image from 'next/image';

const SAE_AERO_INFO_TXT_1 = 'We are a student organization at the University of Illinois Urbana-Champaign dedicated to plane-building. We plan on participating in the SAE Aero Design competition.'

const SAE_AERO_INFO_TXT_2 = 'Three four five. Six seven eight. Nine ten eleven. Twelve thirteen fourteen. Fifteen sixteen seventeen.'

const CONSTITUTION_TXT = 'Here\'s our constuitution, containing our structure and bylaws.'

const AERO_TEAM_TXT = ''

const STRUCTURES_TEAM_TXT = ''

const AVIONICS_TEAM_TXT = ''

const BUSINESS_TEAM_TXT = ''

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-1 flex-col items-center justify-center bg-ice-blue px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-prussian-blue">About</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy">
          {SAE_AERO_INFO_TXT_1}
        </p>
      </section>

      <section className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
        <h1 className="text-4xl font-bold text-prussian-blue text-center">Constitution</h1>
        <p className="mt-4 max-w-2xl text-lg text-deep-navy text-center">
          {CONSTITUTION_TXT}
        </p>
        <div className="mt-6 w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
            <span className="text-white text-sm font-medium">SAE Aero @ UIUC Constitution</span>
            <a
              href="https://static-prod-us-east-1.campusgroups.com/upload/urbanachampaign/2025/doc_671287_SAE_Aero_Illinois_Constitution_aa00e90b-a363-437f-ba3a-12b30aa1f238_1121112422.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-white transition-colors"
            >
              Open in new tab ↗
            </a>
          </div>
          <iframe
            src="https://static-prod-us-east-1.campusgroups.com/upload/urbanachampaign/2025/doc_671287_SAE_Aero_Illinois_Constitution_aa00e90b-a363-437f-ba3a-12b30aa1f238_1121112422.pdf"
            className="w-full"
            style={{ height: '800px' }}
            title="SAE Aero @ UIUC Constitution"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-ice-blue px-16 py-12">
        <h2 className="text-3xl font-bold text-prussian-blue mb-8">Meet our:</h2>
        <div className="flex flex-row gap-8 w-full max-w-5xl justify-center">
          <a href="/team" className="flex-1 flex flex-col group">
            <span className="self-center mb-1 px-5 py-1 rounded-t-lg bg-prussian-blue text-white font-semibold text-xl group-hover:bg-imperial-blue transition-colors">
              Team
            </span>
            <div className="relative h-80 rounded-b-lg rounded-tr-lg overflow-hidden border border-prussian-blue">
              <Image
                src="/assets/matias_luge-vought-f4u-corsair-7325996.jpg"
                alt="Our Team"
                fill
                sizes="50vw"
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
          </a>
          <a href="/exec" className="flex-1 flex flex-col items-end group">
            <span className="self-center mb-1 px-5 py-1 rounded-t-lg bg-prussian-blue text-white font-semibold text-xl group-hover:bg-imperial-blue transition-colors">
              Execs
            </span>
            <div className="relative h-80 w-full rounded-b-lg rounded-tl-lg overflow-hidden border border-prussian-blue">
              <Image
                src="/assets/moonzigg-aircraft-3241229.jpg"
                alt="Our Execs"
                fill
                sizes="50vw"
                className="object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
          </a>
        </div>
      </section>

    </main>
  );
}