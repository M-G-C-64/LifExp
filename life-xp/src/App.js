import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timeRemaining, setTimeRemaining] = useState(null);

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
        <div class="countdown">{timeRemaining}</div>
        <Expbar />
      </header>
      <body></body>
    </div>
  );
}

function Expbar() {
  return (
    <div className="Expbar">
      {/* <div className="expbar-description">Life EXP Points</div> */}
      <div className="expbar-in">
        <div className="expbar-val" style={{ width: "10%" }}></div>
      </div>
    </div>
  );
}

export default App;
