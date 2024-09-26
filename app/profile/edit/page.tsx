import React from "react";
import Link from "next/link";

const editList = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
];

const Edit = () => {
  return (
    <div className="space-y-4 px-16 py-8">
      <Link
        href="/profile"
        className="block w-fit border-2 border-foreground p-2 hover:bg-foreground hover:text-background"
      >
        {"<"} Back
      </Link>
      <section className="grid grid-cols-3 gap-4">
        {editList.map(({ id, title }) => (
          <Link
            key={id}
            href={`/profile/edit/${id}`}
            className="border-2 border-foreground p-2 text-center hover:bg-foreground hover:text-background"
          >
            {title}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Edit;
