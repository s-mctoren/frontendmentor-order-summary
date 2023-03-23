import styles from "./OrderSummary.module.css";

export function OrderSummary() {
  return (
    <div className={styles.myCard}>
      <img
        className={styles.hero}
        src="./assets/illustration-hero.svg"
        alt="our hero"
      />

      <div className={styles.cardContent}>
        <div className={styles.description}>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div className={styles.miniCard}>
          <div className={styles.miniCardDetail}>
            <img src="./assets/icon-music.svg" alt="icon-music" />

            <div>
              <p className={styles.itemName}>Annual Plan</p>
              <p className={styles.itemPrice}>$59.99/year</p>
            </div>
          </div>

          <a className={styles.changeItem} href="###">
            Change
          </a>
        </div>

        <div className={styles.submission}>
          <a className={styles.proceedBtn} href="#">
            Proceed to Payment
          </a>

          <a href="##" className={styles.cancelOrder}>
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
}
