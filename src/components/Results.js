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
  
  return (
    <><div>
          <h2 className="header">English Premier League 2019 Fixtures and Results</h2>
      </div><div>
              <label htmlFor="date-filter">Filter by date:</label>
              <input
                  id="date-filter"
                  type="date"
                  value={filterDate}
                  onChange={handleFilterChange} />
              <ul className="allfixtures">
                  {filteredFixtures.map((fixture) => (
                      <li className="fixtures" key={fixture.fixture.id}>
                          {fixture.teams.home.name} vs {fixture.teams.away.name} -{' '}
                          {fixture.fixture.date}
                      </li>
                  ))}
              </ul>
          </div></>
  );
}

export default ResultsList;

