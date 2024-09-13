import Image from "next/image"
import styles from "./style.module.css"
import { BankingSectionPartner } from "@/links/Links"
import { useTranslations } from "next-intl"

const Partner = () => {
  const t = useTranslations("BankingSectionPartner");
  const partner = BankingSectionPartner();
  return (
    <section className={styles.sectionPartner}>
      <div className="container">
        <div className={`${styles.sectionItems} ${styles.flex}`}>
          <div className={styles.sectionLeftContainer}>
            <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("SectionPartnerText")}</p>
            <h2 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("SectionPartnerTitle")}</h2>
            <Image className={styles.sectionImg} src="/assets/img/SectionCardImg.png" alt="Bank card image" width={483} height={272} />
          </div>
          <div className={styles.sectionRightContainer}>
            <h3 className={`${styles.sectionRightTitle} ${styles.colorDarkGrey}`}>{t("SectionPartnerSubTitle")}</h3>
            {
              partner.map(({ id, title, text }) => {
                return (
                  <div key={id} className={`${styles.sectionRightMainItems} ${styles.flex}`}>
                    <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                    <div className={styles.sectionRightTexts}>
                      <p className={styles.rightTextItems}>{title}</p>
                      <p className={styles.rightTextSubItems}>{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner