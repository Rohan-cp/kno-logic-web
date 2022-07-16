import logo from "./assets/icon_rounded.png";
import DefaultButton from "./components/DefaultButton";

function App() {
  return (
    <div>
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
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <DefaultButton
            onClick={() => {
              alert();
            }}
          >
            <span style={{ fontSize: 17, fontWeight: 100 }}>
              Download for{" "}
              <span style={{ fontWeight: "bold" }}>iOS</span>
            </span>
          </DefaultButton>
          <DefaultButton
            onClick={() => {
              alert();
            }}
          >
            <p style={{ fontSize: 17, fontWeight: 100 }}>
              Download for{" "}
              <span style={{ fontWeight: "bold"}}>
                Android
              </span>
            </p>
          </DefaultButton>
        </div>
      </div>
    </div>
  );
}

export default App;
