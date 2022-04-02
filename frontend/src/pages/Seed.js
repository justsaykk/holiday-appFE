import { useEffect, useState } from "react";
import urlcat from "urlcat";
// import "dotenv/config";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/api/holidays");

function Create() {
  const handleCreate = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <button onClick={handleCreate}>Create</button>
    </>
  );
}

export default Seed;
