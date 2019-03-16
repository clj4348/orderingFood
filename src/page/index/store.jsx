import { createStore } from 'redux'
import reducer from './reducers/main.jsx' 
const store=createStore(reducer)
export default store