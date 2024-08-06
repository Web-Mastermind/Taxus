import Image from "next/image"
import styles from "./styles.module.css"
import { useTranslations } from "next-intl"

const Expertise = () => {
  const t = useTranslations("expertiseSection")
  return (
    <section className={styles.expertiseSection}>
      <div className="container">
        <div className={styles.sectionItems}>
          <p className={styles.expertiseText}>{t("SectionFirstTexts.expertiseMainText")}</p>
          <h2 className={styles.expertiseTitle}>{t("SectionFirstTexts.expertiseMainTitle")}</h2>
        </div>
        <div className={styles.sectionSecondItemsContainer}>
          <div className={styles.sectionSecondItems}>
            <Image className={styles.sectionicons} src="/assets/icons/CaseIcon.svg" alt="Case Icon" width={90} height={90} />
            <h3 className={styles.sectionSubTitle}>{t("SectionFirstTexts.expertiseTitle")}</h3>
            <p className={styles.sectionSubText}>{t("SectionFirstTexts.expertiseText")}</p>
          </div>
          <div className={styles.sectionSecondItems}>
            <Image className={styles.sectionicons} src="/assets/icons/IdeaIcon.svg" alt="Idea Icon" width={90} height={90} />
            <h3 className={styles.sectionSubTitle}>{t("SectionSecondTexts.expertiseTitle")}</h3>
            <p className={styles.sectionSubText}>{t("SectionSecondTexts.expertiseText")}</p>
          </div>
          <div className={styles.sectionSecondItems}>
            <Image className={styles.sectionicons} src="/assets/icons/FinanceLogo.svg" alt="Finance Icon" width={90} height={90} />
            <h3 className={styles.sectionSubTitle}>{t("SectionThirdTexts.expertiseTitle")}</h3>
            <p className={styles.sectionSubText}>{t("SectionThirdTexts.expertiseText")}</p>
          </div>
          <div className={styles.sectionSecondItems}>
            <Image className={styles.sectionicons} src="/assets/icons/GlobalIcon.svg" alt="Finance Icon" width={90} height={90} />
            <h3 className={styles.sectionSubTitle}>{t("SectionFourTexts.expertiseTitle")}</h3>
            <p className={styles.sectionSubText}>{t("SectionFourTexts.expertiseText")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise