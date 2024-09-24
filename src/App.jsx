import "./App.css";
import User from "./User";

function App() {
  const infoCharacter = [
    {
      name: "SanGoku",
      age: 45,
      gender: "Male",
      img: "https://pbs.twimg.com/media/DaCSte_WAAATznF?format=jpg&name=large",
    },

    {
      name: "Vegeta",
      age: 45,
      gender: "Male",
      img: "https://i.pinimg.com/736x/8f/7a/4e/8f7a4e665400c8cb6c4387d5b7655ac5.jpg",
    },

    {
      name: "Beerus",
      age: 999,
      gender: "Male",
      img: "https://ih1.redbubble.net/image.4743361110.5419/flat,750x,075,f-pad,750x1000,f8f8f8.webp",
    },

    {
      name: "Bulma",
      age: 35,
      gender: "Female",
      img: "https://wiki.rpgdbz.com/sites/default/files/styles/table/public/2019-12/bulma_dbs_profilo.png?itok=kE028wSF",
    },
  ];

  return (
    <>
      {infoCharacter.map((character, index) => {
        return <User key={index} {...character} />;
      })}
    </>
  );
}

export default App;
