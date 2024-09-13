import { useTranslations } from "next-intl";
import styles from "./style.module.css"
import { ReviewsSection } from "@/links/Links";
import Image from "next/image";
import ReviewComponent from "../reviewComponent/ReviewComponent";

const AboutReview = () => {
  const t = useTranslations("ReviewSection")
  const t2 = useTranslations("AboutSectionBenefits")
  const review = ReviewsSection();
  return (
    <section className={`${styles.aboutSectionReview} ${styles.relative}`}>
      <div className={`${styles.sectionItems} ${styles.relative}`}>
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
                    <p className={`${styles.reviewsText} ${styles.fontAll}`}>{text}</p>
                    <div className={`${styles.customersImg} ${styles.flex}`}>
                      <Image className={styles.reviewsImage} src="/assets/icons/reviewIcon.svg" alt="review image" width={68} height={68} />
                      <div className={styles.reviewNameText}>
                        <p className={styles.reviewName}>{name}</p>
                        <p className={`${styles.reviewJob} ${styles.fontAll}`}>{job}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.previewComponent}>
          <ReviewComponent title={t2("aboutBenefitsTitle2")} />
        </div>
      </div>
    </section>
  )
}

export default AboutReview