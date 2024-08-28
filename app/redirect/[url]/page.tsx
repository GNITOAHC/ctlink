import React from "react";
import { redirect } from "next/navigation";

type Params = {
  url: string;
};

const Redirect = ({ params }: { params: Params }) => {
  const { url } = params;

  if (!url || url[0] !== "_") {
    redirect("/");
  }

  return <div>Redirect to {url}</div>;
};

export default Redirect;
