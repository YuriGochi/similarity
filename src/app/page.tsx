import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Paragraph from "./componentes/ui/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline bg-red-500">
      <Paragraph size="sm" />
    </h1>
  );
}
