import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReduser } from "./todoReducer";
import { counterReducer } from "./counterReduser";


//? Tek Reduser'da :
// export const store = createStore(countReduser)

//? birden fazla Reduser'da  :
//? birden fazla reduser objesini combine Reduser ile birleştriyor. Adı da best practice rootReduser ADI VERİLİYOR.
//* combineReducers({
//*   counter: counterReducer,
//*   todo: todoReducer,
//* })

const rootReduser = combineReducers({
    counter: counterReducer,
    todo: todoReduser,
});

export const store = createStore(rootReduser);
