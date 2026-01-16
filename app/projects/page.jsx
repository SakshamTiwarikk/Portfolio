/* eslint-disable */
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCards";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: "Lenny - E-commerce Platform",
      description:
        "A comprehensive e-commerce solution featuring product listings, advanced search and filter capabilities, shopping cart management, and secure checkout flow. Built with React for the frontend and Node.js for the backend, ensuring smooth performance and excellent user experience across all devices.",
      icon: "🛒",
      category: "Full Stack",
      images: "lenny.png",
      videoUrl: null,
      role: "Full Stack Developer - Architected and developed the entire application from concept to deployment. Responsible for frontend UI/UX design, backend API development, database modeling, and integration testing. Implemented responsive design patterns and optimized performance for scalability.",
      techDetails: {
        Frontend: ["React", "Tailwind CSS", "React Router", "Context API"],
        Backend: ["Node.js", "Express.js", "JWT Authentication"],
        Database: ["MongoDB", "Mongoose ODM"],
        "Tools & Deployment": ["Git", "Postman", "Netlify", "Heroku"],
      },
      features: [
        "Dynamic product filtering and search functionality",
        "Real-time shopping cart with persistent state",
        "User authentication and authorization",
        "Responsive design for all screen sizes",
        "RESTful API architecture",
      ],
    },
    {
      title: "Sentinel ",
      description:
        "A fully animated, visually striking website with smooth scroll-triggered animations, a responsive layout, and engaging transitions. It features a dynamic hero section, modular content blocks, sticky navigation, and parallax effects for depth. Built with modern web technologies (likely React + animation libraries), the site delivers a sleek user experience without any backend integration.",
      icon: "📊",
      category: "Frontend",
      images: ["placeholder1.jpg", "placeholder2.jpg"],
      techDetails: {
        Frontend: ["React","Vite", "Tailwind CSS"],
        "State Management": ["React Context API", "Local Storage"],
        Tools: ["Git", "Vercel", "Figma"],
      },
      features: [
        "Task creation with customizable priorities",
        "Deadline management and reminders",
        "Progress tracking dashboard",
        "Modular project organization",
        "Search and filter capabilities",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              My Projects
            </h1>
            <div className="w-[22rem] h-1 bg-teal-500 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-6xl">
              A collection of projects showcasing my expertise in full-stack web
              development, from e-commerce platforms to enterprise dashboards.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Let's work together to bring your ideas to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-xl text-white font-medium shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
