'use client'

import Link from "next/link"

const Assessment = () => {
    return (
        <div>
            <h1 className="text-7xl">Assessment page</h1>
            <p>Table comes here</p>
            <Link href='/' className='text-2xl'>back to home page</Link>
        </div>
    )
}

export default Assessment