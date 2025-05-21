import React from 'react'

const Banner = ({ spanVal,nameVal,senVal}) => {
  return (
    <section className="mb-8">
        <div className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg animate-fade-in">
          <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs bg-white/20 hover:bg-white/30 transition">
            {spanVal}
          </span>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            {nameVal}
          </h1>
          <p className="text-base lg:text-lg opacity-90 mb-4 max-w-4xl">
           {senVal}
          </p>
        </div>
      </section>
  )
}

export default Banner