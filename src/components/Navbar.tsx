"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const handleClickAbout = () => router.push("/");
  const handleClickWork = () => router.push("#work");
  const handleClickProject = () => router.push("#project");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpened(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-between border-b border-gray-950/5 bg-white px-4 text-base font-bold dark:border-white/10">
      <div className="portfolio">👩🏻‍💻 portfolio</div>
      <div className="flex cursor-pointer gap-4 max-sm:hidden">
        <div onClick={handleClickAbout}>about</div>
        <div onClick={handleClickWork}>work</div>
        <div onClick={handleClickProject}>project</div>
      </div>
      <div
        className="cursor-pointer sm:hidden"
        onClick={() => setIsOpened(!isOpened)}
      >
        <Image
          src="/images/icon-hamburger.png"
          alt="icon-hamburger"
          width={20}
          height={20}
        />
      </div>
      {isOpened && (
        <div className="fixed right-0 top-12 w-full cursor-pointer bg-white p-4 shadow-[0px_10px_10px_-10px_rgba(33,35,38,0.1)] sm:hidden">
          <div className="py-1" onClick={handleClickAbout}>
            home
          </div>
          <div className="py-1" onClick={handleClickWork}>
            work
          </div>
          <div className="py-1" onClick={handleClickProject}>
            project
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
