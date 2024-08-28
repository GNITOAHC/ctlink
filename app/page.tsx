import Link from "next/link";

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

export default function Home() {
  return (
    <main className="min-h-[80dvh] items-center space-y-4 p-24">
      <h1>HomePage</h1>
      <nav className="grid grid-cols-4 gap-4">
        {links.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            className="block border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
          >
            {title}
          </Link>
        ))}
      </nav>
    </main>
  );
}
