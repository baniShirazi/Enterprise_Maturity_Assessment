'use client'

// import Image from 'next/image'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl p-6">Welcome to <b>Enterprise Maturity Assessment</b> app</h1>
      <h6 className="text-2xl p-6"> Please find choose the your Area</h6>
      <div className="grid gap-x-4 gap-y-8 grid-cols-2">
        <Card title='CI/CD' desc='Maturity Assessment for CI/CD' />
        <Card title='Cloud' desc='Maturity Assessment for Cloud' />
        <Card title='Coming soon' desc='Maturity Assessment for ...' />
      </div>
    </div>
  )
}
