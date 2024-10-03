"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const logout = () => {
    router.replace("/login");
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
