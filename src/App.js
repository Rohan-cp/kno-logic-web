import logo from "./assets/icon_rounded.png";
import DefaultButton from "./components/DefaultButton";
import styles from "./App.module.css";
import mockup from "./assets/mockup.png";

function App() {
  return (
    <div className={styles.container}>
      <div style={{ width: "50%" }}>
        <img
          style={{
            height: 117,
            width: 117,
            display: "flex",
            marginLeft: "40%",
            marginTop: "30%",
          }}
          src={logo}
          alt="Logo"
        />
        <div
          style={{
            marginTop: "5%",
            textAlign: "left",
            width: "523px",
            display: "flex",
            margin: "auto",
          }}
        >
          <p
            style={{
              fontSize: 42,
              color: "rgba(255, 255, 255, 0.8)",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontSize: 42,
                color: "rgba(182, 183, 255, 1)",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              Kno-logic{" "}
            </span>
            delivers a daily digest of curated, diverse articles that makes it
            easier to stay a lifelong learner.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <DefaultButton
            onClick={() => {
              alert();
            }}
          >
            <p style={{ fontSize: 17, fontWeight: 100 }}>
              Download for <span style={{ fontWeight: "bold" }}>iOS</span>
            </p>
          </DefaultButton>
          <DefaultButton
            onClick={() => {
              alert();
            }}
          >
            <p style={{ fontSize: 17, fontWeight: 100 }}>
              Download for <span style={{ fontWeight: "bold" }}>Android</span>
            </p>
          </DefaultButton>
        </div>
      </div>
      <div style={{ width: "50%", height: "100%", textAlign: "center" }}>
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
