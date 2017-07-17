import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Mars from './containers/Mars/Mars';
import Photo from './containers/Photo/Photo';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="mars" component={Mars}/>
        <Route path="photo" component={Photo}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
