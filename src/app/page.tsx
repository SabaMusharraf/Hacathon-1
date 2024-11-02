import Image from "next/image";
import Header from "./components/header"
import Body from "./body/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
}
