"use client"
import Image from "next/image"
import styles from "./style.module.css"
import LocalSwitcher from "../local-switcher"
import { navLinks } from "@/links/Links"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"


const Header = ({ locale }: { locale: string }) => {
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
            <LocalSwitcher locale={locale} />
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header