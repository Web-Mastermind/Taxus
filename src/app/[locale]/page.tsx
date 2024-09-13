import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import ContactUs from "@/components/mainbutton/ContactUs"
import Expertise from "../../components/sectionExpertise/Expertise"
import { Experience } from "@/links/Links"
import Serve from "@/components/sectionServe/Serve"
import Services from "@/components/sectionServices/Services"
import Banking from "@/components/sectionBanking/Banking"
import Platform from "@/components/sectionPlatform/Platform"
import Process from "@/components/sectionProcess/Process"
import Benefits from "@/components/sectionBenefits/Benefits"
import Reviews from "@/components/sectionReviews/Reviews"

const page = () => {
  const exp = Experience();
  const t = useTranslations("Main")
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.mainItems}>
            <div className={styles.leftContainer}>
              <h1 className={`${styles.mainTitle} ${styles.fonFamily} ${styles.colorPrimary}`}>{t("title")}</h1>
              <div className={`${styles.mainTexts} ${styles.flex} ${styles.alignCenter}`}>
                <Image className={styles.mainIcon} src="/assets/icons/arrow.svg" alt="Arrow Icon" width={55} height={53} />
                <h2 className={`${styles.mainSubTitle} ${styles.colorWhite}`}>{t("subtitle")}</h2>
              </div>
              <h2 className={`${styles.mainSubSecondTitle} ${styles.colorWhite}`}>{t("text")}</h2>
              <p className={`${styles.mainTextItem} ${styles.fontMregular}`}>{t("secontext")}</p>
              <div className={styles.buttonContainer}>
                <ContactUs />
              </div>
            </div>
            <div className={`${styles.rightContainer} ${styles.flex}`}>
              {
                exp.map(({ id, text, subTexts }) => {
                  return (
                    <div key={id} className={styles.mainRightItems}>
                      <p className={`${styles.mainRightTitle} ${styles.fonFamily} ${styles.colorPrimary} ${styles.textCenter}`}>{text}</p>
                      <p className={`${styles.mainRightText} ${styles.colorWhite} ${styles.fontMregular} ${styles.textCenter}`}>{subTexts}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={`${styles.logos} ${styles.flex} ${styles.alignCenter}`}>
          <div className={`${styles.logosSlide} ${styles.flex} ${styles.alignCenter}`}>
            <p className={styles.colorWhite}>{t("registration")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("accaunts")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("license")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("payment")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("audit")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("drafting")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("corporate")}</p>
            <p className={styles.colorWhite}>&bull;</p>
          </div>

          <div className={`${styles.logosSlide} ${styles.flex} ${styles.alignCenter}`}>
            <p className={styles.colorWhite}>{t("registration")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("accaunts")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("license")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("payment")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("audit")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("drafting")}</p>
            <p className={styles.colorWhite}>&bull;</p>
            <p className={styles.colorWhite}>{t("corporate")}</p>
            <p className={styles.colorWhite}>&bull;</p>
          </div>
        </div>
      </main>
      <Expertise />
      <Serve />
      <Services />
      <Banking />
      <Platform />
      <Process />
      <Benefits />
      <Reviews />
    </>
  )
}

export default page