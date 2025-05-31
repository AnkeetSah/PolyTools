import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Routes, Route } from "react-router-dom";

import { fetchUser } from "./features/user/userSlice";

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
import Url_Shortner from "./pages/LinkQrTools/URLShortner/Url_Shortner";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (error && !user) {
      navigate('/');
    }
  }, [error, user, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Authentication />} />
        <Route path="home" element={<Home />} />
        <Route path="image-tools" element={<ImageTools />} />
        <Route path="audio-video" element={<AudioVideoPage />} />
        <Route path="document-tools" element={<DocumentToolsPage />} />
        <Route path="link-qr-tools" element={<LinkQrToolsPage />} />
        <Route path="link-qr-tools/qr-code-generator" element={<QrGenerator />} />
        <Route path="link-qr-tools/url-shortener" element={<Url_Shortner />} />
        <Route path="ai-tools" element={<AiTools />} />
        <Route path="image-tools/image-compressor" element={<Compressor />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
