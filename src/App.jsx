import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ImageTools from "./pages/ImageTools/ImageTools";
import AudioVideoPage from "./pages/AudioVideo/AudioVideoPage";
import DocumentToolsPage from "./pages/DocumentTools/DocumentToolsPage";
import LinkQrToolsPage from "./pages/LinkQrTools/LinkQrToolsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Compressor from "./pages/ImageTools/Compressor/Compressor";
import QrGenerator from "./pages/LinkQrTools/QrCodeGenerator.jsx/QrGenerator";
import Authentication from "./pages/Authentication";
import AiTools from "./pages/AiTools/AiTools";
import AI_Image_Generator from "./pages/AiTools/AI_Image_generator/AI_Image_Generator";
import Url_Shortner from "./pages/LinkQrTools/URLShortner/Url_Shortner";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="image-tools" element={<ImageTools />} />
        <Route path="audio-video" element={<AudioVideoPage />} />
        <Route path="document-tools" element={<DocumentToolsPage />} />
        <Route path="link-qr-tools" element={<LinkQrToolsPage />} />
       <Route path="link-qr-tools/qr-code-generator" element={<QrGenerator />} />
        <Route path="link-qr-tools/url-shortener" element={<Url_Shortner />} />
        
        {/* AI Tools Routes */}


        <Route path="ai-tools" element={<AiTools/>} />
        <Route path="ai-tools/image-generator" element={<AI_Image_Generator />} />
        
        {/* Authentication Route */}
        <Route path="authentication" element={<Authentication/>} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="image-tools/image-compressor" element={<Compressor />} />
       
      </Route>
    </Routes>
  );
}

export default App;
