import { createContext, useState } from "react";

export const UserDataContext = createContext();

export function UserContext({children}){

    const [user, setUser] = useState({
        email: '',
        fullName:{
            firstname: '',
            lastname: '',
        }
    })

    return (
        <UserDataContext.Provider value={[user, setUser]}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext;