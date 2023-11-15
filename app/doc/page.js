'use clint';
import React from 'react'
import { Image } from 'next/image';

export default function About() {
  return (
    <div>
      <h2 className='text-4xl mb-4 text-white'>What is Next.js?</h2>
      <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
        <br />
        <br />
        Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
        <br />
        <br />
        Whether you are an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>

      <h2 className='text-4xl mt-10 mb-4 text-white'>How to Use These Docs</h2>
      <p>On the left side of the screen, you will find the docs navbar. The pages of the docs are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your application. However, you can read them in any order or skip to the pages that apply to your use case.
        <br />
        <br />
        On the right side of the screen, you will see a table of contents that makes it easier to navigate between sections of a page. If you need to quickly find a page, you can use the search bar at the top, or the search shortcut (Ctrl+K or Cmd+K).</p>
      <img src='https://i.ibb.co/9rPkDk9/Screenshot-2.png' />
    </div>
  )
}
