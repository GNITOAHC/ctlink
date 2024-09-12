import React from "react";

type ShortenedUrlProps = {
  children: React.ReactNode;
};

const ShortenedUrlLayout = ({ children }: ShortenedUrlProps) => {
  return <main className="min-h-[85dvh]">{children}</main>;
};

export default ShortenedUrlLayout;
