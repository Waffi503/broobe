import { Routes, Route, Outlet, NavLink  } from 'react-router-dom';
import { cn } from '@/lib/utils';
export default function Layout() {

    const active = 'text-primary ';


    return (
        <main className='bg-background min-h-screen'>
            <nav className='h-16 flex items-center justify-end gap-7 px-4'>
                <NavLink 
                 className={({ isActive }) =>
                 cn('text-gray-400', {'text-white': isActive, 'hover:text-gray-300':!isActive })
                }
                to='/login' >Login</NavLink >
                <NavLink  to='/signup' className={({ isActive }) =>
                 cn('text-gray-400', {'text-white': isActive, 'hover:text-gray-300':!isActive }  )
                }>Sign Up</NavLink >
            </nav>
            <Outlet />
        </main>
    )
}
