import { useState } from "react";

const Button = () => {
  // Déclaration du state 'count' initialisé à 0
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le state de 5
  const incrementCount = () => {
    setCount(count + 5);
  };

  // Fonction pour décrémenter le state de 5
  const decrementCount = () => {
    setCount(count - 5);
  };

  return (
    <div>
      {/* Affichage de la valeur actuelle de count */}
      <h1>Count: {count}</h1>

      {/* Bouton pour incrémenter de 5 */}
      <button onClick={incrementCount}>Incrémenter de 5</button>

      {/* Bouton pour décrémenter de 5 */}
      <button onClick={decrementCount}>Décrémenter de 5</button>
    </div>
  );
};

export default Button;
