import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import ContactUs from "@/components/mainbutton/ContactUs"
import Expertise from "../../components/sectionExpertise/Expertise"
import { experience } from "@/links/Links"
import Serve from "@/components/sectionServer/Serve"

const page = () => {
  const exp = experience();
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
              {
                exp.map(({ id, text, subTexts }) => {
                  return (
                    <div key={id} className={styles.mainRightItems}>
                      <p className={styles.mainRightTitle}>{text}</p>
                      <p className={styles.mainRightText}>{subTexts}</p>
                    </div>
                  )
                })
              }
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
      <Serve />
    </>
  )
}

export default page