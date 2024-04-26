import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';
import cup1 from '../Images/1st-cup.png'
import cup2 from '../Images/2nd-cup.png'
import cup3 from '../Images/3rd-cup.png'

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/leaderboard');
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
            <th className='HeaderTeamName'>Team Name</th>
            <th>Total Games Played</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((team, index) => (
            <tr key={index}  className={index % 2 === 0 ? 'bg-white' : 'bg-anotherColour'}>
              <td className='Rank'>{index < 3 ? (
            <img
                src={index === 0 ? cup1 : index === 1 ? cup2 : cup3}
                alt= "Error"
                className="badge"
            />
            ) : (
                <span className="index">{index + 1}</span>
            )}</td>
              <td className="team-info">
              <img src={`Avatars/${team.avatar}`} alt="Team Avatar" className="team-avatar" />
                <span className='teamName'>{team.teamName}</span>
              </td>
              <td className='gamesPlayed'>{team.totalGamesPlayed}</td>
              <td>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
