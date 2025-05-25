import PromptInputArea from "./PromptInputArea";
import Dropdown from "./Dropdown";

const modelOptions = [
  { label: "FLUX.1-dev", value: "model1" },
  { label: "FLUX.1-schnell", value: "model2" },
  { label: "Stable Diffusion XL", value: "model3" },
  { label: "Stable Diffusion v1.5", value: "model4" },
];

const countOptions = [1, 2, 3, 4].map((n) => ({
  label: `${n} Image${n > 1 ? "s" : ""}`,
  value: String(n),
}));

const ratioOptions = [
  { label: "1:1 (Square)", value: "1:1" },
  { label: "16:9 (Widescreen)", value: "16:9" },
  { label: "4:3 (Standard)", value: "4:3" },
  { label: "9:16 (Portrait)", value: "9:16" },
];

const MainForm = ({ prompt, setPrompt, setImageCount, randomPrompt }) => (
  <form>
    <PromptInputArea prompt={prompt} setPrompt={setPrompt} randomPrompt={randomPrompt} />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <Dropdown label="Select Model" options={modelOptions} />
      <Dropdown label="Select Image Count" options={countOptions} onChange={(e) => setImageCount(e.target.value)} />
      <Dropdown label="Aspect Ratio" options={ratioOptions} />
      <input className="button-gradient rounded-xl" type="submit" value="Generate" />
    </div>
  </form>
);

export default MainForm;
