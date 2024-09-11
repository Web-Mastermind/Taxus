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
          <div className={`${styles.sectionTextItems} ${styles.textCenter}`}>
            <p className={`${styles.sectionText} ${styles.colorWhite}`}>{t("aboutEscrowText")}</p>
            <h2 className={styles.sectionTitle}>{t("aboutEscrowTitle")}</h2>
            <p className={styles.sectionSubText}>{t("aboutEscrowSubTitle")}</p>
          </div>
          <div className={`${styles.sectionCardsItems} ${styles.textCenter} ${styles.flex}`}>
            {
              escrow.map(({ id, img, title, text }) => {
                return (
                  <div key={id} className={styles.sectionCards}>
                    <h3 className={`${styles.cardTitle} ${styles.colorDarkGrey}`}>{title}</h3>
                    <p className={`${styles.cardText} ${styles.colorDarkGrey}`}>{text}</p>
                    <Image className={styles.cardIcon} src={img} alt="cards icon" width={68.22} height={80} />
                  </div>
                )
              })
            }
          </div>
          <div className={`${styles.sectionSubTextItems} ${styles.textCenter}`}>
            <p className={`${styles.sectionFooterText} ${styles.colorWhite}`}>{t("aboutEscrowSubText")}</p>
          </div>
          <div className={`${styles.contactItem} ${styles.flex}`}>
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Escrow