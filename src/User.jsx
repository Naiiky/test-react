const User = ({ name, age, gender, img }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{gender}</p>
      <img src={img} alt="avatar" />
    </>
  );
};

export default User;
