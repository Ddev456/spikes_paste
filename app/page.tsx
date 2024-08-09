import { Components } from "@/components/Components";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center overflow-hidden">
        <Sidebar />
        <Components />
      </main>
    </div>
  );
}
