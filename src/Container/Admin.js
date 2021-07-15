import React, { useState } from 'react'
import firebase from '../Config/Firebase'

export const Admin = () => {
    const [name, setname] = useState("")
    const [father, setfather] = useState("")
    const [rollno, setrollno] = useState("")
    const send = () => {
        let studentdata = {
            name,
            father,
            rollno
        }
        firebase.database().ref("StudentData").push(studentdata)
        setname("")
        setfather("")
        setrollno("")
    }

    return (
        <div className="container">
            <div>
                <input onChange={(e) => setname(e.target.value)} value={name} className="mt-3" type="text" name="" id="" placeholder="Enter student name" />
            </div>
            <div>
                <input onChange={(e) => setfather(e.target.value)} value={father} className="mt-3" type="text" name="" id="" placeholder="Enter father name" />
            </div>
            <div>
                <input onChange={(e) => setrollno(e.target.value)} value={rollno} className="mt-3" type="number" name="" id="" placeholder="Enter roll no" />
            </div>
            <div>
                <button onClick={send} className="btn btn-dark mt-3">Add</button>
            </div>
        </div>
    )
}
