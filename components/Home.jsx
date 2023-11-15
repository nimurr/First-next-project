import React from 'react'
import { Image } from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='grid grid-cols-2 gap-4 items-center my-20'>
      <div>
        <h2 className='text-6xl'>
          The React Framework for the Web </h2>
        <p className='my-4'>Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
        <Link href="/doc" className='bg-[#222] py-2 px-4 rounded'>
          Learn More
        </Link>
      </div>
      <img className='w-full' src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail-1.webp" alt="Hero Images" />
    </div>
  )
}
