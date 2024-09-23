import Button from "./Button";

const User = () => {
  const info = {
    name: "Hedy",
    lastName: "Dauvergne",
    age: 26,
    country: "France",
  };
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>
            Hello my name is {info.name} {info.lastName}
          </h1>
          <p>
            I am a student from {info.country}, I love coding and I am{info.age}{" "}
            year old.
          </p>
          <p>I am developping a website with React</p>
          <Button />
        </>
      ) : (
        <>
          <h1>You are not authenticated</h1>
        </>
      )}
    </>
  );
};

export default User;
