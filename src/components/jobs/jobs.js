import React from 'react';
import {Link} from 'react-router-dom'
import SidebarExampleVisible from '../commons/sidebar'

// const Jobs=()=>(
    
//     <div>
//     <SidebarExampleVisible/>
//     <b>dhjsdhsjdsdhsjdhsjd</b>
//     </div>
// )

// export default Jobs;

export default () => {
    return (
      <div>
          <li><Link to='/'>Home</Link></li>
        <b>XYZ</b>
      </div>
    )
  }