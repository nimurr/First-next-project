import React from 'react'

export default function page() {
    return (
        <div>
            <h2 className='text-4xl mb-4'>Rendering</h2>
            <p>Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes.</p>
            <br />
            <br />
            <p>Historically, developers had to use different languages (e.g. JavaScript, PHP) and frameworks when writing code for the server and the client. With React, developers can use the same language (JavaScript), and the same framework (e.g. Next.js or your framework of choice). This flexibility allows you to seamlessly write code for both environments without context switching.
                <br />
                <br />

                However, each environment has its own set of capabilities and constraints. Therefore, the code you write for the server and the client is not always the same. There are certain operations (e.g. data fetching or managing user state) that are better suited for one environment over the other.
                <br/>
                <br/>
                Understanding these differences is key to effectively using React and Next.js. We will cover the differences and use cases in more detail on the Server and Client Components pages, for now, lets continue building on our foundation.</p>
                <img className='my-4' src='https://i.ibb.co/ChGKxbh/Screenshot-3.png'/>
        </div>
    )
}
