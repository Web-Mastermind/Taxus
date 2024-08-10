import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import { processSection } from "@/links/Links"

const Process = () => {
  const t = useTranslations("processSection")
  const Process = processSection();
  return (
    <section className={styles.sectionProcess}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftContainer}>
            <p className={styles.sectionText}>{t("sectionText")}</p>
            <h3 className={styles.sectionTitle}>{t("sectionTitle")}</h3>
            <Image className={styles.sectionImage} src="/assets/img/ProcessSectionImg.png" alt="professional handshake business image" width={480} height={320} />
          </div>
          <div className={styles.sectionRightContainer}>
            {
              Process.map(({ id, count, title, text }) => {
                return (
                  <div key={id} className={styles.rightContainerItems}>
                    <p className={styles.sectionSpan}>{count}</p>
                    <div className={styles.rightContainerTexts}>
                      <h5 className={styles.rightContainerItemTitle}>{title}</h5>
                      <p className={styles.rightContainerItemText}>{text}</p>
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