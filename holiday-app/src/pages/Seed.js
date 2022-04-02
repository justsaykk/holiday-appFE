import { useEffect, useState } from "react";
import urlcat from "urlcat";
import "dotenv/config";

const BACKEND = process.env.REACT_APP_BACKEND;
console.log(BACKEND);
function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(urlcat(BACKEND, "/api/holidays/seed"))
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
