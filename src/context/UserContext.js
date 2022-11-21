import { createContext,useState } from "react";

export const UserContext = createContext({});
export function UserContextProvider({children}){
    const [userToken, setUserToken] = useState('');
    const [userNome, setUserNome] = useState('')

    return (
        <UserContext.Provider value={{userToken, setUserToken, userNome, setUserNome}} >
            {children}
        </UserContext.Provider>
    )
}