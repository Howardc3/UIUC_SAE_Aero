import ProfilePicture from '@/components/profile_picture';
import Image from 'next/image';

function RoleCard({ name, position }: { name: string; position: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <ProfilePicture />
      <div className="text-sm text-center">
        <p className="font-semibold text-prussian-blue text-lg">{name}</p>
        <p className="text-deep-navy text-lg">{position}</p>
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
        <div className="flex flex-col items-center gap-1">
          <ProfilePicture />
          <p className="font-semibold text-prussian-blue text-lg">President</p>
          <p className="flex flex-row justify-between text-lg">Kevin Yu</p>
        </div>

        {/* Vice President */}
        <div className="flex flex-col items-center gap-1">
          <ProfilePicture />
          <p className="font-semibold text-prussian-blue text-lg">Vice President</p>
          <p className="flex flex-row justify-between text-lg">Eunsol Lee</p>
        </div>

        {/* Roles 1–3 */}
        {/* Get pictures, find proper ordering (ie. alphabetical by position name) */}
        <div className="flex flex-row justify-between w-full">
          {[
            {position: 'Board Member', name: 'Name 1'},
            {position: 'Board Member', name: 'Name 2'},
            {position: 'Board Member', name: 'Name 3'},
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-1">
              <ProfilePicture />
              <p className="font-semibold text-prussian-blue text-lg">{r.position}</p>
              <p className="flex flex-row justify-between text-lg">{r.name}</p>
            </div>
          ))}
        </div>

        {/* Roles 4–5 */}
        <div className="flex flex-row justify-center gap-32 w-full">
          {[
            {position: 'Board Member', name: 'Name 4'},
            {position: 'Board Member', name: 'Name 5'}
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-1">
              <ProfilePicture />
              <p className="font-semibold text-prussian-blue text-lg">{r.position}</p>
              <p className="flex flex-row justify-between text-lg">{r.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Team Leads */}
      <div className="mt-20 w-full max-w-3xl gap-4 flex flex-col items-center">
        <div className="flex flex-row justify-center mb-12">
          <span className="font-semibold text-prussian-blue text-4xl">Team Leads</span>
        </div>
        <div className="flex flex-row gap-12 justify-between">
          {[
            { name: 'Name 1', position: 'Position 1' },
            { name: 'Name 2', position: 'Position 2' },
            { name: 'Name 3', position: 'Position 3' },
            { name: 'Name 4', position: 'Position 4' },
          ].map((m) => (
            <RoleCard key={m.name} name={m.name} position={m.position} />
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
