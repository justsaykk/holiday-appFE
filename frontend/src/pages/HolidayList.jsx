import {useEffect, useState} from "react"
import urlcat from "urlcat"

const BACKEND = process.env.REACT_APP_BACKEND;

function HolidayList() {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch(urlcat(BACKEND, "/api/holidays"))
        .then(res => res.json())
        .then((data) => {setHolidays(data)})
    }, []);

    return (
        <>
            {holidays.map(el => {
                <li key={el.id}>
                    <a href="">{el.name}</a>
                    <a href="">Delete</a>
                </li>
            })}
        </>
    )

}

export default HolidayList;