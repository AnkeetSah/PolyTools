import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
const AiTools = () => {
    const spanVal = "Featured Tools"
    const nameVal = "AI Tools"
    const senVal = "Explore our AI-powered tools to enhance your productivity and creativity."
    const tools=[{
   
        title: "AI Image Enhancer",
        description: "Enhance and upscale images using AI technology.",
        link: "/ai-tools/image-enhancer"
    },
    {
        title:"AI Image Generator",
        description: "Generate stunning images from text prompts using AI.",
        link: "/ai-tools/image-generator"
    },
    {
        title:"AI Background Remover",
        description: "Remove backgrounds from images effortlessly with AI.",
        link: "/ai-tools/background-remover"
    },
    {
        
        title: "AI Text-to-Speech",
        description: "Convert text to natural-sounding speech using AI.",
        link: "/ai-tools/text-to-speech"
    },{
        
        title: "AI Subtitle Generator",
        description: "Generate subtitles for videos using AI.",
        link: "/ai-tools/subtitle-generator"
    }
    ]
  return (
    <main className='w-full bg-gray-50 pt-4 pb-8 px-4 h-full'>
        <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal}  />
        <div className="grid lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
                <Card
                    key={index}
                    title={tool.title}
                    desc={tool.description}
                    link={tool.link}
                />
            ))}
           
        </div>
    </main>
  )
}

export default AiTools