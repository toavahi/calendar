import {useState} from 'react';
import create from '../app/createMonth';

export default function Home(){
    const [calendar, setCal] = useState([]);

    function addCal(date){
        setCal(create(date));
    }

    return(<div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "12px",
        maxWidth: "320px",
        fontFamily: "Arial, sans-serif"
      }}>
        <input type="month" onChange={e => addCal(e.target.value)}></input>
        <div>
            {calendar.map(day => (
                <h1>
                    <pre style={{flexGrow: 1, color: 'black'}}>{day}</pre>
                </h1>
            ))}
        </div>
    </div>);
}