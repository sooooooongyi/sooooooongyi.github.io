import About from "@/components/About";
import Career from "@/components/Career";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-12 max-sm:max-w-[90%]">
      <Navbar />
      <Profile />
      <About />
      <Career />
      <Work />
    </div>
  );
}
