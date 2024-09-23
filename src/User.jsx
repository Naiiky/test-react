const User = () => {
  const myName = "Hedy Dauvergne";
  const myAge = 26;
  const myCountry = "France";

  return (
    <>
      <h1>Hello my name is {myName}</h1>
      <p>
        I am a student from {myCountry}, I love coding and I am {myAge} year
        old.
      </p>
      <p>I am developping a website with React</p>
    </>
  );
};

export default User;
