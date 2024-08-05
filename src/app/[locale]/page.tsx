import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import ContactUs from "@/components/mainbutton/ContactUs"

const page = () => {
  const t = useTranslations("Main")
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.mainItems}>
          <div className={styles.leftContainer}>
            <h1 className={styles.mainTitle}>{t("title")}</h1>
            <div className={styles.mainTexts}>
              <Image className={styles.mainIcon} src="/assets/icons/arrow.svg" alt="Arrow Icon" width={55} height={53} />
              <h2 className={styles.mainSubTitle}>{t("subtitle")}</h2>
            </div>
            <h2 className={styles.mainSubSecondTitle}>{t("text")}</h2>
            <p className={styles.mainTextItem}>{t("secontext")}</p>
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.mainRightItems}>
              <p className={styles.mainRightTitle}>10+ Years</p>
              <p className={styles.mainRightText}>of experience with IT</p>
            </div>
            <div className={styles.mainRightItems}>
              <p className={styles.mainRightTitle}>&gt; 250</p>
              <p className={styles.mainRightText}>partners in the network</p>
            </div>
            <div className={styles.mainRightItems}>
              <p className={styles.mainRightTitle}>&gt; 230</p>
              <p className={styles.mainRightText}>clients worldwide</p>
            </div>
            <div className={styles.mainRightItems}>
              <p className={styles.mainRightTitle}>&gt; 150</p>
              <p className={styles.mainRightText}>projects launched</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page