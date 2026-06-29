import LinktreeBox from '@/components/linktree_box';

export default function RecruitmentPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 gap-2 text-center">
      <h1 className="text-4xl font-bold text-prussian-blue">Recruitment</h1>
      <p className="mt-4 max-w-2xl text-lg text-deep-navy">
        Click the image below to access our Linktree!
      </p>

      <div>
        <LinktreeBox
          imageSrc="/assets/isaeaero.jpg"
          link='https://linktr.ee/isaeaero'
        />
      </div>
    </main>
  );
}
