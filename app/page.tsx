import { Components } from "@/components/Components";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="h-full flex items-center">
        <Sidebar />
        <Components />
      </main>
    </div>
  );
}
