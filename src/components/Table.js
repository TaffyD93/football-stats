import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PremierLeagueTable = () => {
    const [tableData, setTableData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    const fetchTableData = async () => {
      const config = {
        method: 'get',
        url: 'https://v3.football.api-sports.io/standings',
        headers: {
          'x-rapidapi-key': '52d8d1925c80e27cad5492cb00d1607a',
          'x-rapidapi-host': 'v3.football.api-sports.io',
        },

        params: {
          league: 39,
          season: 2021,
        },
      };

      try {
        const response = await axios(config);
        setTableData(response.data.response[0].league.standings[0].map((teamData) => {
          return {
            rank: teamData.rank,
            name: teamData.team.name,
            played: teamData.all.played,
            win: teamData.all.win,
            draw: teamData.all.draw,
            lose: teamData.all.lose,
            goalsFor: teamData.all.goals.for,
            goalsAgainst: teamData.all.goals.against,
            goalDifference: teamData.goalsDiff,
            points: teamData.points,
          }
        }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTableData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTableData = tableData.filter((teamData) => {
    return teamData.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2 className="header">Premier League Table</h2>
      <div className="filter-container">
        <input className="filter-input" type="text" placeholder="Search for a team" value={searchTerm} onChange={handleSearch} />
      </div>
      <table className="leaguetable">
        <thead>
          <tr className="columns">
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {filteredTableData.map((teamData) => (
            <tr className="rows" key={teamData.name}>
              <td>{teamData.rank}</td>
              <td>{teamData.name}</td>
              <td>{teamData.played}</td>
              <td>{teamData.win}</td>
              <td>{teamData.draw}</td>
              <td>{teamData.lose}</td>
              <td>{teamData.goalsFor}</td>
              <td>{teamData.goalsAgainst}</td>
              <td>{teamData.goalDifference}</td>
              <td>{teamData.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PremierLeagueTable;
