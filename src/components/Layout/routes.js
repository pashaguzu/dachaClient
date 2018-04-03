import React from 'react'
import {Route, Link} from 'react-router-dom'
import {
    asyncServices
} from '../../routes';

export const UserRoutes = ({store}) => {
    return (
        <React.Fragment>
            <Route path="/works" component={asyncServices(store)}/>
        </React.Fragment>
    )
}