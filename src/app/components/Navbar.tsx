import { getServerSession } from "next-auth";
import Link from "next/link";
import React, { FC } from "react";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import SignInButton from "./ui/SignInButton";
import SignOutButton from "./ui/SignOutButton";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-width-7x1 mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Text Somolarity 1.0
        </Link>
      </div>

      <div className="md:hidden">{/* <ThemeToggle /> */}</div>

      <div className="hidden md:flex gap-4">
        {/* <ThemeToggle /> */}
        <Link
          href="/documentation"
          className={buttonVariants({ variant: "ghost" })}
        >
          Documentation
        </Link>

        {session ? (
          <>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: "ghost" })}
            >
              Dashboard
            </Link>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
