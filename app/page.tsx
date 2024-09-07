import Link from "next/link";

import { Button } from "@/components/ui/button";
import HealthCheckButton from "./components/HealthCheckButton";

const links = [
  {
    href: "/login",
    title: "Login",
  },
  {
    href: "/register",
    title: "Register",
  },
  {
    href: "/pricing",
    title: "Pricing",
  },
  {
    href: "/john",
    title: "Username",
  },
  {
    href: "/_01jj0dj",
    title: "Redirect",
  },
];

export default async function Home() {
  return (
    <main className="min-h-[80dvh] items-center space-y-4 p-24">
      <h1>HomePage</h1>
      <nav className="grid grid-cols-4 gap-4">
        {links.map(({ href, title }) => (
          <Button key={title} asChild>
            <Link href={href}>{title}</Link>
          </Button>
        ))}
      </nav>
      <HealthCheckButton />
    </main>
  );
}
