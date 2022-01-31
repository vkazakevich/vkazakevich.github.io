import * as React from 'react'

export default function Layout ({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-400">
      <div className="h-2.5 bg-blue-500"/>
      <div className="flex flex-grow justify-center items-center">
        <div className="container px-8">
          {children}
        </div>
      </div>
    </div>
  )
}
