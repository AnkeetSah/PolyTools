import { FaWandMagicSparkles } from "react-icons/fa6";
import SelectButton from "../../../components/SelectButton";
const AI_Image_Generator = () => {
  const demoImages=['https://images.unsplash.com/photo-1746980776869-0443aaffc7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "https://images.unsplash.com/photo-1645886186093-e0dfa98123cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1640074817871-95d300ac24db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  return (
     <main className="w-full bg-gray-50 pt-6 pb-10 px-4 md:px-8">
      <section className="border border-gray-200 bg-white mb-8 p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-t-purple-600">
        <div className="flex gap-4 items-center">
          <FaWandMagicSparkles className="button-gradient h-8 w-8 p-2 rounded-md" />
          <h3 className="font-bold text-2xl lg:text-3xl">AI Image Generator</h3>
        </div>
        <div>
          <form>
            <div className="flex flex-col gap-2 mt-4">
              <label
                htmlFor="prompt"
                className="text-sm text-gray-800 font-semibold"
              >
                Enter your prompt
              </label>
              <textarea
                id="prompt"
                rows="4"
                className="border border-gray-300 bg-purple-50 rounded-xl outline-none p-2"
                placeholder="Describe the image you want to generate..."
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <select
                name="model"
                id="model"
                className="w-full max-w-xs bg-purple-50 border outline-0 border-purple-300 text-purple-800 text-sm rounded-md  block p-3 pr-10 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:border-purple-400"
              >
                <option value="default" className="text-gray-400">
                  Select Model
                </option>
                <option value="model1">FLUX.1-dev</option>
                <option value="model2">FLUX.1-schnell</option>
                <option value="model3">Stable Diffusion XL</option>
                <option value="model4">Stable Diffusion v1.5</option>
              </select>
              <select name="ImageCount" className="w-full max-w-xs bg-purple-50 border outline-0 border-purple-300 text-purple-800 text-sm rounded-md  block p-3 pr-10 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:border-purple-400"
             id="">
                <option value="default" className="text-gray-400">
                  Select Image Count
                </option>
                <option value="1">1 Image</option>
                <option value="2">2 Images</option>
                <option value="3">3 Images</option>
                <option value="4">4 Images</option>
              </select>
              
              <select name="AspectRatio" className="w-full max-w-xs bg-purple-50 border outline-0 border-purple-300 text-purple-800 text-sm rounded-md  block p-3 pr-10 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:border-purple-400"
             id="">
                <option value="default" className="text-gray-400">
                  Aspect Ratio
                </option>
  
                <option value="1:1">1:1 (Square)</option>
                <option value="16:9">16:9 (Widescreen)</option>
                <option value="4:3">4:3 (Standard)</option>
                <option value="9:16">9:16 (Portrait)</option>


              </select>
               <input className="button-gradient rounded-xl" type="submit" value="Generate" />
            </div>
          </form>
        </div>
        <div className="mt-6 results-container">
          <h4 className="text-lg font-semibold mb-2">Generated Images</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Example Image Cards */}
           {
            demoImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={image}
                  alt={`Generated ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              
              </div>
            ))
           }
            </div>

        </div>
      </section>
    </main>
  );
};

export default AI_Image_Generator;
