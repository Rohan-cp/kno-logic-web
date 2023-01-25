import logo from "./assets/icon_rounded.png";
import DefaultButton from "./components/DefaultButton";
import styles from "./App.module.css";
import mockup from "./assets/mockup.png";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img className={styles.img} src={logo} alt="Logo" />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.title}>Kno-logic </span>
            delivers a daily digest of curated, diverse articles that makes it
            easier to stay a lifelong learner.
          </p>
          <div>
            <DefaultButton
              onClick={() => {
                alert();
              }}
            >
              <p className={styles.buttonText}>
                Download for <span style={{ fontWeight: "bold" }}>iOS</span>
              </p>
            </DefaultButton>
            <DefaultButton
              onClick={() => {
                alert();
              }}
              style={{ marginLeft: 90 }}
            >
              <p className={styles.buttonText}>
                Download for <span style={{ fontWeight: "bold" }}>Android</span>
              </p>
            </DefaultButton>
          </div>
        </div>
      </div>
      <div className={styles.phoneImgContainer}>
        <img
          src={mockup}
          width="60%"
          height="60%"
          alt="mockup"
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default App;
