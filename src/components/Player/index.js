import agentImages from "../Agents";
import "./Player.css";

const Player = ({ agent, player }) => {
  const agentData = agentImages[agent];
  const agentImage = agentData.image;
  const agentRole = agentData.role;
  return (
    <div className="player">
      <div className="player_header">
        <img className="player_img" src={agentImage} alt={agent} />
      </div>
      <div className="player_footer">
        <h4 className="player_name">{player}</h4>
        <h5 className="player_agent">{agent}</h5>
        <p className="player_role">{agentRole}</p>
      </div>
    </div>
  );
};

export default Player;
