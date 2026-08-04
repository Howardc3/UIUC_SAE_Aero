import Link from 'next/link';

type SubBoxesProps = {
  title: string;
  body_text: string;
  link_text: string;
  href: string;
  bg?: string;
};

function SubBoxes({ title, body_text, link_text = "", href, bg }: SubBoxesProps) {
  return (
    <Link href={href} className={`${bg} rounded-2xl p-12 flex flex-col items-center gap-4 hover:bg-gray-200 transition-colors`}>
      <h3 className="text-afterburner text-xl font-semibold">{title}</h3>
      <p className="text-imperial-blue text-base opacity-80">{body_text}</p>
      {/* <span className="text-imperial-blue text-base">{link_text}</span> */}
    </Link>
  );
}

export default SubBoxes;
