import Link from 'next/link'
import React from 'react'

const navLinks2 = [
  {
    path: '/doc',
    title: 'Get Starts'
  },
  {
    path: '/doc/installation',
    title: 'Installation'
  },
  // {
  //   path: '/doc/profile',
  //   title: 'Profile'
  // },
  {
    path: '/doc/projectstructure',
    title: 'Project Structure'
  },
  {
    path: '/doc/routing',
    title: 'Routing'
  },
  {
    path: '/doc/datafetching',
    title: 'Data Fetching'
  },
  {
    path: '/doc/rendering',
    title: 'Rendering'
  },
  {
    path: '/doc/styling',
    title: 'Styling'
  },
]

export default function Documantation() {

  return (
    <div>
      <ul className='gap-4 '>
        {
          navLinks2.map(({ path, title }) => <li  className='text-xl my-4 hover:text-blue-500' key={path}>
            <Link href={path}>{title}</Link>
          </li>)
        }

      </ul>
    </div>
  )
}
