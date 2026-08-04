'use client';

import { useState } from 'react';

function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  }

  return (
    <button
      onClick={handleCopy}
      className="relative inline font-semibold italic text-cornflower-ocean hover:underline cursor-copy"
    >
      {text}
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-prussian-blue text-white px-2 py-1 rounded whitespace-nowrap">
          Copied!
        </span>
      )}
    </button>
  );
}

export default function ContactPage() {
  const contactEmail = "isaeaero@gmail.com";
  const contactPhone = "Placeholder Phone Number";
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-prussian-blue">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-lg text-deep-navy">
        Feel free to reach out for any questions! You can contact us at <CopyText text={contactEmail} /> or <CopyText text={contactPhone} />.
      </p>
    </main>
  );
}
