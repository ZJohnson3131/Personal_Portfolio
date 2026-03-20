import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function PageWrapper() {
    return (
        <div>
            <NavBar />

            <main>
                <Outlet />
            </main>
        
        </div>
    )
}