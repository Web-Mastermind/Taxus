import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import LocalSwitcher from "../local-switcher"
import { navLinks } from "@/links/Links"
import { useTranslations } from "next-intl"


const Header = () => {
  const links = navLinks();
  const t = useTranslations("Header")
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerItems}>
          <Link className={styles.siteLogoLink} href="/"><Image className={styles.logo} src="/assets/icons/SiteLogo.svg" alt="Site Logo" width={163} height={47.13} /></Link>
          <ul className={styles.headerLinks}>
            <li className={styles.headerLinkItems}>
              {
                links.map(({ id, to, title }) => {
                  return (
                    <Link key={id} className={`${styles.headerLinksItem} ${styles.fonts}`} href={to}>{title}</Link>
                  )
                })
              }
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