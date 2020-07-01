import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SearchAppBar } from './search-bar';
import { Preview } from './preview';
import { SearchResults } from './search-results';

export const App = () => {
  return <Router>
            <SearchAppBar />
            <Switch>
              <Route path="/searchPhotos" children={<><SearchResults /></>} />
              <Route path="/" children={<><Preview /></>} />
            </Switch>
        </Router>;
}
