"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 h-16 w-full bg-orinoco">
      <div className="flex h-full w-full items-center justify-between px-8">
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-md"
            src="/logo.png"
            alt="Lisbon Awaits"
            height={40}
            width={40}
          />
          <p className="text-2xl font-semibold">Lisbon Awaits</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com/portugalpair">
            <Image
              alt="Portugal Pair on Twitter"
              src="/social/twitter.svg"
              height={20}
              width={20}
            />
          </Link>
          <Link href="https://instagram.com/portugalpair">
            <Image
              alt="Portugal Pair on Instagram"
              src="/social/instagram.svg"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
