import Image from "next/image"
import styles from "./style.module.css"
import { bankingSectionAccounts, bankingSectionAccountsRight } from "@/links/Links"
import Payments from "../bankingSectionPayments/Payments"
import { useTranslations } from "next-intl"

const Account = () => {
  const t = useTranslations("bankingSectionCards");
  const account = bankingSectionAccounts();
  const rigtTexts = bankingSectionAccountsRight();
  return (
    <>
      <section className={styles.sectionAccount}>
        <div className="container">
          <div className={styles.sectionItems}>
            <div className={styles.cardsContainer}>
              {
                account.map(({ id, img, title, text }) => {
                  return (
                    <div key={id} className={styles.cards}>
                      <h4 className={styles.cardTitle}>{title}</h4>
                      <p className={styles.cardText}>{text}</p>
                      <Image className={styles.cardIcon} src={img} alt="card icons" width={90} height={90} />
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.sectionTopTexts}>
              <div className={styles.sectionTextItems}>
                <p className={styles.sectionText}>{t("aboutCardsText")}</p>
                <h2 className={styles.sectionTitle}>{t("aboutCardsTitle")}</h2>
              </div>
              <div className={styles.sectionTopRightTextsContainer}>
                <h2 className={styles.sectionRightTitle}>{t("aboutCardsSubTitle")}</h2>
                {
                  rigtTexts.map(({ id, title, text }) => {
                    return (
                      <div key={id} className={styles.sectionTopRightTextsItems}>
                        <span className={styles.diamondIcon}>&#9670;</span>
                        <div className={styles.sectionRightTexts}>
                          <p className={styles.rightTextItems}>{title}</p>
                          <p className={styles.rightTextSubItems}>{text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <Payments />
    </>
  )
}

export default Account