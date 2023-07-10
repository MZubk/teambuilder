import Player from "../Player";
import "./Team.css";

const Team = (team, onDelete) => {
  return team.players.length > 0 ? (
    <section className="team" style={{ backgroundColor: team.background }}>
      <h3 className="team_title">{team.name}</h3>
      <div className="players">
        {team.players.slice(0, 5).map((player) => {
          return (
            <Player
              key={player.name}
              imagem={player.imagem}
              player={player.name}
              agent={player.agent}
              mapsList={player.mapsList}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
