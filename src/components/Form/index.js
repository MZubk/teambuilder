import { useState } from "react";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import Button from "../Button";
import "./Form.css";

const Form = ({ onNewPlayers, agentList, mapList }) => {
  const [name, setName] = useState("");
  const [agent, setAgent] = useState("");
  const [mapsList, setMapsList] = useState("");

  const onSaved = (event) => {
    event.preventDefault();
    onNewPlayers({
      name,
      agent,
      mapsList,
    });
    setName("");
    setAgent("");
    setMapsList("");
  };

  return (
    <section className="container_form">
      <form onSubmit={onSaved} className="form">
        <h2 className="form_title">Preencha os dados e monte o seu Time.</h2>
        <TextField
          required={true}
          label="Player"
          placeholder="Nome do Player"
          value={name}
          onAltered={(value) => setName(value)}
        />
        <DropdownList
          required={true}
          label="Agente"
          items={agentList.map((agent) => agent.name)}
          value={agent}
          onAltered={(value) => setAgent(value)}
          placeholder="Selecione um Agente"
        />
        <DropdownList
          required={true}
          label="Mapa"
          items={mapList}
          value={mapsList}
          onAltered={(value) => setMapsList(value)}
          placeholder="Selecione um Mapa"
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
