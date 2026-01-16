"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Code2,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, featured = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Ensure images array exists
  const images = project?.images || [];
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-teal-300 hover:shadow-xl transition-all duration-300">
      {/* Project Media */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* --- Video (if exists) --- */}
        {project?.videoUrl && !showVideo && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm hover:bg-gray-900/40 transition-all group/play"
          >
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-lg">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </button>
        )}

        {showVideo && project?.videoUrl ? (
          <iframe
            src={project.videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* --- Image Carousel --- */}
            {project?.title === "Lenny - E-commerce Platform" ? (
              // ✅ Show Lenny.png only for this project
              <div className="absolute inset-0">
                <Image
                  src="/lenn1.png"
                  alt="Lenny Project Preview"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover object-right rounded-t-2xl"
                />
              </div>
            ) : hasImages ? (
              // ✅ Normal image carousel for others
              <div className="absolute inset-0">
                <Image
                  src="imagep.png"
                  alt={project?.title || "Project Screenshot"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={featured}
                  unoptimized
                />
              </div>
            ) : (
              // ✅ Fallback placeholder (no images, no lenny)
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 p-8">
                  <div className="w-20 h-20 mx-auto bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{project?.icon || "📷"}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Project Screenshot
                  </p>
                </div>
              </div>
            )}

            {/* Carousel Controls */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </>
        )}

        {/* Category Badge */}
        {project?.category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 font-medium">
              {project.category}
            </Badge>
          </div>
        )}
      </div>

      {/* --- Project Content --- */}
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
            {project?.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project?.description}
          </p>
        </div>

        {/* Role & Contribution */}
        {project?.role && (
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <User className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-purple-700 mb-2">
                  Role & Contribution
                </h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Technologies Section */}
        {project?.techDetails && (
          <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Code2 className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="text-sm font-semibold text-teal-700">
                  Technologies Used
                </h4>
                {Object.entries(project.techDetails).map(
                  ([category, techs]) => (
                    <div key={category}>
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-medium">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-700 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project?.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project?.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-900 text-sm font-medium transition-all border border-gray-200"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
