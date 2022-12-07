import styles from './About.module.css'

import { Link } from 'react-router-dom'

const About = ()=>{

    return (
        <div className={styles.about}>
            <h2>Sobre o Novo <span>Blog</span></h2>
            <p>Projeto React com backend feito em firebase</p>
            <Link to="/posts/create" className='btn'>Criar Post</Link>
        </div>
    )
}

export default About