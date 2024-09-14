import Image from "next/image"
import styles from "./style.module.css"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const Maintenance = () => {
  const t = useTranslations("CompanySectionMaintenance");
  return (
    <section className={styles.sectionMaintenance}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftItems}>
            <p className={styles.leftItemsText}>{t("text1")}</p>
            <h4 className={styles.leftItemsTitile}>{t("title1")}</h4>
          </div>
          <div className={styles.sectionRightItems}>
            <Image className={styles.sectionImage} src="/assets/img/MaintenanceImg.png" alt="Business People Image" width={483} height={272} />
            <p className={styles.RightItemsText}>{t("text2")}</p>
            <p className={styles.RightItemsSubText}>{t("text3")}</p>
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maintenance