// Import necessary dependencies
import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./App.css";

function App() {
  const [image, setImage] = useState(null); // For storing the uploaded image
  const [mask, setMask] = useState(null); // For storing the exported mask
  const [brushSize, setBrushSize] = useState(10); // Default brush size
  const canvasRef = useRef(); // Ref to access CanvasDraw

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Export the mask image
  const handleExportMask = () => {
    if (canvasRef.current) {
      const maskData = canvasRef.current.canvasContainer.children[1].toDataURL("image/png");
      setMask(maskData);
    }
  };

  // Clear the canvas for new drawings
  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  return (
    <div className="app">
      <h1>Image Inpainting Widget</h1>

      {/* Image Upload Section */}
      <input type="file" accept="image/jpeg, image/png" onChange={handleImageUpload} />

      {/* Controls for Brush and Canvas */}
      {image && (
        <>
          <div className="controls">
            <label>
              Brush Size:
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
              />
              {brushSize}px
            </label>
            <button onClick={handleClearCanvas}>Clear Canvas</button>
            <button onClick={handleExportMask}>Export Mask</button>
          </div>

          {/* Canvas Container */}
          <div className="canvas-container">
            <img src={image} alt="Uploaded" className="uploaded-image" />
            <CanvasDraw
              ref={canvasRef}
              brushColor="white"
              brushRadius={brushSize}
              lazyRadius={0}
              canvasWidth={500}
              canvasHeight={400}
            />
          </div>
        </>
      )}

      {/* Display Exported Images */}
      {mask && (
        <div className="output-container">
          <h2>Exported Images</h2>
          <div className="exported-images">
            <div>
              <h3>Original Image</h3>
              <img src={image} alt="Original" />
            </div>
            <div>
              <h3>Mask Image</h3>
              <img src={mask} alt="Mask" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;