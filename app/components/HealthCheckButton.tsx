"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import { HealthCheckService } from "@/services";

const HealthCheckButton = () => {
  const { toast } = useToast();
  const [isChecking, setIsChecking] = useState(false);

  const buttonHandler = async () => {
    setIsChecking(true);

    const health = await HealthCheckService.health();

    toast({
      title: "Backend Health Check",
      description: health,
    });

    setIsChecking(false);
  };

  if (process.env.NODE_ENV === "development") {
    return (
      <Button onClick={buttonHandler} disabled={isChecking}>
        {isChecking ? "Checking" : "Backend Check"}
      </Button>
    );
  }
};

export default HealthCheckButton;
