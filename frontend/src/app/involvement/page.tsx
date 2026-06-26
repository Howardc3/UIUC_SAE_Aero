import Image from 'next/image';
import Link from 'next/link';

export default function InvolvementPage() {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50">

      <div className="flex flex-col items-center py-12 text-center">
        <h1 className="text-4xl font-bold text-prussian-blue">Get Involved</h1>
      </div>

      <section className="w-full flex flex-row gap-8 px-16 py-12 items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-prussian-blue">Student? Join!</h2>
          <p className="text-deep-navy">
            We welcome all UIUC students regardless of major or experience. Come build planes with us.
          </p>
          <Link
            href="/recruitment"
            className="self-start mt-2 px-6 py-3 rounded-md bg-prussian-blue text-white font-semibold hover:bg-deep-navy transition-colors"
          >
            Recruitment Page
          </Link>
        </div>
        <div className="w-1/2 shrink-0 relative rounded-lg overflow-hidden">
          <Image
            src="/assets/matias_luge-vought-f4u-corsair-7325996.jpg"
            alt="SAE Aero group picture"
            width={0}
            height={0}
            sizes="50vw"
            loading="eager"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="w-full flex flex-row gap-8 px-16 py-12 items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-prussian-blue">Company? Sponsor Us!</h2>
          <p className="text-deep-navy">
            Support the next generation of aerospace engineers. Your sponsorship goes directly toward building and competing.
          </p>
          <a
            href="/sponserInfo"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-6 py-3 rounded-md bg-prussian-blue text-white font-semibold hover:bg-deep-navy transition-colors"
          >
            Sponsorship Info
          </a>
          <a
            href="mailto:saearouiuc@gmail.com"
            className="self-start px-6 py-3 rounded-md border border-prussian-blue text-prussian-blue font-semibold hover:bg-ice-blue transition-colors"
          >
            Contact: Email Us
          </a>
        </div>
        <div className="w-1/2 shrink-0 flex flex-col rounded-lg border border-gray-200 bg-white p-8">
          <h3 className="text-xl font-bold text-prussian-blue border-b border-gray-200 pb-4 mb-6">
            Big Thanks To:
          </h3>
          <Image
            src="/assets/publicdomainpictures-bank-15616_1920.jpg"
            alt="Sponsor logos"
            width={0}
            height={0}
            sizes="50vw"
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-16 py-12 gap-4 text-center">
        <h2 className="text-2xl font-bold text-prussian-blue">Just looking to make a contribution?</h2>
        <a
          href="/goFundMe"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-md bg-afterburner text-white font-semibold hover:opacity-90 transition-opacity"
        >
          GoFundMe
        </a>
      </section>

    </main>
  );
}
