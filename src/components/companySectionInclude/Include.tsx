import { CompanySectionInclude } from "@/links/Links"
import styles from "./style.module.css"
import IncludeEnd from "../companySectionIncludeEnd/IncludeEnd"
import { useTranslations } from "next-intl";

const Include = () => {
  const t = useTranslations("CompanySectionInclude");
  const INCLUDE = CompanySectionInclude();
  return (
    <section className={styles.sectionInclude}>
      <div className="container">
        <div className={`${styles.sectionItems} ${styles.flex}`}>
          <div className={styles.sectionLeftItems}>
            <p className={`${styles.sectionText} ${styles.colorWhite}`}>{t("IncludeSectionText")}</p>
            <h5 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("IncludeSectionTitle")}</h5>
          </div>
          <div className={styles.sectionRightItemsContainer}>
            {
              INCLUDE.map(({ id, text }) => {
                return (
                  <div key={id} className={`${styles.sectionRightItemsText} ${styles.flex}`}>
                    <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                    <p className={`${styles.textItem} ${styles.colorWhite}`}>{text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <IncludeEnd />
      </div>
    </section>
  )
}

export default Include