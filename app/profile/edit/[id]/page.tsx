import React from "react";
import Link from "next/link";

type EditIdProps = {
  params: { username: string; id: string };
};

const EditId = ({ params }: EditIdProps) => {
  const { id } = params;

  return (
    <section className="space-y-4 px-16 py-8">
      <Link
        href="/profile/edit"
        className="block w-fit border-2 border-foreground p-2 hover:bg-foreground hover:text-background"
      >
        {"<"} Back
      </Link>
      <p>EditId: {id}</p>
    </section>
  );
};

export default EditId;
