import { Inter } from "next/font/google";
import List from "./List/List";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const DUMMY_DATA = [
  {
    id: 1,
    task: "Learn HTML and CSS",
  },
  {
    id: 2,
    task: "Learn Javascript",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-neutral-500 py-24">
        <List task={DUMMY_DATA} />
      </main>
    </>
  );
}
