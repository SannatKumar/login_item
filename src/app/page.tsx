import Image from "next/image";
import styles from "../assets/page.module.css";
import TheHeader from "../components/TheHeader.tsx"

export default function Home() {
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <div>
        <TheHeader/>
        
          <p>Raj Kumar</p>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
