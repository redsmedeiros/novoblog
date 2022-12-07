import {useState, useEffect, useReducer} from 'react'
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

//valor inicial estado reducer - valor das variaveis
const initialState = {
    loading: null,
    error: null
}

//passar estado e ação para o recuder
const insertReducer = (state, action)=>{
    switch(action.type){
        case 'LOADING':
            return {loading: true, error: null}
        case 'INSERTED_DOC':
            return {loading: false, error: null}
        case 'ERROR':
        default:
    }
}

export const useInsertDocument = (docCollection)=>{

    const [response, dispatch] = useReducer(insertReducer, initialState)

    //vazamento de memoria
    const [cancelled, setCancelled] = useState(false)

    //antes de qualquer ação verificar se está cancelado
    const checkCancelBeforeDispatch = (action)=>{
        
        if(!cancelled){

            dispatch(action)
        }
    }

    //função para inserir o document
    const insertDocument = async (document)=>{

        try{

            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDocument = await addDoc(collection(db, docCollection), newDocument)

            checkCancelBeforeDispatch({
                type: '',
                payload: insertedDocument
            })

        }catch(error){

        }
    }
}