import { bankingSectionComponentPayments } from "@/links/Links"
import styles from "./style.module.css"
import ReviewComponent from "../reviewComponent/ReviewComponent"

const Payments = () => {
  return (
    <section className={styles.sectionPayments}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTopTexts}>
            <div className={styles.sectionTextItems}>
              <p className={styles.sectionText}>Payments</p>
              <h2 className={styles.sectionTitle}>Experience the ease and efficiency of managing your global finances</h2>
            </div>
            <div className={styles.sectionTopRightTextsContainer}>
              <h2 className={styles.sectionRightTitle}>We offer:</h2>
              {
                bankingSectionComponentPayments.map(({ id, title, text }) => {
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
          <div className={styles.previewComponent}>
            <ReviewComponent title="Your gateway to seamless international business transactions" text="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payments