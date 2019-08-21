import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/layout'
/*  
import ContentDBBooks from './components/contentDBBooks/contentDBBooks'
import ContentDBHome from './components/contentDBHome/contentDBHome'
*/
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import DBLanding from './components/dbLanding/dbLanding';
import DBReadBooks from './components/dbReadBooks/dbReadBooks';

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
                    {/* 
                   
                    <Route path='/dbBooksRead' component={} />
                    <Route path='/dbViewBook' component={} />
                    <Route path='/dbAddBook' component={} />
                    <Route path='/dbAddNote' component={} />
                    <Route path='/dbViewNote' component={} />
                    */}
                   {/*<Route component={NotFound} status={404} />*/}
                  </Switch>
                </Layout> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
