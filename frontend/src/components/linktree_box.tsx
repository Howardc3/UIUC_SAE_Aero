'use client';

import Image from 'next/image';

function LinktreeBox({link, imageSrc } : {link: string; imageSrc: string }) {
    return (
        <a href={link} target="_blank" className="group">
            <Image
                src={imageSrc}
                alt="SAE Aero LinkTree Image with Link"
                width={0}
                height={0}
                sizes="50vw"
                loading="eager"
                className="w-full h-auto rounded-lg group-hover:opacity-98 transition-opacity"
            />
        </a>
        
    );
}

export default LinktreeBox;