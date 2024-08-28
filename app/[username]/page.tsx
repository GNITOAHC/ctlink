import Link from "next/link";

type UsernameProps = {
  params: { username: string };
};

const Username = ({ params }: UsernameProps) => {
  const { username } = params;

  return (
    <section className="grid grid-cols-4 gap-4 px-20 py-8">
      <Link
        href={`/${username}/edit`}
        className="border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
      >
        Edit
      </Link>
      <Link
        href={`/${username}/payment`}
        className="border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
      >
        Payment
      </Link>
    </section>
  );
};

export default Username;
