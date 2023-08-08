import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"

const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((state) => state.count)


return (
<div className="app">
<h2 className="counter-header">Counter With Redux</h2> 
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive"
        onClick={()=> dispatch({type:"DEC"})}
        >increase</button>
        <button className="counter-button zero"
        onClick={()=> dispatch({type:"CLEAR"})}
        >reset</button>
        <button className="counter-button negative"  
        onClick={()=> dispatch({type:"INC"})}
        >decrease</button>
      </div>
    </div>
  )
}

export default Counter
