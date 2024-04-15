import {useEffect, useState} from 'react'

export default function List(){

const [objects,setObjects] = useState([])

async function fetchObjects(){
    const response = await fetch('https://reactapi.pautinaweb.ru/objects.php')
    const objects = await response.json()
    setObjects(objects)
}

useEffect(() => {
    fetchObjects()
}, [])

return(
    <>
    
    <ul>
        {objects.map((object) => {
            return(
                <li>{object.name} <br /> {object.price} <br /> {object.description}</li>
            )
            
        })}
    </ul>
    
    </>
)

}