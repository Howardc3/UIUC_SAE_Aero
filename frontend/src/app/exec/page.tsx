import ProfilePicture from '@/components/profile_picture';
import Image from 'next/image';

const PICS = '/assets/profile_pics'

function RoleCard({ name, position, details, image }: { name: string; position: string; details: string; image?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 w-36">
      <ProfilePicture src={image} alt={name} />
      <div className="text-sm text-center w-full">
        <p className="font-semibold text-prussian-blue text-lg">{name}</p>
        <p className="text-deep-navy text-lg leading-tight">{position}</p>
        <p className="text-deep-navy/60 text-sm">{details}</p>
      </div>
    </div>
  );
}

export default function ExecPage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <div className="relative h-120 w-screen -mx-6 -my-12 mb-10 overflow-hidden">
        <Image
          src="/assets/matias_luge-vought-f4u-corsair-7325996.jpg"
          alt="Logo"
          fill
          sizes="100vw"
          className="object-cover rounded-lg" />
      </div>

      {/* Org chart */}
      <div className="flex flex-col items-center gap-8 -mb-4 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-prussian-blue align-center ">2026 Executive Board</h1>

        {/* President */}
        <RoleCard name="Kevin Yu" position="President" details="Mech. Engineering '28" image={`${PICS}/Kevin_Yu.png`} />

        {/* Under-Pres Roles */}
        <div className="flex flex-row justify-center gap-32 w-full">
          {[
            { name: 'Anjana Yaramaka', position: 'Chief Engineer', details: "Aero. '28", image: `${PICS}/Anjana_Yaramaka.jpg` },
            { name: 'Lance Bitoy',     position: 'Business Lead',  details: "Econ. '28", image: `${PICS}/Lance_Bitoy.jpg` },
          ].map((r) => (
            <RoleCard key={r.name} name={r.name} position={r.position} details={r.details} image={r.image} />
          ))}
        </div>

        {/* Leads row 2 */}
        <div className="flex flex-row gap-16">
          {[
            { name: 'Jay Oh',    position: 'Structures Lead',             details: "Aero. '27", image: `${PICS}/Jay_Oh.jpg` },
            { name: 'Adler Xu', position: 'Aerodynamics Lead',                   details: "Aero. '27", image: `${PICS}/Adler_Xu.jpg` },
            { name: 'Ethan Chu', position: 'Avionics & Propulsions Lead', details: "Aero. '29", image: `${PICS}/Ethan_Chu.png` },
          ].map((r) => (
            <RoleCard key={r.name} name={r.name} position={r.position} details={r.details} image={r.image} />
          ))}
        </div>

      </div>

      {/* Team Project Leads */}
      <div className="mt-20 w-full max-w-3xl gap-4 flex flex-col items-center">
        <div className="flex flex-row justify-center mb-12">
          <span className="font-semibold text-prussian-blue text-4xl">Project Leads</span>
        </div>
        <div className="flex flex-row gap-12 justify-between">
          {[
            { name: 'Raghav Agarwal',  position: 'Structures Project Lead', details: "Aero. '28", image: `${PICS}/Raghav_Agarwal.jpg` },
            { name: 'Kayla Robertson', position: 'Structures Project Lead',  details: "Aero. '27", image: `${PICS}/Kayla_Robertson.jpg` },
            { name: 'Aaqil Riaz',      position: 'Aerodynamics Project Lead',        details: "Aero. '29", image: `${PICS}/Aaqil_Riaz.png` },
          ].map((m) => (
            <RoleCard key={m.name} name={m.name} position={m.position} details={m.details} image={m.image} />
          ))}
        </div>
      </div>

      <div className="relative h-120 w-screen -mb-12 mt-10 overflow-hidden">
        <Image
          src="/assets/matias_luge-vought-f4u-corsair-7325996.jpg"
          alt="Logo"
          fill
          sizes="100vw"
          className="object-cover rounded-lg" />
      </div>

    </main>
  );
}
