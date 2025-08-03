import { createRoot } from 'react-dom/client'
import App from './App/App.tsx'
import { MainProviders } from "@app/providers";

const root = document.getElementById("root");


createRoot(root!).render(
    <MainProviders>
        <App/>
    </MainProviders>
)
