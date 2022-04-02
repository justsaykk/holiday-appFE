import { useEffect, useState } from "react";
import "dotenv/config";

const BACKEND = process.env.BACKEND;

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND}/api/holidays/seed`)
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
