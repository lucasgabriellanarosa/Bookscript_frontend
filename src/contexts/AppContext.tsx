import { createContext, ReactNode, useState } from "react"

type Props = {
    children?: ReactNode
}

type AppContextType = {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContextType>({
    text: 'Hello, world!',
    setText: () => {},
})

export const AppContextProvider = ({children}: Props) => {
    
    const [text, setText] = useState("Hello, world")

  return (
    <AppContext.Provider value={{ text, setText }}>
        {children}
    </AppContext.Provider>
  )
}
