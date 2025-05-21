import React from 'react'
import Card from '../../components/Card';  // import your card component
import Banner from '../../components/Banner'; // import your banner component
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
  const spanVal = "Featured Tools"
  const nameVal = "Image Tools"
  const senVal = "Edit, convert, and enhance your images with our powerful tools."
  return (
    <main className='w-full bg-gray-50 pt-4 pb-8 px-4'>
      <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map(({ title, desc, link }) => (
        <Card key={title} title={title} desc={desc} link={link} />
      ))}
    </div>
    </main>
  )
}

export default ImageTools