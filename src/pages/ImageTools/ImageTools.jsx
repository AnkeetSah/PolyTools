import React from 'react'
import Card from '../../components/Card';  // import your card component

const ImageTools = () => {
  const tools = [
    {
      title: "Image Resizer",
      desc: "Resize images easily.",
      link: "/image-tools/image-resizer"
    },
    {
      title: "Image Converter",
      desc: "Convert images to different formats.",
      link: "/image-tools/image-converter"
    }
,
    {
      title: "Image Enhancer",
      desc: "Adjust brightness, contrast, sharpness, and reduce noise.",
      link: "/image-tools/image-enhancer"
    },
    {
      title: "AI Super Resolution",
      desc: "Enhance image resolution intelligently with AI.",
      link: "/image-tools/ai-super-resolution"
    },
    {
      title: "Background Remover",
      desc: "Remove backgrounds with a single click using AI.",
      link: "/image-tools/background-remover"
    },
    {
      title: "Image Compressor",
      desc: "Minimize size with minimal quality loss.",
      link: "/image-tools/image-compressor"
    },
    {
      title: "Format Converter",
      desc: "Convert between PNG, JPG, WEBP, and more.",
      link: "/image-tools/format-converter"
    }
  
  ]
  return (
    <main className='w-full bg-gray-50 pt-4 pb-8 px-4'>
      <section className="mb-8">
        <div className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white shadow-lg animate-fade-in">
          <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs bg-white/20 hover:bg-white/30 transition">
            Featured Tools
          </span>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Image Processing Tools
          </h1>
          <p className="text-base lg:text-lg opacity-90 mb-4 max-w-4xl">
            Edit, convert, and enhance your images with our powerful tools.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map(({ title, desc, link }) => (
        <Card key={title} title={title} desc={desc} link={link} />
      ))}
    </div>
    </main>
  )
}

export default ImageTools