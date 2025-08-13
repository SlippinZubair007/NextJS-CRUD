"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveUser } from "@/auth/auth";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    saveUser(email, password);
    alert("Signup successful! Please log in.");
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center pb-50">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an account</CardDescription>
                <CardAction>
              <Link href='/login'>
              <Button>Log In</Button>
              </Link> 
        </CardAction>
        </CardHeader>
        <CardContent>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
      </Card>
    </div>
  );
}
