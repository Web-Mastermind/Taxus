import Image from "next/image"
import styles from "./style.module.css"
import { bankingSectionPartner } from "@/links/Links"
import { useTranslations } from "next-intl"

const Partner = () => {
  const t = useTranslations("bankingSectionPartner");
  const partner = bankingSectionPartner();
  return (
    <section className={styles.sectionPartner}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftContainer}>
            <p className={styles.sectionText}>{t("SectionPartnerText")}</p>
            <h2 className={styles.sectionTitle}>{t("SectionPartnerTitle")}</h2>
            <Image className={styles.sectionImg} src="/assets/img/SectionCardImg.png" alt="Bank card image" width={483} height={272} />
          </div>
          <div className={styles.sectionRightContainer}>
            <h3 className={styles.sectionRightTitle}>{t("SectionPartnerSubTitle")}</h3>
            {
              partner.map(({ id, title, text }) => {
                return (
                  <div key={id} className={styles.sectionRightMainItems}>
                    <span className={styles.diamondIcon}>&#9670;</span>
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