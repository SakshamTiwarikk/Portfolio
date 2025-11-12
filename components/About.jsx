import React, { useState } from "react";
import { Code2, Briefcase, GraduationCap, Award, TrendingUp, Users, Coffee, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const skills = [
    { name: "JavaScript", level: 90, category: "Languages" },
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "TypeScript", level: 88, category: "Languages" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "REST APIs", level: 88, category: "Backend" },
  ];

  const stats = [
    { icon: Code2, value: "400+", label: "UI Components Built", color: "text-teal-600" },
    { icon: Briefcase, value: "8+", label: "Months Experience", color: "text-blue-600" },
    { icon: Users, value: "2+", label: "Major Projects", color: "text-green-600" },
  ];

  const experiences = [
    {
      title: "Front End Engineer Intern",
      company: "Stratzi.AI",
      location: "Pune, India",
      period: "July 2025 – Oct 2025",
      highlights: [
        "Developed e-Governance platform for Government of Maharashtra streamlining land-related workflows",
        "Built responsive insurance operations dashboard using Next.js, TypeScript, and Tailwind CSS",
        "Integrated REST APIs, dynamic form rendering, and secure file handling"
      ]
    },
    {
      title: "SDE Intern",
      company: "UXMagic.AI",
      location: "Bangalore, India",
      period: "Feb 2025 – May 2025",
      highlights: [
        "Developed and maintained 400+ modular, reusable UI components",
        "Collaborated in fast-paced agile environment with regular peer reviews",
        "Ensured code quality through strict TypeScript type checking and scalability"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all group"
            >
              <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-50 transition-colors`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            {["overview", "experience", "skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-teal-500 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I&apos;m a dedicated professional with a passion for creating impactful digital experiences. 
                    With a background in computer science and years of hands-on experience, I&apos;ve developed 
                    a unique blend of technical expertise and creative problem-solving skills.
                  </p>
                  <p>
                    My journey began during my undergraduate studies, where I discovered my love for 
                    building elegant solutions to complex challenges. Since then, I&apos;ve worked with diverse 
                    teams and clients, delivering projects that combine innovation with practicality.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Vellore Institute of Technology, Chennai
                  </h4>
                  <p className="text-teal-600 font-medium">B.Tech Electronic and Computer Engineering</p>
                  <p className="text-gray-600">May 2021 – May 2025</p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                      <Award className="w-4 h-4 text-teal-600" />
                      <span className="text-gray-700">GPA: 8.21/10.0</span>
                    </div>
         
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      <strong className="text-gray-900">Relevant Coursework:</strong> Data Structures, 
                      Object-Oriented Programming, Web Development, Database Management Systems, 
                      Software Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                      <p className="text-teal-600 font-medium text-lg">{exp.company}</p>
                      <p className="text-gray-600 text-sm mt-1">{exp.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm">
                        <Briefcase className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-teal-500 mt-1.5 text-lg">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-gray-900 font-semibold">{skill.name}</h4>
                        <p className="text-xs text-gray-500">{skill.category}</p>
                      </div>
                      <span className="text-teal-600 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="absolute inset-y-0 left-0 bg-teal-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Additional Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Postman", "Vercel", "Netlify", "Figma", "VS Code", "MongoDB Compass"].map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}