import React from "react";
import Link from "next/link";

type PaymentProps = {
  params: { username: string };
};

const Payment = ({ params }: PaymentProps) => {
  const { username } = params;

  return (
    <div className="space-y-4 px-16 py-8">
      <Link
        href={`/${username}`}
        className="block w-fit border-2 border-foreground p-2 hover:bg-foreground hover:text-background"
      >
        {"<"} Back
      </Link>
      <p>Payment</p>
    </div>
  );
};

export default Payment;
