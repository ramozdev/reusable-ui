import Swap from "@/components/swap";
import Nav from "@/components/nav";

export default function Page() {
  return (
    <div>
      <Nav />
      <div className="mx-auto grid h-screen w-full items-center justify-center">
        <Swap />
      </div>
    </div>
  );
}
