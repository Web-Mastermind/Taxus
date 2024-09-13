import { bankingSectionPrivate } from "@/links/Links"
import styles from "./style.module.css"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const Private = () => {
  const t = useTranslations("BankingSectionPrivate");
  const privat = bankingSectionPrivate();
  return (
    <section className={styles.sectionPrivate}>
      <div className="container">
        <div className={`${styles.sectionItems} ${styles.flex}`}>
          <div className={styles.sectionLeftContainer}>
            <p className={`${styles.sectionLeftText} ${styles.colorDarkGrey}`}>{t("aboutPrivateText")}</p>
            <h2 className={`${styles.sectionLeftTitle} ${styles.colorPrimary}`}>{t("aboutPrivateTitle")}</h2>
            <p className={styles.sectionLeftSubTitles}>{t("aboutPrivateSubTitle")}</p>
          </div>
          <div className={styles.sectionRightContainer}>
            <h3 className={`${styles.sectionRightTitle} ${styles.colorDarkGrey}`}>{t("aboutPrivateSubText")}</h3>
            {
              privat.map(({ id, title, text }) => {
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
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Private