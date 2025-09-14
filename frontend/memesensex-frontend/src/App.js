
import './App.css';
import {useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleClear = () => {
    setImage(null);
    setInputKey(Date.now()); 
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0] && files[0].type.startsWith('image/')) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold">MemeSensex</h1>
          </div>
          <p className="text-lg text-white/90 mb-2">⚡ AI-POWERED ANALYSIS ⚡</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Multimodal Content Classification Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
              ⚡ Multimodal Content Classification ⚡
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced AI system that analyzes both visual and textual elements in Tagalog memes to provide
              accurate content classification with confidence scoring.
            </p>
          </div>
        </div>

        {/* Main Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Input Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Input Image</h3>
              </div>
              <p className="text-white/80 text-sm mt-2">Upload your meme for AI analysis</p>
            </div>
            
            <div className="p-6">
              {/* Drag and Drop Area */}
              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  isDragOver 
                    ? 'border-purple-400 bg-purple-50' 
                    : 'border-gray-300 bg-gray-50 hover:border-purple-300 hover:bg-purple-25'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-64 object-contain rounded-lg"
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-800">Drag & drop your meme here</p>
                      <p className="text-sm text-gray-500 mt-1">or</p>
                    </div>
                  </div>
                )}
              </div>

              {!image && (
                <div className="mt-4 text-center">
                  <input
                    key={inputKey}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium cursor-pointer hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-block"
                  >
                    📁 Choose File
                  </label>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <button className='bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-teal-600 transition-all duration-300 flex-1 flex items-center justify-center gap-2'>
                  ⚡ Classify Meme
                </button>
                <button
                  onClick={handleClear}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Analysis Results */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Analysis Results</h3>
              </div>
              <p className="text-white/80 text-sm mt-2">AI classification outcomes</p>
            </div>
            
            <div className="p-6">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l2 2 4-4" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Ready for Analysis</h4>
                  <p className="text-gray-600">
                    Upload a meme image to get started with AI-powered content classification.
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Accurate Detection</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Fast Processing</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Confidence Scoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Upload</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Analyze</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
