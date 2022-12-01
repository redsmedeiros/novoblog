import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = ()=>{

    return (
        <nav>
            <NavLink to='/'>Novo <span>Blog</span></NavLink>
        </nav>
    )
}

export default Navbar