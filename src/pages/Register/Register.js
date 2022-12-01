import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = ()=>{

    const [displayName, setDisplayName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = (e)=>{

        e.preventDefault()
    }

    return(
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu Usuário para compartilhar histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name='displayName' required placeholder='Nome do Usuário' value={displayName} onChange={(e)=>{ setDisplayName(e.target.value)}} />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name='emal' required placeholder='Email do Usuário' value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name='password' required placeholder='Insira sua Senha' value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
                </label>
                <label>
                    <span>Confirme sua Senha:</span>
                    <input type="password" name='confirmPassword' required placeholder='Confirme sua Senha' value={confirmPassword} onChange={(e)=>{ setConfirmPassword(e.target.value)}} />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register