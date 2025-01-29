import Image from "next/image";
import Link from "next/link";

const aboutRoute ="/about";
const lotsListRoute = "/lotsList"; 
const a = "/about 2";

export default function Home() {
  return (
    <main>
      <p>helloworld</p>
      <Link href={aboutRoute}>Go to About page</Link>
      <br/>
      <Link href={lotsListRoute}>Go to LotsList</Link>
      <p>{a ?? aboutRoute}</p>
    </main>
  );
}
