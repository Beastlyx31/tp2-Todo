import * as React from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <nav className='bg-cyan-600 flex justify-center'>
        <Link to="/" className='text-black px-4 py-10  hover:bg-cyan-200 mr-20 font-bold' >
          Tâches
        </Link>
        <Link to="/statistiques" className='text-black px-4 py-10  hover:bg-cyan-200 font-bold'>
          Statistiques
        </Link>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}
