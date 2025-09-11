
import { createContext,useContext } from 'react';

const AppContext = React.createContext()
export const AppContextProvider = ({children}) => {
    const value={}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext)