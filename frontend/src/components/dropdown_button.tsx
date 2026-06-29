import Link from 'next/link';

type DropdownItem = { label: string; href: string };

function DropdownButton({ label, href, items }: { label: string; href: string; items: DropdownItem[] }) {
  return (
    <div className="relative group">
      <Link href={href} className="px-4 py-2 rounded text-frosted-blue hover:bg-imperial-blue transition-colors duration-50 font-medium text-lg flex items-center gap-1">
        {label}
        <span className="text-xs">▼</span>
      </Link>
      <div className="absolute left-0 top-full hidden group-hover:block bg-deep-navy shadow-lg rounded min-w-40 z-50">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-frosted-blue hover:bg-imperial-blue text-lg transition-colors duration-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownButton;
