import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"

const Awards = () => {
  const t = useTranslations("AboutSectionAwards")
  return (
    <section className={styles.sectionAwards}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftItems}>
            <p className={styles.sectionText}>{t("sectionText")}</p>
            <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
          </div>
          <div className={styles.sectionRightItems}>
            <Image className={styles.awardsImgs} src="/assets/img/Awards.png" alt="Awards" width={580} height={286} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards