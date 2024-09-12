import { aboutSectionIndustries } from "@/links/Links"
import ContactUs from "../mainbutton/ContactUs"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"

const Industries = () => {
  const t = useTranslations("aboutSectionIndustries")
  const industries = aboutSectionIndustries();
  return (
    <section className={styles.sectionIndustries}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftItems}>
            <p className={`${styles.sectionLeftText} ${styles.colorDarkGrey}`}>{t("IndustriesText")}</p>
            <h3 className={styles.sectionLeftTitle}>{t("IndustriesTitle")}</h3>
            <p className={`${styles.sectionLeftSubText} ${styles.colorDarkGrey} ${styles.fonAll}`}>{t("IndustriesSubText")}</p>
            <ContactUs />
          </div>
          <div className={styles.sectionRightItemsContainer}>
            {
              industries.map(({ id, title, text }) => {
                return (
                  <div key={id} className={styles.sectionRightItems}>
                    <h4 className={styles.sectionRightTitle}>{title}</h4>
                    <p className={`${styles.sectionRightText} ${styles.colorDarkGrey} ${styles.fonAll}`}>{text}</p>
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

export default Industries