import Image from "next/image"
import styles from "./style.module.css"
import { CompanySectionCorporate } from "@/links/Links"

const Corporate = () => {
  return (
    <section className={styles.sectionCorporate}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTextItems}>
            <p className={`${styles.sectionText} ${styles.colorWhite}`}>Corporate structure</p>
            <h2 className={styles.sectionTitle}>Benefits of Proper Company Set Up</h2>
          </div>
          <div className={styles.sectionSubItems}>
            {
              CompanySectionCorporate.map(({ id, title, text, subText }) => {
                return (
                  <div key={id} className={styles.sectionSubText}>
                    <h3 className={`${styles.sectionSubTitle} ${styles.colorWhite}`}>{title}</h3>
                    <Image className={styles.itemLine} src="/assets/icons/Line.svg" alt="Underline" width={50} height={5} />
                    <p className={styles.sectionSubText}>{text}</p>
                    <p className={styles.sectionEndText}>{subText}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate