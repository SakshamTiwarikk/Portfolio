import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCards";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const featuredProjects = [
    {
      title: "Lenny - E-commerce Platform",
      description:
        "A fully responsive e-commerce site with product listings, advanced filters, and dynamic cart functionality. Built with React and Node.js for smooth user experience across all device sizes.",
      icon: "🛒",
      category: "Full Stack",
      images: ["placeholder1.jpg", "placeholder2.jpg", "placeholder3.jpg"],
      videoUrl: null,
      role: "Full Stack Developer - Designed and implemented the entire application from scratch, including frontend UI components, backend API architecture, database schema, and deployment pipeline.",
      techDetails: {
        Frontend: ["React", "Tailwind CSS", "React Router"],
        Backend: ["Node.js", "Express.js", "MongoDB"],
        Tools: ["Git", "Postman", "Netlify"],
      },
      features: [
        "Dynamic product filtering and search",
        "Real-time shopping cart with persistent state",
        "Responsive design for mobile and desktop",
        "RESTful API for product management",
      ],
      liveLink: "https://e-commerce-fullstack-nine.vercel.app/",
    },
    {
      title: "Sentinel",
      description:
        "A fully animated, visually striking website with smooth scroll-triggered animations, a responsive layout, and engaging transitions. It features a dynamic hero section, modular content blocks, sticky navigation, and parallax effects for depth. Built with modern web technologies (likely React + animation libraries), the site delivers a sleek user experience without any backend integration.",
      icon: "📊",
      category: "Frontend",
      images: ["placeholder1.jpg", "placeholder2.jpg"],
      videoUrl: null,
      role: "Frontend Developer - Developed the complete frontend architecture, implemented task management features, and created an intuitive UI for project tracking and organization.",
      techDetails: {
        Frontend: ["Vite", "Tailwind CSS", "React Hooks"],
        "State Management": ["React Context API"],
        Tools: ["Git", "Vercel"],
      },
      features: [
        "Task creation and management with priorities",
        "Progress tracking dashboard",
        "Deadline notifications",
        "Modular task organization",
      ],
      liveLink: null,
      githubLink: null,
    },
  ];

  return (
    <div>
      <Hero />
      <About />

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in
              full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured={true} />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
