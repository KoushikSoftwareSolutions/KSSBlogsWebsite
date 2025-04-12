import React from 'react'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen absolute top-0 z-100 bg-white">
          <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />
        </div>
  )
}
