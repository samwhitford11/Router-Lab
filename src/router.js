import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route
} from "react-router-dom";
// import data from "./data.json";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Stock from "./pages/stock";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
        path='/' 
        element={<App/>}
        >
            <Route
                path=''
                element={<Home/>}
                />
                <Route
                path='/about'
                element={<About/>}
                />
                <Route
                path='/stocks/:symbol'
                element={<Stock/>}
                />
                <Route
                path='/stocks'
                element={<Dashboard/>}
                />
            
        </Route>
    )
);


export default router 