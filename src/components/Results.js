import React, { useState, useEffect } from 'react';

function ResultsList() {
  const [fixtures, setFixtures] = useState([]);
  const [filteredFixtures, setFilteredFixtures] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetchFixtures();
  }, []);

  useEffect(() => {
    setFilteredFixtures(
      fixtures.filter((fixture) => fixture.fixture.date.includes(filterDate))
    );
  }, [filterDate, fixtures]);

  async function fetchFixtures() {
    const response = await fetch(
      'https://v3.football.api-sports.io/fixtures?league=39&season=2021',
      {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': '52d8d1925c80e27cad5492cb00d1607a',
        },
      }
    );
    const data = await response.json();
    setFixtures(data.response);
  }

  function handleFilterChange(e) {
    setFilterDate(e.target.value);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  
  return (
    <><div>
          <h2 className="header">English Premier League 2021 Fixtures and Results</h2>
      </div>
      <div>
          <div className="filter-container">
              <label className="date-filter-text" htmlFor="date-filter">Filter by date:</label>
              <input className="filter-input" type="date" value={filterDate} onChange={handleFilterChange} />
              </div>
              <ul className="all-fixtures">
                  {filteredFixtures.map((fixture) => (
                      <li className="fixtures" key={fixture.fixture.id}>
                          {formatDate(fixture.fixture.date)} -{' '}
                          {fixture.teams.home.name} {fixture.goals.home} vs {fixture.goals.away} {fixture.teams.away.name}
                      </li>
                  ))}
              </ul>
          </div></>
  );
}

export default ResultsList;

