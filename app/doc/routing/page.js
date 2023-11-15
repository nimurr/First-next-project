import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <h2 className='text-4xl'>Routing Fundamentals</h2>
            <p className='my-4'>The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.</p>
            <img className='my-4' alt='asd' src='https://i.ibb.co/mh8Tqjt/Screenshot-1.png' />
            <h2 className='text-2xl'>Terminology</h2>
            {/* <Image alt="images" src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-component-tree.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk" width="" height="" /> */}
            <br />
            <p>In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.
                <br />
                <br />
                The App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior. If your application uses the pages directory, please also see the Pages Router documentation.</p>

            <br />
            <br />

            <h2 className='text-2xl my-2'>Nested Routes</h2>
            <p>To create a nested route, you can nest folders inside each other. For example, you can add a new <small className='text-gray-500'>/dashboard/settings</small> route by nesting two new folders in the app directory.
                <br />
                <br />
                The <small className='text-gray-500'>/dashboard/settings</small> route is composed of three segments:</p>
        </div>
    )
}
