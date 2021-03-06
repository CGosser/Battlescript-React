import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';
import gameReducer from './reducers/gameReducer';

const store = createStore(gameReducer);

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <Component/>
      </Provider>,
    document.getElementById('root')
  );
};

render(App);
