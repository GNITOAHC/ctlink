import React from "react";
import { redirect } from "next/navigation";

type UsernameLayoutProps = {
  children: React.ReactNode;
  params: { username: string };
};

const UsernameLayout = ({ children, params }: UsernameLayoutProps) => {
  const { username } = params;

  if (username[0] === "_") {
    redirect(`/redirect/${username}`);
  }

  return (
    <main className="min-h-[85dvh]">
      Username: {params.username}
      {children}
    </main>
  );
};

export default UsernameLayout;
