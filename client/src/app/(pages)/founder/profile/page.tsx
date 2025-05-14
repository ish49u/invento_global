"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const MediaGallery = () => {
  const mediaItems: MediaItem[] = [
    { type: "video", src: "/company_profile/v1.mov", alt: "Company Video 1" },
    { type: "image", src: "/company_profile/v2.jpeg", alt: "Company Image 2" },
    { type: "video", src: "/company_profile/v3.mp4", alt: "Company Video 2" },
    { type: "video", src: "/company_profile/v4.mov", alt: "Company Video 3" },
    { type: "video", src: "/company_profile/v5.mp4", alt: "Company Video 4" },
    { type: "video", src: "/company_profile/v6.mov", alt: "Company Video 5" },
    { type: "video", src: "/company_profile/v7.mov", alt: "Company Video 6" },
    { type: "image", src: "/company_profile/v8.jpeg", alt: "Company Image 3" },
    { type: "video", src: "/company_profile/v9.mov", alt: "Company Video 7" },
    { type: "video", src: "/company_profile/v10.mov", alt: "Company Video 8" },
    { type: "video", src: "/company_profile/v11.mov", alt: "Company Video 9" },
    { type: "image", src: "/company_profile/v12.jpeg", alt: "Company Image 4" },
    { type: "image", src: "/company_profile/v13.jpeg", alt: "Company Image 5" },
    { type: "image", src: "/company_profile/v14.jpeg", alt: "Company Image 6" },
    { type: "image", src: "/company_profile/v15.jpeg", alt: "Company Image 7" },
    { type: "video", src: "/company_profile/v16.mp4", alt: "Company Video 10" },
  ];

  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="lg:py-12 py-5 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="lg:text-4xl text-xl font-bold text-center text-gray-800 mb-12">
          Company Media Gallery
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll w-max">
            {[...mediaItems, ...mediaItems].map((item, index) => (
              <div
                key={index}
                className="flex-none w-[250px] sm:w-[300px] cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "image" ? (
                  <div className="w-full h-48 sm:h-64 relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 sm:h-64 relative">
                    <video
                      className="w-full h-full object-cover rounded-lg shadow-md pointer-events-none"
                      muted
                      loop
                      autoPlay
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for clicked media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-secondary bg-primary rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>
            {selectedMedia.type === "image" ? (
              <div className="w-full h-[500px] relative">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full h-[500px] relative">
                <video controls className="w-full h-full rounded-lg" autoPlay>
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MediaGallery;
