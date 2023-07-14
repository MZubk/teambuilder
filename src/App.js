import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { nanoid } from "nanoid";

function App() {
  const agentList = [
    {
      name: "Astra",
    },
    {
      name: "Breach",
    },
    {
      name: "Brimstone",
    },
    {
      name: "Chamber",
    },
    {
      name: "Cypher",
    },
    {
      name: "Deadlock",
    },
    {
      name: "Fade",
    },
    {
      name: "Jett",
    },
    {
      name: "Kayo",
    },
    {
      name: "Killjoy",
    },
    {
      name: "Neon",
    },
    {
      name: "Omen",
    },
    {
      name: "Phoenix",
    },
    {
      name: "Raze",
    },
    {
      name: "Reyna",
    },
    {
      name: "Sage",
    },
    {
      name: "Skye",
    },
    {
      name: "Sova",
    },
    {
      name: "Viper",
    },
    {
      name: "Yoru",
    },
  ];

  const [mapsList] = useState([
    {
      id: nanoid(),
      name: "Ascent",
      background: "#404373",
    },
    {
      id: nanoid(),
      name: "Bind",
      background: "#8C715A",
    },
    {
      id: nanoid(),
      name: "Breeze",
      background: "#2F4959",
    },
    {
      id: nanoid(),
      name: "Fracture",
      background: "#2F402B",
    },
    {
      id: nanoid(),
      name: "Haven",
      background: "#524059",
    },
    {
      id: nanoid(),
      name: "Icebox",
      background: "#465E8C",
    },
    {
      id: nanoid(),
      name: "Lotus",
      background: "#2F5259",
    },
    {
      id: nanoid(),
      name: "Pearl",
      background: "#266B73",
    },
    {
      id: nanoid(),
      name: "Split",
      background: "#203440",
    },
  ]);

  const [players, setPlayers] = useState([]);
  const onNewPlayers = (player) => {
    setPlayers([...players, player]);
  };

  function onDelete(id) {
    setPlayers(players.filter((player) => player.id !== id));
  }

  return (
    <div className="App">
      <Banner />
      <Form
        mapList={mapsList.map((mapList) => mapList.name)}
        agentList={agentList}
        onNewPlayers={(player) => onNewPlayers(player)}
      />
      <section className="team">
        {mapsList.map((mapsList) => (
          <Team
            key={mapsList.id}
            name={mapsList.name}
            background={mapsList.background}
            players={players.filter(
              (player) => player.mapsList === mapsList.name
            )}
            onDelete={onDelete}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
export default App;
