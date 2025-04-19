import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import {Hub} from "@/pages/hub";

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hub />} />
        </Routes>
    </BrowserRouter>
</StrictMode>,
)
