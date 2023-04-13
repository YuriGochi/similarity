"use client";

import { signIn } from "next-auth/react";
import React, { FC, useState } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";

interface SignInButonProps {}

const SignInButton: FC<SignInButonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch {
      toast({
        title: "Error signing in",
        message: "Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
