import { Route, Routes } from "react-router";
import App from '../App';
import { AppContextProvider } from "../contexts/AppContext";

const Router = () => {
    return (
        <AppContextProvider>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </AppContextProvider>
    )
}

export default Router