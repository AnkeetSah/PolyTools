const ImageCard = ({ index }) => (
  <div className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      src={`https://via.placeholder.com/300?text=Image+${index + 1}`}
      alt={`Generated Image ${index + 1}`}
      className="w-full h-48 object-cover rounded-lg mb-2"
    />
    <p className="text-sm text-gray-600">Image {index + 1}</p>
  </div>
);

export default ImageCard;
