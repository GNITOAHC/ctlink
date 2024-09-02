"use client";

import React from "react";
import Link from "next/link";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Checkout from "./Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
);

type PaymentProps = {
  params: { username: string };
};

const Payment = ({ params }: PaymentProps) => {
  const amount = 10;
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
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount * 100, // convert to cent
          currency: "usd",
        }}
      >
        <Checkout amount={amount} username={username} />
      </Elements>
    </div>
  );
};

export default Payment;
