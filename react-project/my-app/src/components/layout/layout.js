import React from 'react'
import DBNavigation from '../dbNavigation/dbNavigation';

// This component ensures that the dashboard navigation is present on all dashboard pages at the top of the page

const Layout = ({children}) => { 
    return (
      <div>
          <DBNavigation/>{children}
      </div>
    )
}
export default Layout;
