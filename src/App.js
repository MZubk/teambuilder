import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

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

  const mapsList = [
    {
      name: "Ascent",
      background: "#404373",
    },
    {
      name: "Bind",
      background: "#8C715A",
    },
    {
      name: "Breeze",
      background: "#2F4959",
    },
    {
      name: "Fracture",
      background: "#2F402B",
    },
    {
      name: "Haven",
      background: "#524059",
    },
    {
      name: "Icebox",
      background: "#465E8C",
    },
    {
      name: "Lotus",
      background: "#2F5259",
    },
    {
      name: "Pearl",
      background: "#266B73",
    },
    {
      name: "Split",
      background: "#203440",
    },
  ];

  const [players, setPlayers] = useState([]);
  const newPlayerRegistered = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        mapList={mapsList.map((mapList) => mapList.name)}
        agentList={agentList}
        newPlayerRegistered={(player) => newPlayerRegistered(player)}
      />
      {mapsList.map((mapsList) => (
        <Team
          key={mapsList.name}
          name={mapsList.name}
          background={mapsList.background}
          players={players.filter(
            (player) => player.mapsList === mapsList.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
