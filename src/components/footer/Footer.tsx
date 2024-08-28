import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import { footer } from "@/links/Links"
import { Link } from "@/navigation"

const Footer = () => {
  const t = useTranslations("footer")
  const footerLinks = footer();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerItems}>
          <div className={styles.footerLeftItems}>
            <Image className={styles.footerLogo} src="/assets/icons/SiteLogo.svg" alt="site logo" width={163} height={47.13} />
            <p className={`${styles.footerMail} ${styles.footerFont}`}>contact@taxus.tech</p>
            <p className={`${styles.footerAdress} ${styles.footerFont}`}>71-75 Shelton Street, Covent Garden, London, UK, WC2H 9JQ</p>
            <Link className={styles.footerSocLink} href="/"><Image className={styles.socIcon} src="/assets/icons/InstaIcon.svg" alt="Instagram Icon" width={40} height={40} /></Link>
            <Link className={styles.footerSocLink} href="/"><Image className={styles.socIcon} src="/assets/icons/LinkedinIcon.svg" alt="Instagram Icon" width={40} height={40} /></Link>
            <Link className={styles.footerSocLink} href="/"><Image className={styles.socIcon} src="/assets/icons/FacebookIcon.svg" alt="Instagram Icon" width={40} height={40} /></Link>
            <Link className={styles.footerSocLink} href="/"><Image className={styles.socIcon} src="/assets/icons/YoutubeIcon.svg" alt="Instagram Icon" width={40} height={40} /></Link>
          </div>
          <div className={styles.footerRightItems}>
            <div className={styles.footerRightItemsTexts}>
              <h6 className={styles.footerLinks}>{t("services.Title")}</h6>
              {
                footerLinks.footerItems.Services.map(({ id, text, to }) => {
                  return (
                    <div key={id} className={styles.linksMain}>
                      <Link className={styles.footerServicesItems} href={to}>{text}</Link>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.footerRightItemsTexts}>
              <h6 className={styles.footerLinks}>{t("company.Title")}</h6>
              {
                footerLinks.footerItems.Company.map(({ id, text, to }) => {
                  return (
                    <div key={id} className={styles.linksMain}>
                      <Link className={styles.footerServicesItems} href={to}>{text}</Link>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.footerRightItemsTexts}>
              <h6 className={styles.footerLinks}>{t("legal.Title")}</h6>
              {
                footerLinks.footerItems.Legal.map(({ id, text, to }) => {
                  return (
                    <div key={id} className={styles.linksMain}>
                      <Link className={styles.footerServicesItems} href={to}>{text}</Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p className={styles.copyrightText}>© Taxus DFTS Ltd 2024. All rights reserved. Created by Destiny</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer