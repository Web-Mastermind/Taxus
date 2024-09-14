import { CompanySectionRegistrationCenter, CompanySectionRegistrationLeft, CompanySectionRegistrationRight } from "@/links/Links"
import styles from "./style.module.css"
import { useTranslations } from "next-intl";

const Registration = () => {
  const t = useTranslations("CompanySectionRegistration");
  const COUNTRIESLEFT = CompanySectionRegistrationLeft();
  const COUNTRIESCENTER = CompanySectionRegistrationCenter();
  const COUNTRIESRIGHT = CompanySectionRegistrationRight();
  return (
    <section className={styles.sectionRegistration}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTextItems}>
            <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("RegistrationSectionText")}</p>
            <h4 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("RegistrationSectionTitle")}</h4>
          </div>
          <div className={`${styles.countriesContainer} ${styles.flex}`}>
            <div className={styles.countriesItems}>
              <p className={`${styles.countriesTitle} ${styles.colorDarkGrey}`}>{t("CountriesLeft.Title")}</p>
              {
                COUNTRIESLEFT.map(({ id, countrie }) => {
                  return (
                    <div key={id} className={`${styles.countriesNameItems} ${styles.flex}`}>
                      <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                      <p className={`${styles.countriesName} ${styles.colorDarkGrey}`}>{countrie}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.countriesItems}>
              <p className={`${styles.countriesTitle} ${styles.colorDarkGrey}`}>{t("CountriesCenter.Title")}</p>
              {
                COUNTRIESCENTER.map(({ id, countrie }) => {
                  return (
                    <div key={id} className={`${styles.countriesNameItems} ${styles.flex}`}>
                      <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                      <p className={`${styles.countriesName} ${styles.colorDarkGrey}`}>{countrie}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.countriesItems}>
              <p className={`${styles.countriesTitle} ${styles.colorDarkGrey}`}>{t("CountriesRight.Title")}</p>
              {
                COUNTRIESRIGHT.map(({ id, countrie }) => {
                  return (
                    <div key={id} className={`${styles.countriesNameItems} ${styles.flex}`}>
                      <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>&#9670;</span>
                      <p className={`${styles.countriesName} ${styles.colorDarkGrey}`}>{countrie}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration