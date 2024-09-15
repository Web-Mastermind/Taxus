import Image from "next/image"
import styles from "./style.module.css"
import { CompanySectionIncludeEnd } from "@/links/Links"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const IncludeEnd = () => {
  const t = useTranslations("CompanySectionIncludeEnd");
  const INCLUDEEND = CompanySectionIncludeEnd();
  return (
    <section className={styles.sectionIncludeEnd}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTextItems}>
            <p className={`${styles.sectionText} ${styles.colorWhite}`}>{t("SectionIncludeEndText")}</p>
            <h6 className={styles.sectionTitle}>{t("SectionIncludeEndTitle")}</h6>
          </div>
          <div className={`${styles.sectionEndItemsContainer} ${styles.flex}`}>
            {
              INCLUDEEND.map(({ id, img, title, text }) => {
                return (
                  <div key={id} className={styles.sectionEndItems}>
                    <Image className={styles.sectionIcon} src={img} alt="Team icon" width={60} height={60} />
                    <h2 className={`${styles.sectionSubTitle} ${styles.colorWhite}`}>{title}</h2>
                    <p className={styles.sectionSubText}>{text}</p>
                  </div>
                )
              })
            }

          </div>
          <div className={`${styles.buttonContainer} ${styles.flex}`}>
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncludeEnd