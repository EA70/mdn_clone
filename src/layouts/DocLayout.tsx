import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'

export default function DocLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar onBurgerClick={() => setSidebarOpen(true)} />
            {/* Overlay — visible uniquement quand sidebar ouverte sur mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}


            {/* Sidebar — en drawer sur mobile, fixe sur desktop */}
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 flex mt-10 px-10 py-8 lg:pr-52 md:ml-64 ">
                <Outlet />  {/* ← chaque page s'affiche ici */}
            </main>


        </div>
    )
}