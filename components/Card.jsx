'use client'
import Link from "next/link"

const Card = ({ title, desc }) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <Link href='/assessment' className='btn btn-accent'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Card