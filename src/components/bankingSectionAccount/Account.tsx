import Image from "next/image"
import styles from "./style.module.css"
import { bankingSectionAccounts, bankingSectionAccountsRight } from "@/links/Links"
import Payments from "../bankingSectionPayments/Payments"
import { useTranslations } from "next-intl"

const Account = () => {
  const t = useTranslations("BankingSectionCards");
  const account = bankingSectionAccounts();
  const rigtTexts = bankingSectionAccountsRight();
  return (
    <>
      <section className={styles.sectionAccount}>
        <div className="container">
          <div className={styles.sectionItems}>
            <div className={`${styles.cardsContainer} ${styles.flex}`}>
              {
                account.map(({ id, img, title, text }) => {
                  return (
                    <div key={id} className={styles.cards}>
                      <h4 className={`${styles.cardTitle} ${styles.colorDarkGrey}`}>{title}</h4>
                      <p className={`${styles.cardText} ${styles.colorDarkGrey}`}>{text}</p>
                      <Image className={styles.cardIcon} src={img} alt="card icons" width={90} height={90} />
                    </div>
                  )
                })
              }
            </div>
            <div className={`${styles.sectionTopTexts} ${styles.flex}`}>
              <div className={styles.sectionTextItems}>
                <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("aboutCardsText")}</p>
                <h2 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("aboutCardsTitle")}</h2>
              </div>
              <div className={styles.sectionTopRightTextsContainer}>
                <h2 className={`${styles.sectionRightTitle} ${styles.colorDarkGrey}`}>{t("aboutCardsSubTitle")}</h2>
                {
                  rigtTexts.map(({ id, title, text }) => {
                    return (
                      <div key={id} className={`${styles.sectionTopRightTextsItems} ${styles.flex}`}>
                        <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
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