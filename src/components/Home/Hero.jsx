import React from 'react'

const Hero = () => {
  return (
    <section className="mb-8">
        {/* full-width hero */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg animate-fade-in">
          {/* remove max-w-3xl so content can spread */}
          <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs bg-white/20 hover:bg-white/30 transition">
            All-in-One Utility App
          </span>

          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Transform Your Files with AI-Powered <br /> Tools
          </h1>

          <p className="text-base lg:text-lg opacity-90 mb-4 max-w-4xl">
            Edit images, process audio, convert documents, and more — all in one place. <br /> No downloads required.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-purple-700 hover:bg-gray-100 font-medium rounded-md px-4 py-1.5 transition">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white/20 font-medium rounded-md px-4 py-1.5 transition">
              View All Tools
            </button>
          </div>
        </div>
      </section>
  )
}

export default Hero