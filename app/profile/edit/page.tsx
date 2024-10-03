import React from "react";
import Link from "next/link";

import { ShortenUrlForm } from "./_components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const urlList = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
  { id: 4, title: 4 },
  { id: 5, title: 5 },
  { id: 6, title: 6 },
];

const Edit = () => {
  return (
    <div className="space-y-4 px-4 py-8 md:px-16">
      <Link
        href="/profile"
        className="block w-fit border-2 border-foreground p-2 hover:bg-foreground hover:text-background"
      >
        {"<"} Back
      </Link>

      <Card className="mx-auto max-w-sm sm:max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Shorten URL</CardTitle>
          <CardDescription>Enter your URL below to shorten it</CardDescription>
        </CardHeader>
        <CardContent>
          <ShortenUrlForm />
        </CardContent>
      </Card>

      <section className="grid grid-cols-3 gap-4">
        {urlList.map(({ id, title }) => (
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
