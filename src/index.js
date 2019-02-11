import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CatFood from './components/catFood';
import DogFood from './components/dogFood';

ReactDOM.render((
        <BrowserRouter>
          <div>
            <Route path="/" component={App} exact />
            <Route path="/catfood" component={CatFood} />
            <Route path="/dogfood" component={DogFood} />
          </div>
        </BrowserRouter>

),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
