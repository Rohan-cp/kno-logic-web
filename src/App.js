import logo from "./assets/icon_rounded.png";
import DefaultButton from "./components/DefaultButton";
import styles from "./App.module.css";
import mockup from "./assets/mockup.png";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.title}>Kno-logic </span>
            delivers a daily digest of curated, diverse articles that makes it
            easier to stay a lifelong learner.
          </p>
          <div className={styles.btnContainer}>
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
              className={styles.rightBtn}
            >
              <p className={styles.buttonText}>
                Download for <span style={{ fontWeight: "bold" }}>Android</span>
              </p>
            </DefaultButton>
          </div>
        </div>
      </div>
      <img
          src={mockup}
          width="24%"
          height="24%"
          alt="mockup"
          className={styles.image}
        />
    </div>
  );
}

export default App;
