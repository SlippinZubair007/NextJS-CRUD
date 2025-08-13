"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/auth/auth";
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

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (

    <div className="flex flex-col justify-center items-center pb-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Link href='/signup'>
          <Button>Sign Up</Button>
          </Link>
        </CardAction>
         </CardHeader>

    <CardContent>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      </CardContent>
      </Card>
    </div>
  );
}
