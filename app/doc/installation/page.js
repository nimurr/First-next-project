import React from 'react'

export default function page() {
  return (
    <div>
      <h2 className='text-5xl font-semibold'>Installation</h2>
      <p className='my-6'>We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:</p>
      <span className='text-green-500 p-2 my-4 bg-gray-700 block'>npx create-next-app@latest</span>

      <ul className='border p-4'>
        <li className='text-gray-400 my-1'>What is your project named? my-app</li>
        <li className='text-gray-400 my-1'>  Would you like to use TypeScript? No / Yes</li>
        <li className='text-gray-400 my-1'> Would you like to use ESLint? No / Yes</li>
        <li className='text-gray-400 my-1'> Would you like to use Tailwind CSS? No / Yes</li>
        <li className='text-gray-400 my-1'> Would you like to use `src/` directory? No / Yes</li>
        <li className='text-gray-400 my-1'> Would you like to use App Router? (recommended) No / Yes</li>
        <li className='text-gray-400 my-1'> Would you like to customize the default import alias (@/*)? No / Yes</li>
        <li className='text-gray-400 my-1'>  What import alias would you like configured? @/*</li>
      </ul>
    </div>
  )
}
