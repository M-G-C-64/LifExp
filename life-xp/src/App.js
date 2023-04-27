import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [expPoints, setExpPoints] = useState(2500);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const january1_2028 = new Date("2028-01-01");
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
          <div className="exp-points">{expPoints}/100000 EXPERIENCE</div>
          <div className="logo">--XP--</div>
          <div className="countdown">{timeRemaining}</div>
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
  return (
    <div className="cup-platform">
      <div
        class="cup"
        style={{
          background:
            "linear-gradient(to bottom,#00000005,#00000005 70%,green 30%,rgb(0, 0, 0))",
        }}
      >
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>
      <div
        class="cup"
        style={{
          background:
            "linear-gradient(to bottom,#00000005,#00000005 60%,orange 40%,rgb(0, 0, 0))",
        }}
      >
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>
      <div
        class="cup"
        style={{
          background:
            "linear-gradient(to bottom,#00000005,#00000005 80%,blue 20%,rgb(0, 0, 0))",
        }}
      >
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>
      <div
        class="cup"
        style={{
          background:
            "linear-gradient(to bottom,#00000005,#00000005 60%,cyan 40%,rgb(0, 0, 0))",
        }}
      >
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>
    </div>
  );
}
export default App;
