import axios from "axios";
import { useEffect, useState } from "react";
import HedyRecipeCard from "./HedyRecipeCard.jsx";

function App() {
  const [recipes, setRecipes] = useState([]);

  // CRUD : CREATE / READ / UPDATE / DELETE
  //         POST     GET    PUT     DELETE
  const fetchDBS = () => {
    axios
      .get(`https://dragonball-api.com/api/characters`)
      .then((res) => setRecipes(res.data.items)) // Correction ici
      .catch((error) =>
        console.error("Erreur lors de la récupération :", error)
      ); // Ajout de gestion d'erreur
  };
  fetchDBS;
  console.log(recipes);
  useEffect(() => {
    fetchDBS();
  }, []);

  return (
    <>
      <div className="flex space-x-6 m-6 flex-wrap">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <HedyRecipeCard
                key={recipe.id}
                name={recipe.name}
                image={recipe.image}
                ki={recipe.ki}
                maxKi={recipe.max_ki}
                race={recipe.race}
                gender={recipe.gender}
                affiliation={recipe.affiliation}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
