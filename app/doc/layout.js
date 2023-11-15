import Documantation from '@/components/Documantation'
import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex  gap-10 my-10'>
            <Documantation></Documantation>
            <div className='w-6/12 ml-12 text-justify'>
                {children}
            </div>
        </div>
    )
}
