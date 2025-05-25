import ImageCard from "./ImageCard";

const ImageResults = ({ count }) => (
  <div className="mt-6 results-container">
    <h4 className="text-lg font-semibold mb-2">Generated Images</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: Number(count) || 0 }).map((_, index) => (
        <ImageCard key={index} index={index} />
      ))}
    </div>
  </div>
);

export default ImageResults;
