import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let update = () => {
        dispatch({
            type: "USER",
            user: [1,2,3,4,5]
        })
    }
    
    return (
        <div>
            <h1>{state.name}</h1>
            <h1>{state.user[1]}</h1>

            {state.user == 0 ? <p>Press button</p> : state.user.map((v, i) => <p key={i}>{v}</p>)}

            <button onClick={update}>Update</button>
        </div>
    )
}
