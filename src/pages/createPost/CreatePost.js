import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePost = ()=>{

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return(
        <div className={styles.create_post}>
            <h2>Criar Post</h2>
            <p>Compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" required placeholder='Coloque Seu Título' onChange={(e)=> setTitle(e.target.value)} value={title}/>
                </label>
                <label>
                    <span>URL da Imagem:</span>
                    <input type="text" name="image" required placeholder='Insira Uma Imagem' onChange={(e)=> setImage(e.target.value)} value={image}/>
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea name='body' required placeholder='Insira o Conteúdo do Post' onChange={(e)=> setBody(e.target.value)} value={body}></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input type="text" name="tags" required placeholder='Insira suas Tags' onChange={(e)=> setTags(e.target.value)} value={tags}/>
                </label>
               
            </form>
        </div>
    )
}

export default CreatePost