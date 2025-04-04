import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

const themeContext = createContext();

const useTheme = ()=>useContext(themeContext);

const ThemeProvider = ({children})=>{
  const initialValue= localStorage.getItem("theme");

  const [theme, setTheme] = useState(initialValue || 'dark');

  const toggleTheme = () => {
    setTheme((theme)=>theme === 'light' ? 'dark' : 'light');
  }

  useEffect(()=>{
    localStorage.setItem('theme', theme);
  }, [theme]);

  useLayoutEffect(()=>{
    if(theme === 'light'){
      document.documentElement.setAttribute('data-theme', 'light');
    }else{
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  },[theme]);

  
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </themeContext.Provider>
  )
}

export { ThemeProvider, useTheme };