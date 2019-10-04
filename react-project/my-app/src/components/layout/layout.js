import React from 'react'
import './layout.css';
import DBNavigation from '../dbNavigation/dbNavigation';


const Layout = ({children}) => { 
    return (
      <div>
          
          <DBNavigation/>{children}
     
      </div>
      )
    }
export default Layout;
