import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import { ProcessSection } from "@/links/Links"

const Process = () => {
  const t = useTranslations("ProcessSection")
  const Process = ProcessSection();
  return (
    <section className={styles.sectionProcess}>
      <div className="container">
        <div className={`${styles.sectionItems} ${styles.flex}`}>
          <div className={styles.sectionLeftContainer}>
            <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("sectionText")}</p>
            <h3 className={styles.sectionTitle}>{t("sectionTitle")}</h3>
            <Image className={styles.sectionImage} src="/assets/img/ProcessSectionImg.png" alt="professional handshake business image" width={480} height={320} />
          </div>
          <div className={styles.sectionRightContainer}>
            {
              Process.map(({ id, count, title, text }) => {
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
      </div>
    </section>
  )
}

export default Process