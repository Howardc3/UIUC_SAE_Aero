

import Link from 'next/link';

function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-zinc-50 from-0% to-ice-blue to-60% px-16 py-12">
      {/* Footer content - links */}
      <div className="flex flex-row justify-between max-w-4xl mx-auto">

        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-prussian-blue mb-1">Projects</p>
          <Link href="/projects" className="text-deep-navy hover:text-imperial-blue transition-colors">Current Projects</Link>
          <Link href="/events" className="text-deep-navy hover:text-imperial-blue transition-colors">Events</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-prussian-blue mb-1">About</p>
          <Link href="/about" className="text-deep-navy hover:text-imperial-blue transition-colors">About</Link>
          <Link href="/team" className="text-deep-navy hover:text-imperial-blue transition-colors">Our Team</Link>
          <Link href="/exec" className="text-deep-navy hover:text-imperial-blue transition-colors">Executives</Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-prussian-blue mb-1">Involvement</p>
          <Link href="/recruitment" className="text-deep-navy hover:text-imperial-blue transition-colors">Recruitment</Link>
          <Link href="/involvement" className="text-deep-navy hover:text-imperial-blue transition-colors">Sponsor Us</Link>
          <Link href="/contact" className="text-deep-navy hover:text-imperial-blue transition-colors">Contact</Link>
        </div>
      </div>
      <p className="text-center text-deep-navy/50 text-sm mt-10">© 2026 SAE Aero @ UIUC</p>
    </div>
  );
}

export default Footer;