import { FaWandMagicSparkles } from "react-icons/fa6";

const HeaderWithIcon = () => (
  <div className="flex gap-4 items-center">
    <FaWandMagicSparkles className="button-gradient h-8 w-8 p-2 rounded-md" />
    <h3 className="font-bold text-2xl lg:text-3xl">AI Image Generator</h3>
  </div>
);

export default HeaderWithIcon;
