import styles from "./OrderSummary.module.css";

export function OrderSummary() {
  return (
    <div className={styles['my-card']}>
      <img
        className={styles.hero}
        src="./assets/illustration-hero.svg"
        alt="our hero"
      />

      <div className={styles['card-content']}>
        <div className={styles.description}>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>

        <div className={styles['mini-card']}>
          <div className={styles['mini-card-detail']}>
            <img src="./assets/icon-music.svg" alt="icon-music" />

            <div>
              <p className={styles['item-name']}>Annual Plan</p>
              <p className={styles['item-price']}>$59.99/year</p>
            </div>
          </div>

          <a className={styles['change-item']} href="###">
            Change
          </a>
        </div>

        <div className={styles.submission}>
          <a className={styles['proceed-btn']} href="#">
            Proceed to Payment
          </a>

          <a href="##" className={styles['cancel-order']}>
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
}
