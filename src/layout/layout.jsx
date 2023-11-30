import { Outlet, NavLink  } from 'react-router-dom';
import { cn } from '@/lib/utils';
import useAuth  from '@/hooks/useAuth';
export default function Layout() {

    const { isLogged, logout } = useAuth();

    return (
        <main className='bg-background min-h-screen'>
            <nav className='h-16 flex items-center justify-end gap-7 px-4'>
               {!isLogged ?
                <> 
                    <NavLink 
                    className={({ isActive }) =>
                    cn('text-gray-400', {'text-white': isActive, 'hover:text-gray-300':!isActive })
                    }
                    to='/login' >Login</NavLink >
                    <NavLink  to='/signup' className={({ isActive }) =>
                    cn('text-gray-400', {'text-white': isActive, 'hover:text-gray-300':!isActive }  )
                    }>Sign Up</NavLink >
                </> :
                <>
                    <NavLink
                    end
                    className={({ isActive }) =>
                    cn('text-gray-400', {'text-white': isActive, 'hover:text-gray-300':!isActive })
                    }
                    to='/issues' >Issues</NavLink >
                    <NavLink 
                     className={' text-gray-400 hover:text-gray-300 '}
                     onClick={ logout }
                     to={'/login'}
                     >Log out</NavLink >

                </>
                }
            </nav>
            <Outlet />
        </main>
    )
}
