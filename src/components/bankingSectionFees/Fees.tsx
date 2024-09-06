import { bankingSectionFees } from "@/links/Links"
import styles from "./style.module.css"
import { useTranslations } from "next-intl";

const Fees = () => {
  const t = useTranslations("bankingSectionFees");
  const fees = bankingSectionFees();
  return (
    <section className={styles.sectionFees}>
      <div className="container">
        <div className={styles.sectionItems}>
          <p className={styles.sectionText}>{t("SectionFeesText")}</p>
          <h3 className={styles.sectionTitle}>{t("SectionFeesTitle")}</h3>
          <p className={styles.sectionSubText}>{t("SectionFeesSubTitle")}</p>
          <div className={styles.sectionTableContainer}>
            <table className={styles.sectionTableMain}>
              <thead className={styles.sectionTHead}>
                <tr className={styles.sectionTR}>
                  <th className={styles.sectionTHTextLeft}>Operations</th>
                  <th className={styles.sectionTH}>UK</th>
                  <th className={styles.sectionTH}>EU</th>
                  <th className={styles.sectionTH}>World</th>
                  <th className={styles.sectionTH}>Higher risk</th>
                </tr>
              </thead>
              <tbody className={styles.sectiontBody}>
                {
                  fees.map(({ id, title, priceUK, priceEU, priceWorld, priceRisk }) => {
                    return (
                      <tr key={id} className={styles.sectionTR}>
                        <td className={styles.sectionTD}>{title}</td>
                        <td className={styles.sectionTDPrice}>{priceUK}</td>
                        <td className={styles.sectionTDPrice}>{priceEU}</td>
                        <td className={styles.sectionTDPrice}>{priceWorld}</td>
                        <td className={styles.sectionTDPrice}>{priceRisk}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className={styles.secondTable}>
            <table className={styles.sectionTableMain}>
              <thead className={styles.sectionTHead}>
                <tr className={styles.sectionTR}>
                  <th className={styles.sectionTHTextLeft}>Card operations</th>
                  <th className={styles.sectionTH}>UK</th>
                  <th className={styles.sectionTH}>EU</th>
                  <th className={styles.sectionTH}>World</th>
                  <th className={styles.sectionTH}>Higher risk</th>
                </tr>
              </thead>
              <tbody className={styles.sectiontBody}>
                {
                  fees.map(({ id, title, priceUK, priceEU, priceWorld, priceRisk }) => {
                    return (
                      <tr key={id} className={styles.sectionTR}>
                        <td className={styles.sectionTD}>{title}</td>
                        <td className={styles.sectionTDPrice}>{priceUK}</td>
                        <td className={styles.sectionTDPrice}>{priceEU}</td>
                        <td className={styles.sectionTDPrice}>{priceWorld}</td>
                        <td className={styles.sectionTDPrice}>{priceRisk}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className={styles.sectionFooter}>
            <p className={styles.sectionEndText}>{t("SectionFeesFooterTitle")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fees