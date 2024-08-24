import Image from "next/image"
import styles from "./style.module.css"
import { aboutPage } from "@/links/Links"
import ContactUs from "@/components/mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const about = () => {
  const about = aboutPage();
  const t = useTranslations("aboutPage")
  return (
    <section className={styles.pageAbout}>
      <div className="container">
        <div className={styles.pageItems}>
          <div className={styles.pageLeftItems}>
            <p className={styles.pageText}>{t("pageText")}</p>
            <h2 className={styles.pageTitle}>{t("pageTitle")}</h2>
            <p className={styles.pageSubText}>{t("pageSubText")}</p>
          </div>
          <div className={styles.pageRightItems}>
            <Image className={styles.pageImage} src="/assets/img/AboutPageLadyImg.png" alt="Lady Image" width={501} height={646} />
          </div>
        </div>
        <div className={styles.pageSubItemsMain}>
          {
            about.map(({ id, title, text }) => {
              return (
                <div key={id} className={styles.aboutPageSubItems}>
                  <h2 className={styles.aboutPageSubTitle}>{title}</h2>
                  <Image className={styles.itemLine} src="/assets/icons/Line.svg" alt="Underline" width={50} height={5} />
                  <p className={styles.aboutPageSubText}>{text}</p>
                </div>
              )
            })
          }
        </div>
        <div className={styles.pageSubItem}>
          <p className={styles.pageSubTextItem}>{t("pageEndText")}</p>
          <ContactUs />
        </div>
      </div>
    </section>
  )
}

export default about