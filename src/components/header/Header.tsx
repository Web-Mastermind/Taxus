import Image from "next/image"
import styles from "./style.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerItems}>
          <Image className={styles.logo} src="/assets/icons/SiteLogo.svg" alt="Site Logo" width={33.32} height={33.32} />
          <div className={styles.headerTitle}>
            <h1 className={styles.headerTitleItem}>TAXUS</h1>
            <p className={styles.headerTextItem}>LAW & FINANCE</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header