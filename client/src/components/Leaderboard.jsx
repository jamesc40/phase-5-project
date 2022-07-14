import { useState, useEffect } from "react";
import EachPosition from "./EachPosition";
import "./leaderboard.css";

export default function Leaderboard() {
  const [leaderboardPositions, setLeaderboard] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      let req = await fetch("/leaderboards");
      if (!req.ok) {
        return;
      }

      let res = await req.json();
      setLeaderboard(res);
    };
    getLeaderboard();
  }, []);

  return (
    <div id="leaderboard-container">
      <h1 className="title is-1">Leaderboard</h1>
      <div className="list">
        {leaderboardPositions.map((couple, index) => (
          <EachPosition key={index} couple={couple} index={index} />
        ))}
      </div>
    </div>
  );
}
