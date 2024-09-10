import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { servicesSection } from "@/links/Links"
import { useTranslations } from "next-intl"
import ContactUs from "../mainbutton/ContactUs"

const Services = () => {
  const t = useTranslations("servicesSection")
  const services = servicesSection();
  return (
    <section className={`${styles.servicesSection} ${styles.relative}`}>
      <div className="container">
        <div className={styles.servicesItems}>
          <p className={`${styles.servicesText} ${styles.colorWhite}`}>{t("sectionText")}</p>
          <h4 className={styles.servicesTitle}>{t("sectionTitle")}</h4>
        </div>
        <div className={`${styles.sectionMainContainer} ${styles.flex}`}>
          {
            services.map(({ id, title, text, to }) => {
              return (
                <div key={id} className={styles.servicesMainItems}>
                  <h2 className={`${styles.servicesItemTitle} ${styles.colorWhite} ${styles.fontMExtram}`}>{title}</h2>
                  <Image className={styles.itemLine} src="/assets/icons/Line.svg" alt="Underline" width={50} height={5} />
                  <p className={`${styles.servicesItemText} ${styles.fontMregular} ${styles.fontSize}`}>{text}</p>
                  <Link className={`${styles.servicesItemLink} ${styles.colorWhite}`} href={to}>{t("Services.servicesLink")} &rarr;</Link>
                </div>
              )
            })
          }
        </div>
        <div className={`${styles.sectionSubMainContainer} ${styles.flex} ${styles.relative}`}>
          <div className={styles.subMainTexts}>
            <h4 className={`${styles.subMainTitle} ${styles.fontMExtram} ${styles.colorDarkGrey}`}>{t("Services.businessTitle")}</h4>
            <p className={`${styles.subMainText} ${styles.fontMregular} ${styles.fontSize} ${styles.colorDarkGrey}`}>{t("Services.businessText")}</p>
          </div>
          <ContactUs />
        </div>
      </div>
    </section>
  )
}

export default Services