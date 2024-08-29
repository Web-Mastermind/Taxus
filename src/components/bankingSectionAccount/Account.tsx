import Image from "next/image"
import styles from "./style.module.css"
import { bankingSectionAccounts, bankingSectionComponent } from "@/links/Links"
import Payments from "../bankingSectionPayments/Payments"

const Account = () => {
  return (
    <>
      <section className={styles.sectionAccount}>
        <div className="container">
          <div className={styles.sectionItems}>
            <div className={styles.cardsContainer}>
              {
                bankingSectionAccounts.map(({ id, img, title, text }) => {
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
                <p className={styles.sectionText}>Account</p>
                <h2 className={styles.sectionTitle}>Take control over your finances effortlessly with Taxus Banking</h2>
              </div>
              <div className={styles.sectionTopRightTextsContainer}>
                <h2 className={styles.sectionRightTitle}>We offer:</h2>
                {
                  bankingSectionComponent.map(({ id, title, text }) => {
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