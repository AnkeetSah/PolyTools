import React, { useState } from "react";
import { Image, ArrowRight } from "lucide-react";
import { LuFileAudio } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

const PopularTools = () => {
  const [activeTab, setActiveTab] = useState("Image");

  const tabs = ["Image", "Audio & Video", "Document", "AI Tools"];

  const tools = [
    {
      category: "Image",
      name: "Image Enhancer",
      description: "Adjust brightness, contrast, sharpness, and reduce noise.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Image",
      name: "AI Super Resolution",
      description: "Enhance image resolution intelligently with AI.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Image",
      name: "Background Remover",
      description: "Remove backgrounds with a single click using AI.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Image",
      name: "Image Compressor",
      description: "Minimize size with minimal quality loss.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Image",
      name: "Format Converter",
      description: "Convert between PNG, JPG, WEBP, and more.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Audio & Video",
      name: "Audio Extractor",
      description: "Extract audio from video files effortlessly.",
      icon: <LuFileAudio className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Audio & Video",
      name: "Vedio to GIF",
      description: "Convert video files to GIF format easily.",
      icon: <LuFileAudio className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Audio & Video",
      name: "Audio Muter",
      description: "Remove audio from video files effortlessly.",
      icon: <LuFileAudio className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Document",
      name: "PDF Merger",
      description: "Merge multiple PDF files into one.",
      icon: <IoDocumentTextOutline className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Document",
      name: "Image to PDF",
      description: "Merge images into a single PDF..",
      icon: <IoDocumentTextOutline className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "Document",
      name: "Pdf to Word",
      description: "Convert PDF files to Word documents.",
      icon: <IoDocumentTextOutline className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "AI Tools",
      name: "AI Image Generator",
      description: "Create images using AI.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "AI Tools",
      name: "Noise Removal",
      description: "Clean audio by removing background sounds.",
      icon: <LuFileAudio className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
    {
      category: "AI Tools",
      name: "AI Image Resizer",
      description: "Resize images using AI.",
      icon: <Image className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
  ];

  const filteredTools = tools.filter((tool) => tool.category === activeTab);

  return (
    <div className="mb-10">
      <div className="flex xs:flex-col xs:items-start xs:gap-1.5 lg:gap-0 lg:flex-row justify-between items-center mb-4">
        <h2 className="font-bold lg:text-lg xs:text-xl">Popular Tools</h2>
        <div className="  tabs-list bg-gray-100 py-1 px-1 rounded-lg flex gap-2 lg:text-[12px] xs:text-sm font-medium text-gray-900">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tabs-trigger px-[15px] py-1 cursor-pointer rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="w-full rounded-xl bg-white p-6 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col items-start space-x-4">
              <div className="flex h-8 w-8 items-center justify-center mb-2 rounded-md bg-purple-100">
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg xs:text-xl font-medium">{tool.name}</h3>
                <p className="text-gray-400 lg:text-sm xs:text-lg">{tool.description}</p>
              </div>
            </div>
            <div className="mt-3">
              <a
                href={tool.link}
                className="inline-flex items-center text-purple-600 text-sm font-medium"
              >
                Try Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTools;
