import React, { useEffect, useState } from "react"
import api from '../../services'



export function Main() {

    const [list, setList] = useState([])

    useEffect (() => {
        api.get()
        .then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return (
        <div>
            {list.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}