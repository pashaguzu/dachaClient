import React from 'react'
import {Route, Link} from 'react-router-dom'
import {
    asyncServices,
    asyncGallery,
    asyncStartPage,
    asyncTeam
} from '../../routes';

export const UserRoutes = ({store}) => {
    return (
        <React.Fragment>
            <Route exact path="/" component={asyncStartPage(store)}/>
            <Route path="/works" component={asyncServices(store)}/>
            <Route path="/gallery" component={asyncGallery(store)}/>
            <Route path="/team" component={asyncTeam(store)}/>
        </React.Fragment>
    )
}