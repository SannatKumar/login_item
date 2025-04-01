"use client";

import Image from "next/image";
import styles from "../assets/page.module.css";
import TheHeader from "../components/TheHeader.tsx";
// import { useTranslation } from "react-i18next";
// import i18n from "i18next";

export default function Home() {
  // const {t} = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log("Language", lng);
  };

  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <div>
        <TheHeader/>
        
          {/* <p>{t("rajkumar")}</p> */}
          <div className={styles.languageButtons}>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("np")}>नेपाली</button>
            <button onClick={() => changeLanguage("fi")}>Suomi</button>
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
