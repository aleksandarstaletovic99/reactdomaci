import React from 'react'

import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {ImFilm} from 'react-icons/im'
import {IosPaper} from 'react-icons/io'
import {AiFillPicture} from 'react-icons/ai'
export const SidebarData=[
    {
        title:'Pocetna strana',
        path:'/',
        icon:<AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Rezervacije',
        path:'/Cart',
        icon:<ImFilm/>,
        cName:'nav-text'
    },
    {
        title:'Slike bioskopa',
        path:'/Slike',
        icon:<AiFillPicture/>,
        cName:'nav-text'
    }
]
