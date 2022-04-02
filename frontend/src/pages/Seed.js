import { useEffect, useState } from "react";
import urlcat from "urlcat";
// import "dotenv/config";

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch("https://holidayapp-backend.herokuapp.com/api/holidays/seed")
      .then((res) => res.json())
      .then((data) => {
        setSeed(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>seed</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
