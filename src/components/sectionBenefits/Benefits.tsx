import Image from "next/image"
import styles from "./style.module.css"
import { benefitsSection } from "@/links/Links"
import { useTranslations } from "next-intl"

const Benefits = () => {
  const t = useTranslations("benefitsSection")
  const benefits = benefitsSection();

  return (
    <section className={styles.sectionBenefits}>
      <div className="container">
        <div className={styles.sectionTexts}>
          <p className={`${styles.sectionText} ${styles.colorWhite} ${styles.textCenter}`}>{t("sectionText")}</p>
          <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>{t("sectionTitle")}</h2>
        </div>
        <div className={styles.sectionItemsMain}>
          {
            benefits.map(({ id, img, title, text }) => {
              return (
                <div key={id} className={styles.sectionItems}>
                  <Image className={styles.sectionIcon} src={img} alt="Team icon" width={55.85} height={60} />
                  <h2 className={`${styles.sectionSubTitle} ${styles.colorWhite}`}>{title}</h2>
                  <p className={styles.sectionSubText}>{text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Benefits