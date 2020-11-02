import AllReducers from "../reducer"
import { createStore } from 'redux'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e)
        return undefined;
    }
  }; 

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    }  catch (e) {
        console.warn(e)
    }
  };

const persistedState = loadState();

//Buat Store untuk Redux
const store = createStore(
    AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store