import React from 'react';
import {Link}  from 'react-router-dom'
const Header= ()=>(
    <div>
        <b>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/jobs'>Jobs</Link></li>
                <li><Link to='/xyz'>XYZ</Link> </li>
                <li><Link to='/dash'>DashBoard</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </b>
    </div>
)

export default Header; 