// src/utils/imageCompressor.js
import imageCompression from 'browser-image-compression';

export const compressImage = async (imageFile) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 800,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression Error:", error);
    throw error;
  }
};
