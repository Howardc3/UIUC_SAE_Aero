import Link from 'next/link';

function ToolbarButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded text-frosted-blue hover:bg-imperial-blue transition-colors duration-200 font-medium text-lg"
    >
      {children}
    </Link>
  );
}

export default ToolbarButton;
