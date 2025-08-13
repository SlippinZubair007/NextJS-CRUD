"use client";
import { useRouter } from "next/navigation";
import { isLoggedIn, logoutUser } from "@/auth/auth";
import { useEffect } from "react";
import Para from "@/common/Para"
import Heading from "@/common/Heading"



export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white px-6 text-center">
      <Heading >
        Welcome to Your Dashboard 🚀
      </Heading>

      <Para>
        This is your personal space in the app. From here, you can explore all
        the amazing features we’ve crafted for you. Our futuristic interface is
        built to inspire productivity, creativity, and focus. Sit back, relax,
        and enjoy the journey. 🌌
      </Para>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}
