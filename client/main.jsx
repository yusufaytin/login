import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {createBrowserHistory} from "history";
import App from '../imports/ui/App';
import Info from '../imports/ui/Info';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from '../imports/reducers/loginReducers';
import {Router} from "react-router";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = createBrowserHistory();
Meteor.startup(() => {
    render(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={App}/>
                    <Route path={"/Info"} component={Info}/>
                </Switch>
            </Router>,
        </Provider>,
        document.getElementById('react-target')
    );

});
