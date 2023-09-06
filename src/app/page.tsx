import styles from "./page.module.css";
import { HomeContent } from "@/components/HomeContent";
import { Footer } from "@/components/Footer";
import React from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeContent />
      <Footer />
    </div>
  );
}
