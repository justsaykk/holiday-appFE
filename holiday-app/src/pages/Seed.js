import { useEffect, useState } from "react";
import "dotenv/config";

const REACT_APP_BACKEND = process.env.BACKEND;

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_BACKEND}/api/holidays/seed`)
      .then((res) => res.json())
      .then((data) => {
        setSeed(data);
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
