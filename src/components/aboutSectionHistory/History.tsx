import Image from "next/image"
import styles from "./style.module.css"
import { aboutSectionHistory } from "@/links/Links"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const History = () => {
  const t = useTranslations("AboutSectionHistory");
  const t2 = useTranslations("AboutSectionBenefits");
  const History = aboutSectionHistory();
  return (
    <section className={styles.sectionHistory}>
      <div className="container">
        <div className={styles.sectionItems}>
          <p className={`${styles.sectionText} ${styles.colorWhite} ${styles.textCenter}`}>{t("sectionText")}</p>
          <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>{t("sectionTitle")}</h2>
          <p className={`${styles.sectionSubText} ${styles.colorWhite}`}>{t("sectionSubText")}</p>
          <p className={`${styles.sectionSubText} ${styles.colorWhite}`}>{t("sectionSubText2")}</p>
          <div className={styles.sectionSubItems}>
            <p className={`${styles.sectionSecondText} ${styles.colorWhite} ${styles.textCenter}`}>{t2("aboutBenefitsText")}</p>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>{t2("aboutBenefitsTitle")}</h2>
            <div className={`${styles.benefitsContainer} ${styles.flex}`}>
              {
                History.map(({ id, img, title, text }) => {
                  return (
                    <div key={id} className={styles.sectionBenefitsItems}>
                      <Image className={styles.sectionIcon} src={img} alt="Team icon" width={55.85} height={60} />
                      <h2 className={`${styles.sectionBenefitsTitle} ${styles.colorWhite}`}>{title} </h2>
                      <p className={styles.sectionBenefitsText}>{text}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className={`${styles.contactItem} ${styles.flex}`}>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History