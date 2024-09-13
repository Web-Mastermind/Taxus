import Image from "next/image"
import styles from "./style.module.css"
import sectionImage from "../../../public/assets/img/BankingImage.png"
import { BankingSection } from "@/links/Links"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Banking = () => {
  const t = useTranslations("BankingSection")
  const banking = BankingSection();
  return (
    <article className={styles.sectionBanking}>
      <div className={`${styles.sectionItems} ${styles.flex}`}>
        <Image className={styles.bankingImage} src={sectionImage} alt="phone and credit card image" />
        <div className="container">
          <div className={styles.bankingTexts}>
            <p className={`${styles.bankingMainText} ${styles.colorDarkGrey}`}>{t("sectionText")}</p>
            <h3 className={`${styles.bankingMainTitle} ${styles.colorPrimary}`}>{t("sectionTitle")}</h3>
            {
              banking.map(({ id, icon, text }) => {
                return (
                  <div key={id} className={`${styles.bankingTextContainer} ${styles.flex}`}>
                    <span className={`${styles.textDecor} ${styles.colorPrimary}`}>{icon}</span>
                    <p className={`${styles.bankingSubTexts} ${styles.colorDarkGrey}`}>{text}</p>
                  </div>
                )
              })
            }
            <Link className={`${styles.bankingLinkItem} ${styles.colorDarkGrey}`} href="/">{t("bankingLink")} &rarr;</Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Banking