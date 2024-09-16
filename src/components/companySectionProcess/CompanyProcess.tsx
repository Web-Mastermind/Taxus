import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import { CompanySectionProcess } from "@/links/Links"
import ReviewComponent from "../reviewComponent/ReviewComponent"

const CompanyProcess = () => {
  const t = useTranslations("CompanySectionProcess")
  const t2 = useTranslations("ReviewSection")
  const COMPANYPROCESS = CompanySectionProcess();
  return (
    <section className={styles.sectionProcess}>
      <div className="container">
        <div className={`${styles.sectionItems} ${styles.flex}`}>
          <div className={styles.sectionLeftContainer}>
            <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("sectionText")}</p>
            <h3 className={styles.sectionTitle}>{t("sectionTitle")}</h3>
            <Image className={styles.sectionImage} src="/assets/img/CompanyProcessImg.png" alt="professional handshake business image" width={480} height={320} />
          </div>
          <div className={styles.sectionRightContainer}>
            {
              COMPANYPROCESS.map(({ id, count, title, text }) => {
                return (
                  <div key={id} className={`${styles.rightContainerItems} ${styles.flex}`}>
                    <p className={`${styles.sectionSpan} ${styles.flex} ${styles.fontRegular}`}>{count}</p>
                    <div className={styles.rightContainerTexts}>
                      <h5 className={`${styles.rightContainerItemTitle} ${styles.colorDarkGrey}`}>{title}</h5>
                      <p className={`${styles.rightContainerItemText} ${styles.colorDarkGrey} ${styles.fontRegular}`}>{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.previewComponent}>
          <ReviewComponent title={t2("sectionTitle2")} text={t2("sectionText2")} />
        </div>
      </div>
    </section>
  )
}

export default CompanyProcess