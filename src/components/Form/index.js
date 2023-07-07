import { useState } from "react";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import Button from "../Button";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [agent, setAgent] = useState("");
  const [mapsList, setMapsList] = useState("");

  const onSaved = (event) => {
    event.preventDefault();
    props.newPlayerRegistered({
      name,
      agent,
      mapsList,
    });
    setName("");
    setAgent("");
  };

  return (
    <section className="form">
      <form onSubmit={onSaved}>
        <h2>Preencha os dados e monte o seu Time.</h2>
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
          items={props.agentList.map((agent) => agent.name)}
          value={agent}
          onAltered={(value) => setAgent(value)}
        />
        <DropdownList
          required={true}
          label="Mapa"
          items={props.mapList}
          value={mapsList}
          onAltered={(value) => setMapsList(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;