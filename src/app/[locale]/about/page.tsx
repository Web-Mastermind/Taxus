import Image from "next/image"
import styles from "./style.module.css"
import { AboutPage } from "@/links/Links"
import ContactUs from "@/components/mainbutton/ContactUs"
import { useTranslations } from "next-intl"
import Industries from "@/components/aboutSectionIndustries/Industries"
import Awards from "@/components/aboutSectionAwards/Awards"
import History from "@/components/aboutSectionHistory/History"
import AboutReview from "@/components/aboutSectionReview/AboutReview"

const About = () => {
  const about = AboutPage();
  const t = useTranslations("AboutPage")
  return (
    <>
      <section className={styles.pageAbout}>
        <div className="container">
          <div className={`${styles.pageItems} ${styles.flex}`}>
            <div className={styles.pageLeftItems}>
              <p className={`${styles.pageText} ${styles.colorWhite}`}>{t("pageText")}</p>
              <h2 className={styles.pageTitle}>{t("pageTitle")}</h2>
              <p className={styles.pageSubText}>{t("pageSubText")}</p>
            </div>
            <div className={styles.pageRightItems}>
              <Image className={styles.pageImage} src="/assets/img/AboutPageLadyImg.png" alt="Lady Image" width={501} height={646} />
            </div>
          </div>
          <div className={`${styles.pageSubItemsMain} ${styles.flex}`}>
            {
              about.map(({ id, title, text }) => {
                return (
                  <div key={id} className={styles.aboutPageSubItems}>
                    <h2 className={`${styles.aboutPageSubTitle} ${styles.colorWhite}`}>{title}</h2>
                    <Image className={styles.itemLine} src="/assets/icons/Line.svg" alt="Underline" width={50} height={5} />
                    <p className={styles.aboutPageSubText}>{text}</p>
                  </div>
                )
              })
            }
          </div>
          <div className={`${styles.pageSubItem} ${styles.flex}`}>
            <p className={`${styles.pageSubTextItem} ${styles.colorWhite}`}>{t("pageEndText")}</p>
            <ContactUs />
          </div>
        </div>
      </section>
      <Industries />
      <Awards />
      <History />
      <AboutReview />
    </>
  )
}

export default About