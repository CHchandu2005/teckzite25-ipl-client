import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Backend_Url = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Default URL fallback

const TeamsContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: auto;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
`;
const Stats = () => {
  const [loading, setLoading] = useState(false);
  const [teamdata, setTeamData] = useState([]);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Backend_Url}/api/getTeams`);
      const data = await response.json();
      if (response.ok) {
        setTeamData(data);
      } else {
        toast.error("Failed to fetch team data.");
      }
    } catch (err) {
      toast.error("Error fetching team data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <TeamsContainer>
      <Content>
        <div className="min-h-screen text-white">
          <main className=" p-4 sm:p-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center glow-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Team Statistics
            </h2>

            <div className="relative overflow-hidden rounded-lg border border-cyan-500/30 card-rotate-y glass-effect">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {teamdata.length > 0 ? (
                    <table className="w-full text-sm">
                      {/* <thead>
                        <tr className="border-b border-cyan-500/30">
                          <th className="px-4 py-3 text-left font-medium">Team</th>
                          <th className="px-4 py-3 text-left font-medium">RemainingPurse(₹L)</th>
                          <th className="px-4 py-3 text-left font-medium">Batsmen</th>
                          <th className="px-4 py-3 text-left font-medium">Bowlers</th>
                          <th className="px-4 py-3 text-left font-medium">Allrounders</th>
                          <th className="px-4 py-3 text-left font-medium">Wicketkeepers</th>
                          <th className="px-4 py-3 text-left font-medium">Total Players</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamdata.map((team) => (
                          <tr key={team._id} className="border-b border-cyan-500/10 bg-cyan-500/5 transition-all hover-lift">
                            <td className="px-4 py-3 font-medium flex items-center space-x-3">
                              <img
                                src={`${team.teamID}.jpg`}
                                alt={team.teamID}
                                className="w-10 h-10 rounded-full"
                              />
                              <span>{team.teamID}</span>
                            </td>
                            <td className="px-4 py-3 font-mono text-cyan-400 glow-text">₹{team.remainingPurse}L</td>
                            <td className="px-4 py-3 font-mono">{team.batsmen}</td>
                            <td className="px-4 py-3 font-mono">{team.bowlers}</td>
                            <td className="px-4 py-3 font-mono">{team.allrounder}</td>
                            <td className="px-4 py-3 font-mono">{team.wicketkeeper}</td>
                            <td className="px-4 py-3 font-mono">{team.players.length}</td>
                          </tr>
                        ))}
                      </tbody> */}
                      <thead>
  <tr className="border-b border-cyan-500/30">
    <th className="px-4 py-3 text-center font-medium">Team</th>
    <th className="px-4 py-3 text-center font-medium">RemainingPurse(₹L)</th>
    <th className="px-4 py-3 text-center font-medium">Batsmen</th>
    <th className="px-4 py-3 text-center font-medium">Bowlers</th>
    <th className="px-4 py-3 text-center font-medium">Allrounders</th>
    <th className="px-4 py-3 text-center font-medium">Wicketkeepers</th>
    <th className="px-4 py-3 text-center font-medium">Total Players</th>
  </tr>
</thead>
<tbody>
  {teamdata.map((team) => (
    <tr key={team._id} className="border-b border-cyan-500/10 bg-cyan-500/5 transition-all hover-lift">
      <td className="px-4 py-3 font-medium flex items-center justify-center space-x-3">
        <img
          src={`${team.teamID}.jpg`}
          alt={team.teamID}
          className="w-10 h-10 rounded-full"
        />
        <span>{team.teamID}</span>
      </td>
      <td className="px-4 py-3 font-mono text-cyan-400 glow-text text-center align-middle">
        ₹{team.remainingPurse}L
      </td>
      <td className="px-4 py-3 font-mono text-center align-middle">{team.batsmen}</td>
      <td className="px-4 py-3 font-mono text-center align-middle">{team.bowlers}</td>
      <td className="px-4 py-3 font-mono text-center align-middle">{team.allrounder}</td>
      <td className="px-4 py-3 font-mono text-center align-middle">{team.wicketkeeper}</td>
      <td className="px-4 py-3 font-mono text-center align-middle">{team.players.length}</td>
    </tr>
  ))}
</tbody>

                    </table>
                  ) : (
                    <p className="text-center py-4 text-gray-400">No team data available.</p>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </Content>
    </TeamsContainer>
  );
};

export default Stats;
