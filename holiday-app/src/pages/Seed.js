function Seed() {
  fetch("https://holidayapp-backend.herokuapp.com/api/holidays/seed")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <>
      <h1>seed</h1>
    </>
  );
}

export default Seed;
