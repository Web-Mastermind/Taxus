import ContactUs from "@/components/mainbutton/ContactUs"
import styles from "./style.module.css"

const page = () => {
  return (
    <section className={styles.bankingMain}>
      <div className="container">
        <div className={styles.pageItems}>
          <h3 className={styles.pageTitle}>Taxus Banking</h3>
          <h3 className={styles.pageSubTitle}>Partnering for Generations of Success</h3>
          <p className={styles.lorem}>lorem ipsum dolor sit</p>
          <div className={styles.contactItem}>
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page