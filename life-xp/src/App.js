import { useEffect, useState } from "react";
import "./App.css";

const lifeColors = [
  { name: "Physical Health", color: "#FF5733" },
  { name: "Emotional Health", color: "#1E90FF" },
  { name: "Financial Life", color: "#228B22" },
  { name: "Spiritual Life", color: "#FFFF00" },
  { name: "Intellectual Life", color: "#8B008B" },
  { name: "Social Life", color: "#FFC0CB" },
  { name: "Career Life", color: "#FFD700" },
  { name: "Family Life", color: "#00CED1" },
  { name: "Creative Life", color: "#FF69B4" },
  { name: "Travel Life", color: "#FFA500" },
  { name: "Community Life", color: "#FF8C00" },
  { name: "Recreational Life", color: "#7FFF00" },
  { name: "Cultural Life", color: "#6B8E23" },
  { name: "Environmental Life", color: "#008000" },
  { name: "Relationship Life", color: "#FF1493" },
  { name: "Philanthropic Life", color: "#FFDAB9" },
  { name: "Political Life", color: "#800000" },
  { name: "Home Life", color: "#800080" },
  { name: "Self-Care Life", color: "#FFDAB9" },
  { name: "Romantic Life", color: "#FF69B4" },
  { name: "Cultural Life", color: "#FFA500" },
  { name: "Leadership Life", color: "#2F4F4F" },
  { name: "Presence Life", color: "#FFC0CB" },
];

function App() {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [expPoints, setExpPoints] = useState(12500);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const january1_2028 = new Date("2028-09-16");
      const difference = january1_2028 - currentTime;

      if (difference > 0) {
        const yearsRemaining = Math.floor(
          difference / (1000 * 60 * 60 * 24 * 30 * 12)
        );
        const monthsRemaining = Math.floor(
          (difference / (1000 * 60 * 60 * 24 * 30)) % 12
        );
        const daysRemaining = Math.floor(
          (difference / (1000 * 60 * 60 * 24)) % 30
        );
        const hoursRemaining = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutesRemaining = Math.floor((difference / (1000 * 60)) % 60);
        const secondsRemaining = Math.floor((difference / 1000) % 60);

        setTimeRemaining(
          `${yearsRemaining.toString().padStart(2, "0")}Y ${monthsRemaining
            .toString()
            .padStart(2, "0")}M ${daysRemaining
            .toString()
            .padStart(2, "0")}D ${hoursRemaining
            .toString()
            .padStart(2, "0")}H ${minutesRemaining
            .toString()
            .padStart(2, "0")}M ${secondsRemaining
            .toString()
            .padStart(2, "0")}S`
        );
      } else {
        clearInterval(intervalId);
        setTimeRemaining("Expired");
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="digits">
          <div className="exp-points font-big">
            {expPoints}/100000 EXPERIENCE
          </div>
          <div className="logo">--XP--</div>
          <div className="countdown font-big">{timeRemaining}</div>
        </div>

        <Expbar expPoints={expPoints} />
      </header>
      <body-2>
        <Cupboard />
      </body-2>
    </div>
  );
}

function Expbar({ expPoints }) {
  const remainingTime =
    ((new Date("2028-01-01").getTime() - new Date().getTime()) /
      new Date("2028-01-01").getTime()) *
    window.innerWidth;
  // console.log(expPoints / 10000);
  return (
    <div className="Expbar">
      {/* <div className="expbar-description">Life EXP Points</div> */}
      <div className="expbar-in">
        <div
          className="expbar-val"
          style={{ width: (expPoints / 100000) * window.innerWidth }}
        ></div>
        <div
          className="expbar-val-time"
          style={{ width: window.innerWidth - remainingTime }}
        ></div>
      </div>
    </div>
  );
}

function Cupboard() {
  const [formbool, setFormbool] = useState(false);
  const [inpNumber, setInpNumber] = useState(0);

  return (
    <div className="cup-platform">
      <div className="side-bar" id="side-bar">
        <button
          className="add-exp font-big"
          onClick={() => setFormbool((s) => !s)}
        >
          {" "}
          ADD EXPERIENCE
        </button>
      </div>
      {formbool ? (
        <div className="side-form-out font-big" id="side-form-out">
          <div className="select-category">
            <select className="select-cat font-big">
              <option>Select Category</option>
              {lifeColors.map((l) => (
                <option key={l.name} value={l.name}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <div className="div-input-notes">
            <input
              type="text"
              placeholder="What happened?"
              className="select-cat font-big input-notes"
            ></input>
          </div>
          <div className="div-image-upload">image</div>
          <div className="exp-digits-form">
            <button
              onClick={() => setInpNumber((s) => (s - 5 >= 0 ? s - 5 : s))}
              style={
                inpNumber > 0
                  ? { backgroundColor: "#ffffff" }
                  : { backgroundColor: "#505050" }
              }
              className="minus-but"
            >
              -
            </button>
            <div className="font-big input-number">
              {inpNumber.toString().padStart(2, "0")} EXP
            </div>
            <button
              onClick={() => setInpNumber((s) => (s + 5 <= 25 ? s + 5 : s))}
              style={
                inpNumber < 25
                  ? { backgroundColor: "#ffffff" }
                  : { backgroundColor: "#505050" }
              }
              className="plus-but"
            >
              +
            </button>
          </div>
          <div className="div-submit-form">
            <button className="submit-form font-big">SUBMIT</button>
          </div>
        </div>
      ) : null}
      {lifeColors.map((life_cat) => (
        <div className="cup-and-name">
          <div
            className="cup"
            style={{
              background: `linear-gradient(to bottom,#00000005,#00000005 70%,${life_cat.color} 30%,#d3d3d3)`,
            }}
          >
            <div class="bubble bubble-1"></div>
            <div class="bubble bubble-2"></div>
            <div class="bubble bubble-3"></div>
          </div>
          <div className="cup-name">{life_cat.name}</div>
          <div className="add-button">
            {/* <input
              type="image"
              src={require("./plus2.png")}
              className="plus-img"
            ></input> */}
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
