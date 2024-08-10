import Image from "next/image"
import styles from "./style.module.css"
import sectionImage from "../../../public/assets/img/BankingImage.png"
import { bankingSection } from "@/links/Links"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Banking = () => {
  const t = useTranslations("bankingSection")
  const banking = bankingSection();
  return (
    <article className={styles.sectionBanking}>
      <div className={styles.sectionItems}>
        <Image className={styles.bankingImage} src={sectionImage} alt="phone and credit card image" />
        <div className="container">
          <div className={styles.bankingTexts}>
            <p className={styles.bankingMainText}>{t("sectionText")}</p>
            <h3 className={styles.bankingMainTitle}>{t("sectionTitle")}</h3>
            {
              banking.map(({ id, icon, text }) => {
                return (
                  <div key={id} className={styles.bankingTextContainer}>
                    <span className={styles.textDecor}>{icon}</span>
                    <p className={styles.bankingSubTexts}>{text}</p>
                  </div>
                )
              })
            }
            <Link className={styles.bankingLinkItem} href="/">{t("bankingLink")} &rarr;</Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Banking