import ToolbarButton from './toolbar_button';
import DropdownButton from './dropdown_button';

function Toolbar() {
  return (
    <nav className="w-full bg-prussian-blue px-8 py-5 flex items-center shadow-md">
      <div className="flex-1">
        <a href="/">
          <span className="text-frosted-blue font-bold text-2xl tracking-wide">SAE Aero @ UIUC</span>
        </a>
      </div>
      <div className="flex items-center gap-1">
        <ToolbarButton href="/">Home</ToolbarButton>
        <ToolbarButton href="/events">Events</ToolbarButton>
        <DropdownButton
          label="Projects"
          href="/projects"
          items={[
            { label: 'Current Projects', href: '/projects' },
            // { label: 'Past Projects', href: '/projects/archive' },
          ]}
        />
        <DropdownButton
          label="About"
          href="/about"
          items={[
            { label: 'Our Team', href: '/team' },
            { label: 'Executives', href: '/exec' },
          ]}
        />
        <DropdownButton
          label="Involvement"
          href="/involvement"
          items={[
            { label: 'Recruitment', href: '/recruitment' },
            { label: 'Contact Us', href: '/contact' },
          ]}
        />
      </div>
      {/* Empty div for spacing */}
      <div className="flex-1" />
    </nav>
  );
}

export default Toolbar;
