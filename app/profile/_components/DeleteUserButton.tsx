"use client";

import { useRouter } from "next/navigation";

import { AuthService } from "@/services";

import { Button } from "@/components/ui/button";

const DeleteUserButton = () => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = (await AuthService.delete({ mail: "" })) as Response;
    console.log(res);
    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete Account
    </Button>
  );
};

export default DeleteUserButton;
