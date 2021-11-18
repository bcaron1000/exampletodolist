/*
        React Events
*/ 


import {useState} from 'react'
function Counter(props){
    const [count, setCount] = useState(12)

    function handleClick(e){
        setCount(count++)
    }

    return(
        <div>
            <div>{count}</div>
        <button onClick={()=>setCount(count++)}>increment</button>
        </div>
    )
}
export default Counter