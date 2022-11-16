import React from 'react'
import Routing from '../../Routing/Routing'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Master() {
    return (
        <div className="d-flex h-100">
            <aside id="sidebar" className="h-100 d-flex flex-column bg-secondary text-light overflow-hidden">
                <Sidebar />
            </aside>
            <div className="flex-grow-1 d-flex flex-column">
                <header id='header' className="d-flex align-items-center px-4 bg-info flex-shrink-0">
                    <Header />
                </header>
                <main className="d-flex flex-column flex-grow-1 bg-primary p-4 overflow-hidden">
                    <Routing />
                </main>
            </div>
        </div>
    )
}
