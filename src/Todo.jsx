import React,{useState} from 'react';

function Todo() {
    const [input,setInput]=useState("")
    const [arr,setArray]=useState([])
    return ( 
        <div>
            <h1>TODO APP</h1>
            <input onChange={(e)=>{
                    setInput(e.target.value)
            }} type="text" value={input}/>
            <button onClick={()=>{
                setArray((prev)=>{
                    return [...prev,input]
                })
            }}>Add</button>
            {
                arr.map((element)=>{return(
                    <div>
                <h2>{element}</h2>
                <input onClick={()=>{
                    setArray((prev)=>{
                        return prev.filter((item) => item !== element)
                    }) 
                }} type="checkbox"/>
            </div>)
                })
            }
        </div>
     );
}

export default Todo ;