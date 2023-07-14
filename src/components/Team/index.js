import Player from "../Player";
import "./Team.css";

const Team = ({ name, background, players, onDelete }) => {
  return (
    players.length > 0 && (
      <section className="team" style={{ backgroundColor: background }}>
        <h3 className="team_title">{name}</h3>
        <div className="players">
          {players.slice(0, 5).map((player) => {
            return (
              <Player
                key={player.name}
                id={player.id}
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
    )
  );
};

export default Team;
