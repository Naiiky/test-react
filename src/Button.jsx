import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 5);
  };

  const decrementCount = () => {
    setCount(count - 5);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={incrementCount}>Incrémenter de 5</button>

      <button onClick={decrementCount}>Décrémenter de 5</button>
    </div>
  );
};

export default Button;
