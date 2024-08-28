import ContactUs from "../mainbutton/ContactUs"
import styles from "./style.module.css"

const ReviewComponent = ({ title, text }: any) => {
  return (
    <article className={styles.ReviewComponent}>
      <div className="container">
        <div className={styles.reviewBottomContainer}>
          <div className={styles.CTA}>
            <div className={styles.CTAText}>
              <h3 className={styles.CTATitleItems}>{title}</h3>
              <p className={styles.CTATextItems}>{text}</p>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ReviewComponent