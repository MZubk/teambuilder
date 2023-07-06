import Player from "../Player";
import "./Team.css";

const Team = (props) => {
  return props.players.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.background }}>
      <h3>{props.name}</h3>
      <div className="players">
        {props.players.slice(0, 5).map((player) => (
          <Player
            key={player.name}
            imagem={player.imagem}
            player={player.name}
            agent={player.agent}
            mapsList={player.mapsList}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
