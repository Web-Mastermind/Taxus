import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import ContactUs from "@/components/mainbutton/ContactUs"
import Expertise from "./sectionExpertise/Expertise"

const page = () => {
  const t = useTranslations("Main")
  return (
    <>
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
                <p className={styles.mainRightTitle}>{t("years")}</p>
                <p className={styles.mainRightText}>{t("yearsText")}</p>
              </div>
              <div className={styles.mainRightItems}>
                <p className={styles.mainRightTitle}>{t("network")}</p>
                <p className={styles.mainRightText}>{t("networkText")}</p>
              </div>
              <div className={styles.mainRightItems}>
                <p className={styles.mainRightTitle}>{t("clients")}</p>
                <p className={styles.mainRightText}>{t("clientsText")}</p>
              </div>
              <div className={styles.mainRightItems}>
                <p className={styles.mainRightTitle}>{t("project")}</p>
                <p className={styles.mainRightText}>{t("projectText")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logosSlide}>
            <p>{t("registration")}</p>
            <p>&bull;</p>
            <p>{t("accaunts")}</p>
            <p>&bull;</p>
            <p>{t("license")}</p>
            <p>&bull;</p>
            <p>{t("payment")}</p>
            <p>&bull;</p>
            <p>{t("audit")}</p>
            <p>&bull;</p>
            <p>{t("drafting")}</p>
            <p>&bull;</p>
            <p>{t("corporate")}</p>
            <p>&bull;</p>
          </div>

          <div className={styles.logosSlide}>
            <p>{t("registration")}</p>
            <p>&bull;</p>
            <p>{t("accaunts")}</p>
            <p>&bull;</p>
            <p>{t("license")}</p>
            <p>&bull;</p>
            <p>{t("payment")}</p>
            <p>&bull;</p>
            <p>{t("audit")}</p>
            <p>&bull;</p>
            <p>{t("drafting")}</p>
            <p>&bull;</p>
            <p>{t("corporate")}</p>
            <p>&bull;</p>
          </div>
        </div>
      </main>
      <Expertise />
    </>
  )
}

export default page