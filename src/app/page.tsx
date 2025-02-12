import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[70%] pt-12">
      <Navbar />
      <Profile />
    </div>
  );
}
