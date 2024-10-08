import React from "react";
import Link from "next/link";
import { ThemeIcon } from "./theme/icon";

export default function Header() {
  return (
    <header className="m-0 mb-4 flex w-full items-center justify-between gap-x-3 px-0 py-1 md:justify-start">
      <Link href="/">Home</Link>
      <div className="grid size-4 items-center">
        <ThemeIcon className="size-4" />
      </div>
    </header>
  );
}
