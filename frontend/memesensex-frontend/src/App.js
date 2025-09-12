
import './App.css';
import Navbar from './components/Navbar';
import {useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleClear = () => {
    setImage(null);
    setInputKey(Date.now()); 
  };

  return (
   <>
      <div className="min-h-screen bg-gray-50">
        <Navbar></Navbar>

        <div className="bg-gray-900 text-white rounded-md shadow-lg p-8 w-full max-w-7xl mx-auto mt-10 px-4">
            <h1 className="text-2xl font-bold mb-4 text-[#31b2b4]">
              MemeSensex
            </h1>
            <p className="text-gray-300 text-base">
              MemeSensex is a multimodal AI system designed to detect and classify sexual content in Tagalog memes,
              analyzing both visual and textual elements for accurate results.
            </p>
        </div>

        {/* Second Section - Image Classification */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column - Image Input */}
            <div>
              <h2 className='text-lg font-semibold mb-2'>Input Image</h2>
              <p className='text-gray-500  text-sm mb-4'>Upload a meme image to analyze its content.</p>
              <input
                key={inputKey}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
              {/* Left Column Preview */}
              <div className="mt-4 mb-4 w-full h-64 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No image uploaded</span>
                )}
              </div>
              <div className="mt-4 flex gap-3">
                <button className='bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition'>Classify</button>
                <button
                  onClick={handleClear}
                  className="bg-white border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Clear
                </button>
              </div>


            </div>
          </div>
        </div>
        
    

      </div>
    </>
  );
}

export default App;
