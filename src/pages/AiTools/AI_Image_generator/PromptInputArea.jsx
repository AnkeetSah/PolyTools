import { RiSparkling2Line } from "react-icons/ri";

const PromptInputArea = ({ prompt, setPrompt, randomPrompt }) => (
  <div className="flex flex-col gap-2 mt-4 relative">
    <label htmlFor="prompt" className="text-sm text-gray-800 font-semibold">
      Enter your prompt
    </label>
    <textarea
      onChange={(e) => setPrompt(e.target.value)}
      id="prompt"
      rows="4"
      value={prompt}
      className="border border-gray-300 bg-purple-50 rounded-xl outline-none p-2 font-serif"
      placeholder="Describe the image you want to generate..."
    />
    <button
      onClick={randomPrompt}
      className="button-gradient w-fit rounded-2xl p-1 absolute right-2 bottom-2"
    >
      <RiSparkling2Line />
    </button>
  </div>
);

export default PromptInputArea;
