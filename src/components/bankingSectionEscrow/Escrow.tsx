import Image from "next/image"
import styles from "./style.module.css"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"
import { bankingSectionEscrow } from "@/links/Links"

const Escrow = () => {
  const t = useTranslations("bankingSectionEscrow");
  const escrow = bankingSectionEscrow();
  return (
    <section className={styles.sectionEscrow}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTextItems}>
            <p className={styles.sectionText}>{t("aboutEscrowText")}</p>
            <h2 className={styles.sectionTitle}>{t("aboutEscrowTitle")}</h2>
            <p className={styles.sectionSubText}>{t("aboutEscrowSubTitle")}</p>
          </div>
          <div className={styles.sectionCardsItems}>
            {
              escrow.map(({ id, img, title, text }) => {
                return (
                  <div key={id} className={styles.sectionCards}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                    <Image className={styles.cardIcon} src={img} alt="cards icon" width={68.22} height={80} />
                  </div>
                )
              })
            }
          </div>
          <div className={styles.sectionSubTextItems}>
            <p className={styles.sectionFooterText}>{t("aboutEscrowSubText")}</p>
          </div>
          <div className={styles.contactItem}>
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Escrow