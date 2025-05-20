import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ImageTools from './pages/ImageTools/ImageTools';
import AudioVideoPage from './pages/AudioVideo/AudioVideoPage';
import DocumentToolsPage from './pages/DocumentTools/DocumentToolsPage';
import LinkQrToolsPage from './pages/LinkQrTools/LinkQrToolsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="image-tools" element={<ImageTools />} />
        <Route path="audio-video" element={<AudioVideoPage />} />
        <Route path="document-tools" element={<DocumentToolsPage />} />
        <Route path="link-qr-tools" element={<LinkQrToolsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
