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
      </div>
    </main>
  )
}

export default page