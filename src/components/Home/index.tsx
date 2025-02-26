"use client"
import React from 'react'
import {Card, CardFooter, Image} from "@heroui/react";
import { Button } from '@heroui/react'
import Link from 'next/link';
import WorksCards from '@/WorksCard';
export default function Home() {
  return (
    <div className='container  p-4 text-center'>
      <h1 className="text-6xl font-bold  mb-8">Welcome to ReferX</h1>
      <p className="text-center mb-12 text-gray-600">
        Earn coins by referring products and helping others discover great courses!
      </p>
      <div className="flex justify-center space-x-4">

      <Button>Post</Button>
      <Button>
        <Link href="/market">
        Refer Now
        </Link>
      </Button>
      </div>
      {/* <div className="p-4 max-w-7xl mx-auto">
        <h1>How It Works</h1>
        <div className="grid grid-cols-4 gap-4  mx-auto p-4">

        <WorksCards/>
        <WorksCards/>
        <WorksCards/>
        <WorksCards/>

        </div>
        
      </div> */}
    </div>
  )
}
