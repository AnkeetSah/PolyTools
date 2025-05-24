
import Banner from '../../components/Banner'
import Card from '../../components/Card'

const AudioVideoPage = () => {
  const spanVal = "Featured Tools"
  const nameVal = "Audio & Video Tools"
  const senVal = "Edit, convert, and enhance your audio and video files with our powerful tools."
  const tools = [
        {
          title: "Audio Converter",
          description: "Convert audio files to different formats.",
          link: "/audio-video/audio-converter"
        },
        {
          title: "Video Compressor",
          description: "Compress video files easily.",
          link: "/audio-video/video-compressor"
        }
      ]

  return (
   <main className='w-full  bg-gray-50 pt-4 pb-8 px-4  h-full'>
      <Banner spanVal={spanVal} nameVal={nameVal} senVal={senVal} />
      
      <div className="grid lg:grid-cols-3 gap-4">

        {tools.map((tool, index) => (
          <Card
            key={index}
            title={tool.title}
            desc={tool.description}
            link={tool.link}
          />
        ))}

        {/* Additional tools can be added here */}
        
      </div>
   </main>
  )
}

export default AudioVideoPage