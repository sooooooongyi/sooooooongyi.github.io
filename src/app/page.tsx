"use client";

import About from "@/components/About";
import Career from "@/components/Career";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Work from "@/components/Work";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        document
          .getElementById(window.location.hash.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-14 max-sm:max-w-[90%]">
      <Profile />
      <About />
      <Career />
      <Work />
      <Project />
    </div>
  );
}
