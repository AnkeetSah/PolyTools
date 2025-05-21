import React, { useState, useRef } from "react";
import Banner from "../../../components/Banner";
import { LuUpload } from "react-icons/lu";
import SelectButton from "../../../components/SelectButton";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import imageCompression from 'browser-image-compression';

const Compressor = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [compressedImages, setCompressedImages] = useState([]); // store compressed images
  const fileInputRef = useRef(null);
  const [compression, setCompression] = useState(50);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleCompressionChange = (e) => {
    setCompression(Number(e.target.value));
  };

  const handleCompressClick = async () => {
    if (selectedImages.length === 0) {
      toast.error("Please select an image before compressing.");
      return;
    }
    setIsCompressing(true);
    try {
      const compressedFiles = [];

      for (const img of selectedImages) {
        // Fetch the original file from the URL (not perfect for local blobs, but here is a workaround)
        const file = await fetch(img.url)
          .then(res => res.blob())
          .then(blob => new File([blob], img.name, { type: blob.type }));

        // Compress options
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          initialQuality: compression / 100,
        };

        const compressedFile = await imageCompression(file, options);

        // Create URL for compressed image
        const compressedUrl = URL.createObjectURL(compressedFile);

        compressedFiles.push({
          url: compressedUrl,
          name: compressedFile.name,
          size: (compressedFile.size / 1024).toFixed(2), // KB
          file: compressedFile,
        });
      }

      setCompressedImages(compressedFiles);
      toast.success("Images compressed successfully!");
    } catch (error) {
      toast.error("Compression failed, please try again.");
      console.error(error);
    }
    setIsCompressing(false);
  };

  const onImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024).toFixed(2), // in KB
      file,
    }));
    setSelectedImages(imageFiles);
    setCompressedImages([]); // Reset compressed images when new files are selected
  };

  // Function to download all compressed images
  const handleDownload = () => {
    if (compressedImages.length === 0) {
      toast.error("No compressed images to download.");
      return;
    }
    compressedImages.forEach((img) => {
      const link = document.createElement("a");
      link.href = img.url;
      link.download = img.name;
      link.click();
    });
  };

  return (
    <>
      <main className="w-full min-h-screen bg-gray-50 pt-4 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Banner
            spanVal="Image Compressor"
            nameVal="Compress Images with Ease"
            senVal="Reduce image file sizes with minimal quality loss using our AI-powered compression tool."
          />

          <div className="bg-white shadow-lg rounded-xl p-6 mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Image Compressor</h2>

            {/* Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mx-auto">
                <LuUpload className="text-purple-600 w-6 h-6" />
              </div>
              <h4 className="mt-4 text-lg font-medium text-gray-800">
                Drag and Drop or Click to Upload
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Supports PNG, JPG, and WEBP formats. Multiple files allowed.
              </p>
              <button
                onClick={onImageUpload}
                className="mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-md shadow-md transition"
              >
                Select Images
              </button>
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                multiple
                hidden
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>

            {/* Settings & Image Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Compression Settings */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-4">Compression Settings</h3>
                <p className="text-sm text-gray-600 mb-2">Choose percentage of Compression:</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={compression}
                  onChange={handleCompressionChange}
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 ${compression}%, #e5e7eb ${compression}%)`
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Output Format */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-4">Output Format</h3>
                <p className="text-sm text-gray-500">Coming Soon: PNG, JPG, WEBP Selection</p>
              </div>
            </div>

            {/* Uploaded Images */}
            {selectedImages.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-8 mb-2">Original Images</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                    >
                      <img
                        className="w-16 h-16 object-cover rounded-lg"
                        src={img.url}
                        alt="Uploaded"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{img.name}</p>
                        <p className="text-xs text-gray-500">{img.size} KB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Compressed Images */}
            {compressedImages.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-8 mb-2">Compressed Images</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {compressedImages.map((img, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                    >
                      <img
                        className="w-16 h-16 object-cover rounded-lg"
                        src={img.url}
                        alt="Compressed"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{img.name}</p>
                        <p className="text-xs text-gray-500">{img.size} KB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-end">
              <SelectButton
                text={isCompressing ? "Compressing..." : "Compress Images"}
                onClick={handleCompressClick}
                disabled={isCompressing || selectedImages.length === 0}
              />

              <SelectButton
                text="Download Images"
                onClick={handleDownload}
                disabled={compressedImages.length === 0}
              />
            </div>
          </div>

          {/* How to Use Section */}
          <section className="mt-10 bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">How to Use</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>Click the "Select Images" button or drag and drop your images.</li>
              <li>Adjust the compression settings as desired.</li>
              <li>Click "Compress Images" to begin compression.</li>
              <li>Once done, click "Download Images".</li>
            </ol>
          </section>
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Compressor;
