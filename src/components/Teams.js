import React, { useState, useEffect } from "react";

function TeamStatistic() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://v3.football.api-sports.io/teams/statistics?season=2021&team=42&league=39",
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "52d8d1925c80e27cad5492cb00d1607a"
          }
        }
      );
      const data = await response.json();
      setStats(data.response[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Stats are:", stats);
  }, [stats]);

  if (!stats) {
    return <div>Loading...</div>;
  }

  const { games, wins, draws, loses, goals, goalsAgainst, cleanSheet } = stats.statistics[0];

  return (
    <div>
      <h1>Team Stats for Arsenal</h1>
      <ul>
        <li>Games Played: {games.played.total}</li>
        <li>Wins: {wins.total}</li>
        <li>Draws: {draws.total}</li>
        <li>Losses: {loses.total}</li>
        <li>Goals For: {goals.for}</li>
        <li>Goals Against: {goalsAgainst.total}</li>
        <li>Clean Sheets: {cleanSheet.total}</li>
      </ul>
    </div>
  );
}

export default TeamStatistic;
