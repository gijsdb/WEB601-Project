import React from 'react';
import './App.css';
import Layout from './components/layout/layout'
/*  
import ContentDBBooks from './components/contentDBBooks/contentDBBooks'
import ContentDBHome from './components/contentDBHome/contentDBHome'
*/
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import DBLanding from './components/dbLanding/dbLanding';
import DBReadBooks from './components/dbReadBooks/dbReadBooks';
import DBAddBook from './components/dbAddBook/dbAddBook';
import DBBook from './components/dbBook/dbBook';
import DBNote from './components/dbNote/dbNote';
import DBAddNote from './components/dbAddNote/dbAddNote';

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
      <Switch>
          {/*<Route path='/dashboardHome' component={ContentDBHome} /> */}
                <Layout>
                  <Switch>
                    <Route path='/dblanding' component={DBLanding} /> 
                    <Route path='/dbreadbooks' component={DBReadBooks} />
                    <Route path='/dbaddbook' component={DBAddBook} />
                    <Route path='/dbbook' component={DBBook} />
                    <Route path='/dbnote' component={DBNote} />
                    <Route path='/dbaddnote' component={DBAddNote} />
                   {/*<Route component={NotFound} status={404} />*/}
                  </Switch>
                </Layout> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
