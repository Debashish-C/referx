"use client"
import Cards from '@/cards'
import React from 'react'
import { Button } from '@heroui/react'

export default function Posts() {
  return (
    <div className='container mx-auto p-4 text-center'>
      <h1 className='text-2xl mb-4'>Featured Products/Courses:</h1>
      <div className='max-w-7xl mx-auto p-4 grid sm:grid-cols-4 grid-cols-1 gap-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        {/* <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
      </div>
      <Button className='mt-4'>more...</Button>
    </div>
  )
}
