import {useEffect, useState} from "react"
import urlcat from "urlcat"

// const BACKEND = process.env.REACT_APP_BACKEND;

function HolidayList() {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch("https://holidayapp-backend.herokuapp.com/api/holidays")
        .then(res => res.json())
        .then((data) => {setHolidays(data)})
    }, []);

    const handleDelete = (id) => {
        const url = urlcat(`https://holidayapp-backend.herokuapp.com/api/holidays/${id}`)
        fetch (url, {method: "DELETE"})
        .then((res) => res.json())
        .the((data) => setHolidays(data))
    }

    return (
        <>
            {holidays.map(el => {
                <li key={el.id}>
                    <a href="">{el.name}</a>
                    {/* <span onClick={handleDelete(el._id)}>Delete</span> */}
                </li>
            })}
        </>
    )

}

export default HolidayList;