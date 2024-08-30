import ContactUs from "@/components/mainbutton/ContactUs"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"
import Account from "@/components/bankingSectionAccount/Account"
import Private from "@/components/bankingSectionPrivate/Private"

const page = () => {
  const t = useTranslations("bankingPage")
  return (
    <>
      <section className={styles.bankingMain}>
        <div className="container">
          <div className={styles.pageItems}>
            <h3 className={styles.pageTitle}>{t("sectionTitle")}</h3>
            <h3 className={styles.pageSubTitle}>{t("sectionSubTitle")}</h3>
            <p className={styles.lorem}>lorem ipsum dolor sit</p>
            <div className={styles.contactItem}>
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
      <Account />
      <Private />
    </>
  )
}

export default page