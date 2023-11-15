import Link from 'next/link'
import React from 'react' 

const navLinks = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/doc',
    title: 'Dos'
  },
  {
    path: '/profile',
    title: 'Profile'
  },
  {
    path: '/dashboard',
    title: 'Dashboard'
  },
]
export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between items-center my-4'>
            <Link href='/' className="text-3xl text-red-500 font-semibold">
              <img className='w-32' src="https://i.ibb.co/3sM3y57/Screenshot-2.png" alt="Logo" />
            </Link>
            <ul className='flex gap-4 '>
                {
                  navLinks.map(({path ,  title})=> <li key={path}>
                    <Link href={path}>{title}</Link>
                  </li>)
                }
                
            </ul>
        </nav>
    </div>
  )
}
