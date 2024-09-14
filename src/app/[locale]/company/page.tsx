import ContactUs from "@/components/mainbutton/ContactUs"
import styles from "./style.module.css"
import Image from "next/image"
import Corporate from "@/components/companySectionCorporate/Corporate"
import { useTranslations } from "next-intl"
import Registration from "@/components/companySectionRegistration/Registration"

const Company = () => {
  const t = useTranslations("CompanyPage");
  return (
    <>
      <section className={styles.CompanyPage}>
        <div className="container">
          <div className={styles.pageItems}>
            <div className={styles.pageTextItems}>
              <h2 className={styles.pageTitle}>{t("CompanyPageText")}</h2>
              <p className={styles.pageText}>{t("CompanyPageTitle")}</p>
              <div className={styles.buttonContainer}>
                <ContactUs />
              </div>
            </div>
          </div>
          <Image className={styles.pageImage} src="/assets/img/CompanyImg.png" alt="Company Image" width={830} height={435} />
          <Corporate />
        </div>
      </section>
      <Registration />
    </>
  )
}

export default Company