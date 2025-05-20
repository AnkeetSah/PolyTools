import React from 'react'

const Reason = () => {
const reasons = [
  {
    title: "All-in-One Solution",
    description: "No need to juggle multiple platforms for different tasks."
  },
  {
    title: "AI-Powered",
    description: "Advanced AI algorithms for intelligent processing."
  },
  {
    title: "User Friendly Interface",
    description: "Intuitive design for seamless navigation and usage."
  },
  {
    title: "Privacy First",
    description: "Your files are processed locally when possible."
  }
]
  return (
    <div className=''>
     <h3 className='text-xl font-bold mb-6 text-gray-900 '> Why Choose UltimateUtils</h3>
     <div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        {reasons.map((reason, index) => (
          <div key={index} className='bg-white  p-6 rounded-xl border border-gray-200 '>
            <h4 className='text-sm font-semibold mb-2 text-gray-900 '>{reason.title}</h4>
            <p className='text-gray-600  text-[11px]'>{reason.description}</p>
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Reason