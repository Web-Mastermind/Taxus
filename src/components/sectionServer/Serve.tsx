import Image from "next/image"
import styles from "./style.module.css"
import { serveSection } from "@/links/Links"
import ContactUs from "../mainbutton/ContactUs"

const Serve = () => {
  return (
    <section className={styles.serveSection}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftContainer}>
            <p className={styles.sectionText}>Who we serve</p>
            <h2 className={styles.sectionTitle}>The areas of our expertise are as diverse as the verticals of IT business are</h2>
            <Image className={styles.sectionImage} src="/assets/img/BusinessPeople.png" alt="Business People Image" width={480} height={300} />
          </div>
          <div className={styles.sectionRightContainer}>
            {
              serveSection.map(({ id, icon, text }) => {
                return (
                  <div key={id} className={styles.rightContainerItems}>
                    <span className={styles.diamondIcon}>{icon}</span>
                    <p className={styles.sectionSubText}>{text}</p>
                  </div>
                )
              })
            }
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Serve