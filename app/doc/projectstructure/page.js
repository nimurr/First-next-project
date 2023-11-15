import React from 'react'

export default function page() {
    return (
        <div>
            <h2 className="text-4xl mb-4">Next.js Project Structure</h2>
            <p>This page provides an overview of the file and folder structure of a Next.js project. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.</p>

            <ul className='my-6 text-[16px] list-disc border p-10'>
                <li>Top-level folders</li>
                <li>Top-level files</li>
                <li>SEO</li>
                <li>Routing Files</li>
                <li>Nested Routes</li>
                <li>Dynamic Routes</li>
                <li>Parallel and Intercepted Routes</li>
                <li>Metadata File Conventions</li>
                <li>Special Files</li>
            </ul>
        </div>
    )
}
