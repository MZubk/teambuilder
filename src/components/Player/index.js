import agentImages from "./Agents";
import "./Player.css";

const Player = ({ agent, player }) => {
  const agentData = agentImages[agent];
  const agentImage = agentData.image;
  const agentRole = agentData.role;
  return (
    <div className="player">
      <div className="header">
        <img src={agentImage} alt={agent} />
      </div>
      <div className="footer_player">
        <h4>{player}</h4>
        <h5>{agent}</h5>
        <p>{agentRole}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Player;
