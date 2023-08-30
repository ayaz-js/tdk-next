import styles from './page.module.css'
import { HomeContent }  from "@/components/HomeContent"

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeContent />
    </div>
  )
}
