import { createRoot } from 'react-dom/client'
import App from './App/App.tsx'
import {BrowserRouter} from "react-router";

const root = document.getElementById("root");


createRoot(root).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
