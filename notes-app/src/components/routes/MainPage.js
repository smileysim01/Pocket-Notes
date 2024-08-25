import styles from "./MainPage.module.css";
import bg from "../../assets/mainPagebg.png";
import lock from "../../assets/lock.png";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div id={styles.header}>Pocket Notes</div>
        <button id={styles.addBtn}>+</button>
      </div>
      <div className={styles.right}>
        <div className={styles.contentBox}>
            <img src={bg} alt="Loading background" />
            <div id={styles.header}>Pocket Notes</div>
            Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </div>
        <div className={styles.footer}>
        <img src={lock} alt="Loading image" /> end-to-end encrypted
        </div>
      </div>
    </div>
  )
}

export default MainPage
