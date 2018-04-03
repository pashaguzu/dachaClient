import React from 'react';
import Layout from "../Layout";
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
var history = createBrowserHistory();
class App extends React.Component {

     render() {
        return (
            <div>
                <BrowserRouter history={history}>
                        <Layout />
                    </BrowserRouter>
            </div>
        );
    }
}

export default App;