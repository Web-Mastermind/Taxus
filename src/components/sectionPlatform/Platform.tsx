import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { useTranslations } from "next-intl"

const Platform = () => {
  const t = useTranslations("PlatformSection")
  return (
    <section className={styles.sectionPlatform}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionTexts}>
            <p className={`${styles.platformText} ${styles.colorWhite}`}>{t("sectionText")}</p>
            <h2 className={styles.platformTitle}>{t("sectionTitle")}</h2>
            <p className={`${styles.platformSubText} ${styles.colorWhite}`}>{t("subText")}</p>
            <Link className={`${styles.platformLinkItem} ${styles.colorWhite}`} href="/">{t("platformLink")} &rarr;</Link>
          </div>
          <div className={styles.sectionImage}>
            <Image className={styles.platformImage} src="/assets/img/PlatformSectionImg.png" alt="young woman image" width={536} height={480} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Platform