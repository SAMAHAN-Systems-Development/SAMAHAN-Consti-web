import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Voteform from "@/components/Voteform/Voteform";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.outer}>
        <Voteform />
      </div>
      <Footer />
    </main>
  );
}
