import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router";
import './index.css'
import {App} from "@/app/App.tsx";
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = 'http://localhost:3001/tonconnect-manifest.json'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <BrowserRouter>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <App />
        </TonConnectUIProvider>
    </BrowserRouter>
</StrictMode>,
)
