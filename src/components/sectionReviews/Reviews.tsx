import Image from "next/image"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import { reviewsSection } from "@/links/Links"
import ReviewComponent from "../reviewComponent/ReviewComponent"

const Reviews = () => {
  const t = useTranslations("reviewSection")
  const review = reviewsSection();
  return (
    <section className={styles.sectionReviews}>
      <div className={styles.sectionItems}>
        <div className="container">
          <div className={styles.reviewsTextsItems}>
            <p className={`${styles.sectionText} ${styles.textCenter}`}>{t("sectionText")}</p>
            <h2 className={`${styles.sectionTitle} ${styles.textCenter}`}>{t("sectionTitle")}</h2>
          </div>
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        <div className="container">
          <div className={`${styles.customersContainer} ${styles.flex}`}>
            {
              review.map(({ id, text, name, job }) => {
                return (
                  <div key={id} className={styles.customers}>
                    <p className={styles.reviewsIcon}>“</p>
                    <p className={styles.reviewsText}>{text}</p>
                    <div className={`${styles.customersImg} ${styles.flex}`}>
                      <Image className={styles.reviewsImage} src="/assets/icons/reviewIcon.svg" alt="review image" width={68} height={68} />
                      <div className={styles.reviewNameText}>
                        <p className={styles.reviewName}>{name}</p>
                        <p className={styles.reviewJob}>{job}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.previewComponent}>
          <ReviewComponent title={t("sectionTitle2")} text={t("sectionText2")} />
        </div>
      </div>
    </section>
  )
}

export default Reviews