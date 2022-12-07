import { useContext, createContext } from 'react'

const AuthContext = createContext()

//provedor de contexto
export function AuthProvider({children, value}){

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//exporta o contexto
export function useAuthValue(){

    return useContext(AuthContext)
}