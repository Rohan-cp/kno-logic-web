import logo from "./assets/icon_rounded.png";

function App() {
  return (
    <div>
      <div style={{ width: "50%", textAlign: "center" }}>
        <img
          style={{ height: 117, width: 117, marginTop: "30%" }}
          src={logo}
          alt="Logo"
        />
        <p></p>
        <div style={{marginTop: '5%',}}>
        <span
          style={{
            fontSize: 42,
            color: "rgba(182, 183, 255, 1)",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Kno-logic{" "}
        </span>
        <span
          style={{
            fontSize: 42,
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          delivers a daily digest of curated, diverse articles that makes it
          easier to stay a lifelong learner.
        </span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
