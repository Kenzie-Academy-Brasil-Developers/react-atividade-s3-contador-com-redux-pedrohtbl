import { useSelector } from "react-redux"

const Display = () =>{
    const counter = useSelector(store => store.counter)
    
    return(
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

export default Display