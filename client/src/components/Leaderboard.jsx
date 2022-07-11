import { useState, useEffect } from "react";
import EachPosition from "./EachPosition";

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
    <div className="list">
      {leaderboardPositions.map((couple, index) => (
        <EachPosition key={index} couple={couple} />
      ))}
    </div>
  );
}
