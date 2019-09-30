import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const stateFilm = {
    tes: "Coba Redux"
}

//Reducer
const ReducerFilm = (state = stateFilm)=>{
    return state;
}

const store = createStore(ReducerFilm);

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
