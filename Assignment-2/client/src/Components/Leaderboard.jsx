import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/leaderboard');
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Total Games Played</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((team, index) => (
            <tr key={index}  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td>{index < 3 ? <span className="badge"></span> : null} : {index + 1}</td>
              <td className="team-info">
                <img src={team.avatar} alt="Team Avatar" className="team-avatar" />
                <span>{team.teamName}</span>
              </td>
              <td>{team.totalGamesPlayed}</td>
              <td>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
