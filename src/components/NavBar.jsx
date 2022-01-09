import React,{useState} from 'react'

import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'

function NavBar({cartNum,iznos}) {
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <div className="navBar">

            <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <FaBars onClick={showSidebar}/>
            </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
            <br/>
            <pre>     Ukupan broj rezervacija:</pre>
            <br/>
            <p className='br-rez'>{cartNum}</p>

            <pre>     Ukupan iznos:</pre>
            <br/>
            <p className='br-rez'>{iznos}</p>
           
        </div>
    )
}

export default NavBar