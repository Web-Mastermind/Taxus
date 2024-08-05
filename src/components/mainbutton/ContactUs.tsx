import Link from "next/link"
import styles from "./style.module.css"

const ContactUs = () => {
  return (
    <Link className={styles.contactUs} href="/">Contact Us</Link>
  )
}

export default ContactUs