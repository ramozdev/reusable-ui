import Swap from "@/components/swap";
import Nav from "@/components/nav";

export default function Page() {
  return (
    <>
      <Nav />
      <div className="mx-auto mb-10 mt-14 grid w-full justify-center">
        <Swap />
      </div>
    </>
  );
}
