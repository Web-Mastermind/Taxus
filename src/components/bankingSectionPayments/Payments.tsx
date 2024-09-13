import { bankingSectionComponentPayments } from "@/links/Links"
import styles from "./style.module.css"
import ReviewComponent from "../reviewComponent/ReviewComponent"
import { useTranslations } from "next-intl"

const Payments = () => {
  const t = useTranslations("BankingSectionPayments");
  const payments = bankingSectionComponentPayments();
  return (
    <section className={styles.sectionPayments}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={`${styles.sectionTopTexts} ${styles.flex}`}>
            <div className={styles.sectionTextItems}>
              <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("aboutPaymentsText")}</p>
              <h2 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("aboutPaymentsTitle")}</h2>
            </div>
            <div className={styles.sectionTopRightTextsContainer}>
              <h2 className={`${styles.sectionRightTitle} ${styles.colorDarkGrey} ${styles.marginBottom}`}>{t("aboutPaymentsSubTitle")}</h2>
              {
                payments.map(({ id, title, text }) => {
                  return (
                    <div key={id} className={`${styles.sectionTopRightTextsItems} ${styles.flex}`}>
                      <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                      <div className={styles.sectionRightTexts}>
                        <p className={styles.rightTextItems}>{title}</p>
                        <p className={`${styles.rightTextSubItems} ${styles.marginBottom}`}>{text}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.previewComponent}>
            <ReviewComponent title={t("aboutPaymentsSubText")} text="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payments