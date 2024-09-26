// function HedyRecipeCard(recipe) {
//   // Destructure the recipe object
//   const {
//     name,
//     image,
//     description,
//     servings,
//     prepTime,
//     cookTime,
//     ingredients,
//     instructions,
//   } = recipe;

//   // State to manage the visibility of ingredients and instructions
//   const [showIngredients, setShowIngredients] = useState(false);
//   const [showInstructions, setShowInstructions] = useState(false);

//   // Function to toggle ingredient visibility
//   const toggleIngredients = () => {
//     setShowIngredients((prev) => !prev);
//   };

//   // Function to toggle instruction visibility
//   const toggleInstructions = () => {
//     setShowInstructions((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="max-w-sm mx-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white border-4 border-gray-500 rounded-lg p-4 ">
//         <h1 className="text-2xl font-bold italic text-center mb-4">{name}</h1>
//         <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
//           {description}
//         </p>
//         <div>
//           <p>Nombre de personnes : {servings}</p>
//           <p>Temps de preparation : {prepTime}</p>
//           <p>Temps de cuisson : {cookTime}</p>
//         </div>
//         <img
//           src={image}
//           alt={name}
//           className="w-48 h-48 object-cover rounded-lg border-2 border-gray-300 shadow-lg mx-auto mb-4"
//         />
//         <div className="text-center">
//           {/* Button to toggle ingredient visibility */}
//           <button
//             onClick={toggleIngredients}
//             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           >
//             {showIngredients
//               ? "Masquer les ingrédients"
//               : "Afficher les ingrédients"}
//           </button>

//           {/* Conditional rendering of ingredients */}
//           {showIngredients && (
//             <ul className="mt-4 text-left">
//               {ingredients.map((ingredient, index) => (
//                 <li key={index} className="mb-2">
//                   {ingredient.quantity} {ingredient.name}
//                   {ingredient.preparation && ` (${ingredient.preparation})`}
//                   {ingredient.optional && " (optionnel)"}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Button to toggle instruction visibility */}
//           <button
//             onClick={toggleInstructions}
//             className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           >
//             {showInstructions
//               ? "Masquer les instructions"
//               : "Afficher les instructions"}
//           </button>

//           {/* Conditional rendering of instructions */}
//           {showInstructions && (
//             <ol className="mt-4 text-left">
//               {instructions.map((instruction) => (
//                 <li key={instruction.step} className="mb-2">
//                   {instruction.description}
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default HedyRecipeCard;

// function HedyRecipeCard({ name, image, ki, maxKi, race, gender, affiliation }) {
//   return (
//     <>
//       <div className="max-w-sm mx-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white border-4 border-gray-500 rounded-lg p-4 ">
//         <img
//           src={image}
//           alt={name}
//           className="w-48 h-48 object-cover rounded-lg border-2 border-gray-300 shadow-lg mx-auto mb-4"
//         />
//         <h1 className="text-2xl font-bold italic text-center mb-4">{name}</h1>
//         <div>
//           <p>ki : {ki}</p>
//           <p>maxKi : {maxKi}</p>
//           <p>race : {race}</p>
//           <p>gender : {gender}</p>
//           <p>affiliation : {affiliation}</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HedyRecipeCard;

function HedyRecipeCard({ name, image, ki, maxKi, race, gender, affiliation }) {
  return (
    <>
      <div className="grid p-4 gap-8 mx-auto max-w-[1400px] place-content-center place-items-center  bg-[#272b33] m-10 p-10 rounded-md">
        <article className="w-[280px] flex flex-col bg-[#3c3e44] rounded-md m-3 cursor-pointer shadow-md">
          <div className="w-full relative bg-[url('images-compress/89980.webp')] bg-center bg-cover bg-white min-h-[350px] max-h-[350px] rounded-t-lg">
            <img
              src={image}
              alt={name}
              className="absolute top-[-20px] w-full h-full min-h-[400px] max-h-[400px] m-0 object-center object-contain z-0 transition-transform duration-600"
            />
          </div>
        </article>
        <div className="w-[280px] flex flex-col bg-[#dddddd] rounded-md m-3 cursor-pointer shadow-md p-5">
          <div>
            <div>
              <h1>{name}</h1>
            </div>
            <div>
              <p>ki : {ki}</p>
              <p>maxKi : {maxKi}</p>
              <p>race : {race}</p>
              <p>gender : {gender}</p>
              <p>affiliation : {affiliation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HedyRecipeCard;
