import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import LocalSwitcher from "../local-switcher"
import { useTranslations } from "next-intl"

const Header = () => {
  const t = useTranslations("Header")
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerItems}>
          <Image className={styles.logo} src="/assets/icons/SiteLogo.svg" alt="Site Logo" width={163} height={47.13} />
          <ul className={styles.headerLinks}>
            <li className={styles.headerLinkItems}>
              <Link className={`${styles.headerLinksItem} ${styles.fonts}`} href="/">{t("services")}</Link>
              <Link className={`${styles.headerLinksItem} ${styles.fonts}`} href="/">{t("banking")}</Link>
              <Link className={`${styles.headerLinksItem} ${styles.fonts}`} href="/">{t("about")}</Link>
              <Link className={`${styles.headerLinksItem} ${styles.fonts}`} href="/">{t("blog")}</Link>
              <Link className={`${styles.headerLinksItem} ${styles.fonts}`} href="/">{t("contact")}</Link>
            </li>
            <Link className={`${styles.logInLink} ${styles.fonts}`} href="/">{t("login")}</Link>
            <LocalSwitcher />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header