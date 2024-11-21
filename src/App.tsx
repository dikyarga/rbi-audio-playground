import { useState } from "react";
import "./App.css";

const audio = new Audio("http://taira-komori.jpn.org/sound/game01/coin01.mp3");

function App() {
  const [count, setCount] = useState(30);

  useState(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          audio.play();
          return 30; // Reset to 30 when reaching 0
        }
        return prevCount - 1;
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  });

  return (
    <>
      <h1>RBI playground - audio test</h1>
      <div className="card">
        <button onClick={() => audio.play()}>manual play</button>
        <p>Auto play in: {count}s</p>
      </div>
    </>
  );
}

export default App;
