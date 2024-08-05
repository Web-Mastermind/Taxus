import Link from "next/link"
import styles from "./style.module.css"
import { useTranslations } from "next-intl"

const ContactUs = () => {
  const t = useTranslations("Components")
  return (
    <Link className={styles.contactUs} href="/">{t("button")}</Link>
  )
}

export default ContactUs