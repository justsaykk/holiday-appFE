import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:2000";

const url = urlcat(BACKEND, "/api/holidays");
const data = { name: "mybirthday", likes: 10 };

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

export default Create;
