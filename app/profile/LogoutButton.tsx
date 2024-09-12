"use client";

import { useRouter } from "next/navigation";

import { deleteCookie } from "cookies-next";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const logout = () => {
    deleteCookie("username");
    deleteCookie("mail");
    deleteCookie("refreshToken");

    router.replace("/login");
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
