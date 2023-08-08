import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import {
    //CLR, 
    //DEC, 
    //INC,
    clear,
    decrement,
    increment,
} from "../../store/counterReduser";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
        <div className="app">
            <h2 className="counter-header">Counter With Redux</h2>
            <h1>counter:{count}</h1>
            <div>
                <button
                    className="counter-button positive"
                    // onClick={()=> dispatch({type:"DEC"})} //!strıng hali
                    // onClick={()=> dispatch({type:DEC})} //!degişkene atayarak
                    onClick={() => dispatch(decrement())} //!fonksiyon olusturarak
                >
                    increase
                </button>
                <button
                    className="counter-button zero"
                    // onClick={()=> dispatch({type:"CLR"})}
                    // onClick={()=> dispatch({type:CLR})}
                    onClick={() => dispatch(clear())}
                >
                    reset
                </button>
                <button
                    className="counter-button negative"
                    // onClick={()=> dispatch({type:"INC"})}
                    // onClick={()=> dispatch({type:INC})}
                    onClick={() => dispatch(increment())}
                >
                    decrease
                </button>
            </div>
        </div>
    );
};

export default Counter;
