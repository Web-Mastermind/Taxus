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
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.servicesItems}>
          <p className={styles.servicesText}>{t("sectionText")}</p>
          <h4 className={styles.servicesTitle}>{t("sectionTitle")}</h4>
        </div>
        <div className={styles.sectionMainContainer}>
          {
            services.map(({ id, title, text, to }) => {
              return (
                <div key={id} className={styles.servicesMainItems}>
                  <h2 className={styles.servicesItemTitle}>{title}</h2>
                  <Image className={styles.itemLine} src="/assets/icons/Line.svg" alt="Underline" width={50} height={5} />
                  <p className={styles.servicesItemText}>{text}</p>
                  <Link className={styles.servicesItemLink} href={to}>{t("Services.servicesLink")} &rarr;</Link>
                </div>
              )
            })
          }
        </div>
        <div className={styles.sectionSubMainContainer}>
          <div className={styles.subMainTexts}>
            <h4 className={styles.subMainTitle}>{t("Services.businessTitle")}</h4>
            <p className={styles.subMainText}>{t("Services.businessText")}</p>
          </div>
          <ContactUs />
        </div>
      </div>
    </section>
  )
}

export default Services