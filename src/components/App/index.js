import React from 'react';
//import LoginForm from "../../routes/User/components/Login";
import Request from 'react-http-request';
class App extends React.Component {

     render() {
        return (
            <Request
                url='https://dachaserver.herokuapp.com/api/service/get'
                method='get'
                accept='application/json'
                verbose={true}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <div>loading...</div>;
                        } else {
                            return <div>{ JSON.stringify(result) }</div>;
                        }
                    }
                }
            </Request>
        );
    }
}

export default App;