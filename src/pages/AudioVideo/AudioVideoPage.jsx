import React from 'react'
import Banner from '../../components/Banner'

const AudioVideoPage = () => {
  const spanVal = "Featured Tools"
  const nameVal = "Audio & Video Tools"
  const senVal = "Edit, convert, and enhance your audio and video files with our powerful tools."
  return (
   <main className='w-full  bg-gray-50 pt-4 pb-8 px-4  h-full'>
      <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal} />

      <div className="grid lg:grid-cols-3 gap-4">

        
        <div className="lg:w-80 rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
          <h3 className="text-lg font-medium">Audio Converter</h3>
          <p className="text-gray-400 text-sm">Convert audio files to different formats.</p>
          <a
            href="/audio-video/audio-converter"
            className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
          >
            Try Now
          </a>
        </div>


        <div className="lgw-80 rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
          <h3 className="text-lg font-medium">Video Compressor</h3>
          <p className="text-gray-400 text-sm">Compress video files easily.</p>
          <a
            href="/audio-video/video-compressor"
            className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
          >
            Try Now
          </a>
        </div>
      </div>
   </main>
  )
}

export default AudioVideoPage