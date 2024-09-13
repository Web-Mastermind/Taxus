import ContactUs from "@/components/mainbutton/ContactUs"
import styles from "./style.module.css"
import Image from "next/image"
import Corporate from "@/components/companySectionCorporate/Corporate"

const Company = () => {
  return (
    <section className={styles.CompanyPage}>
      <div className="container">
        <div className={styles.pageItems}>
          <div className={styles.pageTextItems}>
            <h2 className={styles.pageTitle}>Company Registration and Maintenance</h2>
            <p className={styles.pageText}>If you’re running an international IT business, having a properly set up company can provide many benefits, including liability protection, tax advantages, and increased credibility with clients and partners. At Taxus, we specialize in helping businesses set up and maintain their companies in countries around the world. Here are some of the ways we can help you.</p>
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
        <Image className={styles.pageImage} src="/assets/img/CompanyImg.png" alt="Company Image" width={830} height={435} />
        <Corporate />
      </div>
    </section>
  )
}

export default Company