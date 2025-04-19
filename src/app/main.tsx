import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import {Hub} from "@/pages/hub";
import {Auth} from "@/pages/auth";

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hub />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    </BrowserRouter>
</StrictMode>,
)
