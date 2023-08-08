import {legacy_createStore as createStore} from "redux" 
import { countReduser } from "./counterReduser"

export const store = createStore(countReduser)

