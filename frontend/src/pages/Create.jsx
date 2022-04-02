import urlcat from "urlcat";
import {useState} from "react"

const BACKEND = process.env.REACT_APP_BACKEND

const url = urlcat(BACKEND, "/api/holidays");

function Create() {
  const [error, setError] = useState("")

  const handleCreate = (holiday) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holiday),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        }
      }).catch(error => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const {name, likes} = form;
    const holidays = { name: form.name.value, likes: form.likes.value};
    handleCreate(holidays)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" />
        <br></br>
        Likes: <input type="number" name="likes" />
        <br></br>
        <button>Create</button>
      </form>
      <p>{error}</p>
    </div>
  );
}

export default Create;
