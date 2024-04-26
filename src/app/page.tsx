import Navbar from "@/components/Navbar";
import CertificationPage from "./certification/page";
import Dashboard from "./dashboard/page";
import SideNavbar from "@/components/SideNavbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex gap-5 min-h-screen w-full pt-24">
        <SideNavbar/>
        <Dashboard/>
      </div>
      
    </>
  );
}
