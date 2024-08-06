import Image from "next/image"
import styles from "./styles.module.css"
import { useTranslations } from "next-intl"
import { expertise } from "@/links/Links"

const Expertise = () => {
  const inc = expertise();
  const t = useTranslations("expertiseSection")
  return (
    <section className={styles.expertiseSection}>
      <div className="container">
        <div className={styles.sectionItems}>
          <p className={styles.expertiseText}>{t("SectionFirstTexts.expertiseMainText")}</p>
          <h2 className={styles.expertiseTitle}>{t("SectionFirstTexts.expertiseMainTitle")}</h2>
        </div>
        <div className={styles.sectionSecondItemsContainer}>
          {
            inc.map(({ id, image, alt, title, text }) => {
              return (
                <div key={id} className={styles.sectionSecondItems}>
                  <Image className={styles.sectionicons} src={image} alt={alt} width={90} height={90} />
                  <h3 className={styles.sectionSubTitle}>{title}</h3>
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

export default Expertise