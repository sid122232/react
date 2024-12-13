import { createContext, useContext } from "react";
export const ThemeContext = createContext({

    themeMode:"light",// default value in context 
    darkTheme:()=>{},
    lightTheme:()=>{},
}
) 
export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}