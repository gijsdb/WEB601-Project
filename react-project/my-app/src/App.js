import React from 'react';
import './App.css';
import Layout from './components/layout/layout'
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import DBLanding from './components/dbLanding/dbLanding';
import DBReadBooks from './components/dbReadBooks/dbReadBooks';
import DBAddBook from './components/dbAddBook/dbAddBook';
import DBBook from './components/dbBook/dbBook';
import DBNote from './components/dbNote/dbNote';
import DBAddNote from './components/dbAddNote/dbAddNote';
import Home from './components/home/home';
import DB404 from './components/db404/db404'

const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

// All the routes for my application, any route that is not one of the below routes will display the 404 page
// Using React Router ;)

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
      <Route path='/home' component={Home} /> 
      <Route exact path='/' component={Home} /> 
      <Layout>
             <Switch>
                  <Route path='/dblanding' component={DBLanding} /> 
                  <Route path='/dbreadbooks' component={DBReadBooks} />
                  <Route path='/dbaddbook' component={DBAddBook} />
                  <Route path='/dbbook/:id' component={DBBook} />
                  <Route path='/dbnote/:id' component={DBNote} />
                  <Route path='/dbaddnote' component={DBAddNote} />  
                  <Route component={DB404} status={404} />    
              </Switch>
        </Layout> 
      </BrowserRouter>
    </div>
  );
}

export default App;
