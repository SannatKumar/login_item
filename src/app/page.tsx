"use client";

import Image from "next/image";
import styles from "../assets/page.module.css";
import TheHeader from "../components/TheHeader.tsx";
import { useTranslation } from "react-i18next"; // Import the hook for translations

export default function Home() {
  const { t, i18n } = useTranslation(); // Destructure `t` for translations and `i18n` for language switching

  const changeLanguage = (lng: string) => {
    console.log(lng); // Change the language dynamically
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <TheHeader />
          <p>{t('welcome')}</p>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("np")}>नेपाली</button>
            <button onClick={() => changeLanguage("fi")}>Suomi</button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
