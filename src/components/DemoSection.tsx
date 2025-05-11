import React from "react";

const DemoSection = () => {
  const videos = [
    "gdyibGQ0If0",
    "NWBhPFD1cCA",
    "rIOkEn0EEbw",
    "SMoNorQkdU4",
    "gm6VdJHY-e0",
    "64iL52nEYCc",
    "YDKAjYHjxew",
    "pgODl0KsZn0",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Viral Videos</span> in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how we transform ordinary product demos into short, engaging videos
            that drive millions of views and real product growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((videoId, index) => (
            <div 
              key={videoId} 
              className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white"
            >
              <div className="relative" style={{ aspectRatio: '9/16' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title={`ViralHook Demo Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
